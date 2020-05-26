import React from 'react';
import BaseTooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import config from 'reactor/config';

const useStyles = makeStyles({
    tooltip: {
        backgroundColor: config.get('tooltip.backgroundColor', '#000'),
    }
});

export default function Tooltip(props) {
    const classes = useStyles();

    return <BaseTooltip classes={{ tooltip: classes.tooltip }} placement="top" {...props} />
}