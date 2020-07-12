import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import grey from '@material-ui/core/colors/grey';
import { TableAddButton } from './table-actions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/ListOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        color: 'inherit',
        backgroundColor: grey[100],
        marginBottom: '0.4rem',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TableToolBar(props) {
    const classes = useStyles();

    let { text, displayForm } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <IconButton edge="start" >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {text}
                    </Typography>
                    <TableAddButton onClick={() => displayForm(true)} />
                </Toolbar>
            </AppBar>
        </div>
    );
}