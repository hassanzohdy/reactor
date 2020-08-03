import React from 'react';
import { trans } from 'reactor/localization';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SubmitButton from 'reactor/form/components/SubmitButton';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

export default function FormModalTitle(props) {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {props.title}
                </Typography>
                <SubmitButton color="inherit">
                    {trans('save')}
                </SubmitButton>
            </Toolbar>
        </AppBar>
    )
}