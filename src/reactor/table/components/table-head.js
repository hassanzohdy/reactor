import React from 'react';
import useTable from '../hooks/use-table';
import { TableCell, TableRow } from '@material-ui/core';
import { trans } from 'reactor/localization';
import MaterialTableHead from '@material-ui/core/TableHead';

export default function TableHeading() {
    const { options } = useTable();

    const columns = options.table.columns.map((column, index) => {
        return <TableCell key={index}>{trans(column.heading)}</TableCell>;
    });

    return (
        <MaterialTableHead>
            <TableRow>
                {columns}
            </TableRow>
        </MaterialTableHead>
    )
}