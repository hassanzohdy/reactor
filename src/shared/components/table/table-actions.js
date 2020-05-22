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
        <Tooltip classes={{tooltip: classes.tooltip}} placement="top" title={trans('add')}>
        <IconButton onClick={props.onClick}>
            <AddIcon fontSize="large" color="primary" />
        </IconButton>
        </Tooltip>
    )
}
export function TableEditButton(props) {
    const classes = useStyles(); 
    return (
        <Tooltip classes={{tooltip: classes.tooltip}} placement="top" title={trans('edit')}>
        <IconButton>
            <EditIcon />
        </IconButton>
        </Tooltip>
    )
}

export function TableDeleteButton(props) {
    const classes = useStyles(); 
    return (
        <Tooltip classes={{tooltip: classes.tooltip}} placement="top" title={trans('remove')}>
        <IconButton>
            <DeleteIcon />
        </IconButton>
        </Tooltip>
    )
}