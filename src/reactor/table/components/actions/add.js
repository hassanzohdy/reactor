import React from 'react';
import { trans } from 'reactor/localization';
import Tooltip from 'reactor/components/tooltip';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

export default function TableAddButton(props) {
    return (
        <IconButton onClick={props.onClick}>
            <Tooltip title={trans('add')}>
                <AddIcon fontSize="large" color="primary" />
            </Tooltip>
        </IconButton>
    )
}
