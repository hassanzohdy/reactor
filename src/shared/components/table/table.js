import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableToolBar from './table-toolbar';
import Paper from '@material-ui/core/Paper';
import { trans } from 'reactor/localization';
import tableStructure from './table-structure';
import FormModal from './../layout/form-modal';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

export default function SimpleTable(props) {
    let { options, records, service } = props;
    const [formIsDisplayed, displayForm] = useState(false);
    const [record, setRecord] = useState({});
    const [recordIndex, setIndex] = useState(null);
    const [action, setAction] = useState(null);
    const [tableRecords, setRecords] = useState(records);

    const recordUpdate = (record, index, currentAction) => {
        setRecord(record);
        setIndex(index);
        setAction(currentAction);
        if (currentAction === 'edit') {
            displayForm(true);
        }
    };
    
    // store the value until one of the given deps is changed
    let [tableHeading, tableRows] = React.useMemo(() => {
        return tableStructure(options, tableRecords, recordUpdate);
    }, [tableRecords]);

    const closeModal = () => {
        displayForm(false);
        setTimeout(() => {
            // Reset the action to null
            setAction(null);
            // Reset the record to empty object to clean up any updated records
            setRecord({});
        }, 100);
    };

    const itemType = action === 'edit' ? 'editItem' : 'addItem';

    const submitForm = async (e) => {
        const form = e.target;
        if (action === 'edit') {
            service.update(record.id, form);
        } else {
            // action here is adding
            let { data } = await service.create(form);

            let { record } = data;

            tableRecords.unshift(record);
            setRecords(tableRecords.concat([]));      
        }

        closeModal();
    };

    return (
        <>
            <FormModal
                open={formIsDisplayed}
                onSubmit={submitForm}
                title={trans(itemType, trans(options.singleName))}
                onClose={closeModal}
            >
                <options.form index={recordIndex} record={record} />
            </FormModal>
            <TableToolBar displayForm={displayForm} text={trans(options.heading)} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {tableHeading}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}