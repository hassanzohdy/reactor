import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialBackdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    lightBackdrop: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#333',
    }
}));

export default function Backdrop({ open, onClick, className, position = 'absolute' }) {
    const classes = useStyles();

    const backdropClass = clsx(classes.backdrop, className);

    return (
        <MaterialBackdrop style={{ position }} className={backdropClass} open={open} onClick={onClick}>
            <CircularProgress color="inherit" />
        </MaterialBackdrop>
    );
}

export function LightBackdrop({ className, ...props }) {
    const classes = useStyles();

    const backdropClass = clsx(classes.lightBackdrop, className);

    return <Backdrop {...props} className={backdropClass} />
}