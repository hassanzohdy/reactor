import React from 'react';
import { Obj } from 'reinforcements';
import { trans } from 'reactor/localization';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function tableStructure(options, records, setRecord) {
    let tableHeading = options.table.columns.map((column, index) => {
        return <TableCell key={index}>{trans(column.heading)}</TableCell>;
    });

    let tableRows = records.map((record, rowIndex) => {
        if (! record.columnsList) {
            record.columnsList = Obj.clone(options.table.columns);
        }

        return <TableRow key={record.id}>
            {record.columnsList.map((column, columnIndex) => {
                if (column.cell) return column.cell;

                column.value = Obj.get(column, 'value', Obj.get(record, column.key));

                // if no value and there is a default value
                // then create new key `originalValue` and override 
                // the value key with the default value 
                if (!column.value && column.defaultValue) {
                    column.originalValue = column.value;
                    column.value = column.defaultValue;
                }

                const columnValue = column.formatter ? <column.formatter record={record} setRecord={setRecord} column={column} rowIndex={rowIndex} columnIndex={columnIndex} /> : column.value;

                column.cell = <TableCell key={column.heading}>
                    {columnValue}
                </TableCell>;

                return column.cell;
            })}
    
        </TableRow>;
    });

    return [tableHeading, tableRows];
} 