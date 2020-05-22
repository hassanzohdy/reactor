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
    let { options, records } = props;
    
    let [tableHeading, tableRows] = tableStructure(options, records);

    const [formIsDisplayed, displayForm] = useState(false);

    const closeModal = () => displayForm(false);

    return (
        <>
            <FormModal open={formIsDisplayed} 
                        onSubmit={closeModal} 
                        title={trans('addItem', trans(options.singleName))} 
                        onClose={closeModal}>
                <options.form />
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