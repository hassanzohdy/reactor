import React from 'react';
import Is from '@flk/supportive-is';
import { Obj } from 'reinforcements';
import useTable from '../hooks/use-table';
import { trans } from 'reactor/localization';
import { TableRow } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import { TextCenter } from 'reactor/components/Aligned';
import useLayoutClasses from 'reactor/layout/utils/style';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableRowProvider from '../providers/table-row-provider';

export default function TableBody({ isLoading }) {
    const { records, options, updateRecords } = useTable();

    const classes = useLayoutClasses();

    let tableRows;

    if (isLoading) {
        tableRows = (
            <TableRow>
                <TableCell colSpan={options.table.columns.length}>
                    <TextCenter>{trans('loading')}</TextCenter>
                </TableCell>
            </TableRow>
        );
    } else if (Is.array(records) && Is.empty(records)) {
        tableRows = (
            <TableRow>
                <TableCell className={classes.textCenter} colSpan={options.table.columns.length}>
                    {trans('noResults')}
                </TableCell>
            </TableRow>
        );
    } else {
        tableRows = records.map((record, rowIndex) => {
            if (!record.columnsList) {
                record.columnsList = Obj.clone(options.table.columns);
            }

            const tableRowValue = {
                record,
                rowIndex,
                updateRecord(record) {
                    updateRecords(records => {
                        records[rowIndex] = record;

                        return [...records];
                    });
                }
            }

            return (
                <TableRowProvider.Provider key={record.id} value={tableRowValue}>
                    <TableRow>
                        {record.columnsList.map((column, columnIndex) => {
                            // if (column.cell) return column.cell;

                            column.value = Obj.get(column, 'value', Obj.get(record, column.key));

                            // if no value and there is a default value
                            // then create new key `originalValue` and override 
                            // the value key with the default value 
                            if (!column.value && column.defaultValue) {
                                column.originalValue = column.value;
                                column.value = column.defaultValue;
                            }

                            const columnValue = column.formatter ? <column.formatter record={record} column={column} rowIndex={rowIndex} columnIndex={columnIndex} /> : column.value;

                            column.cell = <TableCell key={column.heading}>
                                {columnValue}
                            </TableCell>;

                            return column.cell;
                        })}
                    </TableRow>
                </TableRowProvider.Provider>
            )
        });
    }


    return (
        <MaterialTableBody>
            {tableRows}
        </MaterialTableBody>
    );
}