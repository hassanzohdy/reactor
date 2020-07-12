import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/ListOutlined';
import TableAddButton from './actions/add';

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

export default function TableToolBar({ text, options, updateRecords, service }) {
    const classes = useStyles();

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
                    <TableAddButton updateRecords={updateRecords} options={options} service={service} />
                </Toolbar>
            </AppBar>
        </div>
    );
}