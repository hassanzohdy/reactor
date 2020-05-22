import React from 'react';
import { Obj } from 'reinforcements';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableToolBar from './table-toolbar';
import { trans } from 'reactor/localization';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import { TableEditButton, TableDeleteButton } from 'shared/components/table/table-actions';

const defaultTableActions = {
    heading: 'actions',
    buttons: [TableEditButton, TableDeleteButton]
};

export default function SimpleTable(props) {
    let { options, records } = props;

    if (options.actions === true) {
        options.columns.push(defaultTableActions);
    }

    let tableHeading = options.columns.map(column => {
        return <TableCell key={column.heading}>{trans(column.heading)}</TableCell>;
    });


    let tableRows = records.map((record, recordIndex) => {
        return <TableRow key={record.id}>
            {options.columns.map(column => {
                if (column.buttons) {
                    return <TableCell key={column.heading}>
                        {column.buttons.map((ActionButton, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ActionButton />
                                </React.Fragment>
                            )
                        })}
                    </TableCell>
                }
                return <TableCell key={column.heading}>
                    {Obj.get(record, column.key)}
                </TableCell>
            })}

        </TableRow>;
    });

    return (
        <>
            <TableToolBar text={trans(options.heading)} />
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