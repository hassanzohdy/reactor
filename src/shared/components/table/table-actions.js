import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { trans } from 'reactor/localization';

const useStyles = makeStyles({
    addButton: {
        fill: lightBlue[800],
    },
    tooltip: {
        backgroundColor: '#000',
    }
});

export function TableAddButton(props) {
    const classes = useStyles();
    return (
        <IconButton onClick={props.onClick}>
            <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('add')}>
                <AddIcon fontSize="large" color="primary" />
            </Tooltip>
        </IconButton>
    )
}

export function TableEditButton(props) {
    const classes = useStyles();
    const editClick = e => {
        props.onClick(e, 'edit');
    };
    return (
        <IconButton onClick={editClick}>
            <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('edit')}>
                <EditIcon />
            </Tooltip>
        </IconButton>
    )
}

export function TableDeleteButton(props) {
    const classes = useStyles();
    const deleteClick = e => {
        props.onClick(e, 'remove');
    };
    return (
        <IconButton onClick={deleteClick}>
            <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('remove')}>
                <DeleteIcon />
            </Tooltip>
        </IconButton>
    )
}