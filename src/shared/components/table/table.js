import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Obj } from 'reinforcements';
import { TableAddButton, TableEditButton, TableDeleteButton } from './table-actions';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable(props) {
    const classes = useStyles();

    let { options, records } = props;

    let tableHeading = options.columns.map(column => {
        return <TableCell key={column.heading}>{column.heading}</TableCell>;
    });

    let tableRows = records.map(record => {
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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
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
    );
}