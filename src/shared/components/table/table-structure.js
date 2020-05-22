import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Obj } from 'reinforcements';

import { TableEditButton, TableDeleteButton } from './table-actions';

const defaultTableActions = {
    heading: 'actions',
    buttons: [TableEditButton, TableDeleteButton]
};

export default function tableStructure(options, records) {
    if (options.actions === true && ! options.actionsIsAdded) {
        options.columns.push(defaultTableActions);
        options.actionsIsAdded = true;
    }

    let tableHeading = options.columns.map((column, index) => {
        return <TableCell key={index}>{column.heading}</TableCell>;
    });

    let tableRows = records.map((record, recordIndex) => {
        return <TableRow key={record.id}>
            {options.columns.map((column, columnIndex) => {
                if (column.buttons) {
                    return <TableCell key={columnIndex}>
                        {column.buttons.map((ActionButton, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ActionButton record={record} index={recordIndex} />
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

    return [tableHeading, tableRows];
} 