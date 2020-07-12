import React from 'react';
import { trans } from 'reactor/localization';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from 'reactor/components/tooltip';
import IconButton from '@material-ui/core/IconButton';

export default function TableEditButton({ record, rowIndex, setRecord }) {
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
