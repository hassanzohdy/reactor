import React from 'react';
import { trans } from 'reactor/localization';
import { IconButton } from '@material-ui/core';
import Tooltip from 'reactor/components/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { navigateTo, currentRoute, concatRoute } from 'reactor/router';

export default function TableViewButton({ record, column, ...otherProps }) {
    const onButtonClick = e => {
        if (column.onViewClick) {
            column.onViewClick(record, column, ...otherProps);
        } else {
            navigateTo(concatRoute(currentRoute(), record.id));
        }
    };
    return (
        <IconButton onClick={onButtonClick}>
            <Tooltip title={trans('view')}>
                <VisibilityIcon />
            </Tooltip>
        </IconButton>
    )
}
