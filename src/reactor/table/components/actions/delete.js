import React from 'react';
import { trans } from 'reactor/localization';
import Tooltip from 'reactor/components/tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

export default function TableDeleteButton({ record, rowIndex, setRecord }) {
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