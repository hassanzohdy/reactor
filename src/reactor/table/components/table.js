import React from 'react';
import TableToolBar from './table-toolbar';
import Paper from '@material-ui/core/Paper';
import { trans } from 'reactor/localization';
import tableStructure from './table-structure';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableProvider from '../providers/table-provider';

export default function Table(props) {
    let { options, records, service } = props;
    const [tableRecords, setRecords] = React.useState(records);

    // store the value until one of the given deps is changed
    let [tableHeading, tableRows] = React.useMemo(() => {
        return tableStructure(options, tableRecords, service, setRecords);
    }, [options, tableRecords, service]);

    const tableOptions = {
        records: tableRecords,
        updateRecords: setRecords,
        options,
        service,
    };

    return (
        <TableProvider.Provider value={tableOptions}>
            <TableToolBar />
            <TableContainer component={Paper}>
                <MaterialTable>
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
        </TableProvider.Provider>
    );
}