import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

export function TableAddButton(props) {
    return (
        <Tooltip placement="top" title="Add">
        <IconButton>
            <AddIcon />
        </IconButton>
        </Tooltip>
    )
}
export function TableEditButton(props) {
    return (
        <Tooltip placement="top" title="Edit">
        <IconButton>
            <EditIcon />
        </IconButton>
        </Tooltip>
    )
}

export function TableDeleteButton(props) {
    return (
        <Tooltip placement="top" title="Remove">
        <IconButton>
            <DeleteIcon />
        </IconButton>
        </Tooltip>
    )
}