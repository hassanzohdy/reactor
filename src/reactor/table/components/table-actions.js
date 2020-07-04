import React from 'react';
import { trans } from 'reactor/localization';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from 'reactor/components/tooltip';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

export function TableAddButton(props) {
    return (
        <IconButton onClick={props.onClick}>
            <Tooltip title={trans('add')}>
                <AddIcon fontSize="large" color="primary" />
            </Tooltip>
        </IconButton>
    )
}

export function TableEditButton({ record, rowIndex, setRecord }) {
    const editClick = e => {
        setRecord(record, rowIndex, 'edit');
    };
    return (
        <IconButton onClick={editClick}>
            <Tooltip title={trans('edit')}>
                <EditIcon />
            </Tooltip>
        </IconButton>
    )
}

export function TableDeleteButton({ record, rowIndex, setRecord }) {
    const deleteClick = e => {
        setRecord(record, rowIndex, 'remove');
    };
    return (
        <IconButton onClick={deleteClick}>
            <Tooltip title={trans('remove')}>
                <DeleteIcon />
            </Tooltip>
        </IconButton>
    )
}