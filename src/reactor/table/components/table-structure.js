import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Obj } from 'reinforcements';

import { TableEditButton, TableDeleteButton } from './table-actions';

const defaultTableActions = {
    heading: 'actions',
    buttons: [TableEditButton, TableDeleteButton]
};

export default function tableStructure(options, records, setRecord) {
    if (options.actions === true && !options.actionsIsAdded) {
        options.columns.push(defaultTableActions);
        options.actionsIsAdded = true;
    }

    let tableHeading = options.columns.map((column, index) => {
        return <TableCell key={index}>{column.heading}</TableCell>;
    });

    let tableRows = records.map((record, rowIndex) => {
        if (! record.columnsList) {
            record.columnsList = Obj.clone(options.columns);
        }
        return <TableRow key={record.id}>
            {record.columnsList.map((column, columnIndex) => {
                column.value = Obj.get(column, 'value', Obj.get(record, column.key));

                // if no value and there is a default value
                // then create new key `originalValue` and override 
                // the value key with the default value 
                if (!column.value && column.defaultValue) {
                    column.originalValue = column.value;
                    column.value = column.defaultValue;
                }

                const columnValue = column.formatter ? <column.formatter record={record} setRecord={setRecord} column={column} rowIndex={rowIndex} columnIndex={columnIndex} /> : column.value;

                return <TableCell key={column.heading}>
                    {columnValue}
                </TableCell>
            })}

        </TableRow>;
    });

    return [tableHeading, tableRows];
} 