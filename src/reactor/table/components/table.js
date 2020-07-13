import React from 'react';
import TableHead from './table-head';
import TableBody from './table-body';
import TableToolBar from './table-toolbar';
import Paper from '@material-ui/core/Paper';
import MaterialTable from '@material-ui/core/Table';
import TableProvider from '../providers/table-provider';
import TableContainer from '@material-ui/core/TableContainer';

export default function Table(props) {
    let { options, records } = props;
    const [tableRecords, setRecords] = React.useState(records);

    const tableOptions = {
        records: tableRecords,
        updateRecords: setRecords,
        options,
        service: options.service,
    };

    return (
        <TableProvider.Provider value={tableOptions}>
            <TableToolBar />
            <TableContainer component={Paper}>
                <MaterialTable>
                    <TableHead />
                    <TableBody />
                </MaterialTable>
            </TableContainer>
        </TableProvider.Provider>
    );
}