import TableForm from './table-form';
import React, { useState } from 'react';
import TableToolBar from './table-toolbar';
import Paper from '@material-ui/core/Paper';
import { trans } from 'reactor/localization';
import tableStructure from './table-structure';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';


export default function Table(props) {
    let { options, records, service } = props;
    const [formIsDisplayed, displayForm] = useState(false);
    const [record, setRecord] = useState({});
    const [recordIndex, setIndex] = useState(null);
    const [action, setAction] = useState(null);
    const [tableRecords, setRecords] = useState(records);

    /**
     * Triggered when user clicks on any of table action buttons
     *  
     * @param {Object} record 
     * @param {number} index 
     * @param {string} currentAction 
     */
    const recordUpdate = (record, index, currentAction) => {
        setRecord(record);
        setIndex(index);
        setAction(currentAction); // remove
        if (currentAction === 'edit') {
            displayForm(true);
        }
    };

    // store the value until one of the given deps is changed
    let [tableHeading, tableRows] = React.useMemo(() => {
        return tableStructure(options, tableRecords, recordUpdate, service, setRecords);
    }, [options, tableRecords, service]);

    const closeForm = () => {
        displayForm(false);
        setTimeout(() => {
            // Reset the action to null
            setAction(null);
            // Reset the record to empty object to clean up any updated records
            setRecord({});
        }, 100);
    };

    const itemType = action === 'edit' ? 'editItem' : 'addItem';

    const onSubmit = async (action, record) => {
        if (action === 'edit') {
            // update existing record data by its index
            tableRecords[recordIndex] = record;
            // reset the records list to force re-render the table rows
            setRecords(tableRecords.concat([]));
        } else {
            tableRecords.unshift(record);
            setRecords(tableRecords.concat([]));
        }

        closeForm();
    };

    return (
        <>
            {/* Form */}

            <TableForm
                onSubmit={onSubmit}
                open={formIsDisplayed}
                onClose={closeForm}
                service={service}
                action={action}
                formOptions={options.formOptions}
                recordIndex={recordIndex}
                record={record}
                itemType={itemType}
            />

            <TableToolBar displayForm={displayForm} text={trans(options.table.heading)} />
            <TableContainer component={Paper}>
                <MaterialTable stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tableHeading}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </MaterialTable>
            </TableContainer>
        </>
    );
}