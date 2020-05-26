import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from 'reactor/components/tooltip';
import DeleteIcon from '@material-ui/icons/DeleteSweep';
import { trans } from 'reactor/localization';

export function TableAddButton(props) {
    return (
        <IconButton onClick={props.onClick}>
            <Tooltip title={trans('add')}>
                <AddIcon fontSize="large" color="primary" />
            </Tooltip>
        </IconButton>
    )
}   

export function TableEditButton(props) {
    const editClick = e => {
        props.onClick(e, 'edit');
    };
    return (
        <IconButton onClick={editClick}>
            <Tooltip title={trans('edit')}>
                <EditIcon />
            </Tooltip>
        </IconButton>
    )
}

export function TableDeleteButton(props) {
    const deleteClick = e => {
        props.onClick(e, 'remove');
    };
    return (
        <IconButton onClick={deleteClick}>
            <Tooltip title={trans('remove')}>
                <DeleteIcon />
            </Tooltip>
        </IconButton>
    )
}