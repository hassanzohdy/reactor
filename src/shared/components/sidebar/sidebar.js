import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import { Dashboard } from '@material-ui/icons';
// import ListItems from './list-item';
import ListItem from './list-item';
import ListItemGroup from './list-item-group';
import StarBorder from '@material-ui/icons/StarBorder';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Sidebar(props) {
    let { classes, onClose, open } = props;
    const theme = useTheme();
    const listItemsClasses = useStyles();

    let group = {
        text: 'Users Groups',
        icon: SendIcon,
        items: [
            {
                route: '/users',
                text: 'Users List',
                icon: StarBorder,
            },
        ],
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={onClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />

            <List
                component="nav"
                className={listItemsClasses.root}
            >
                <ListItem text="Dashboard" icon={Dashboard} route="/" />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
                <ListItemGroup nestedItemClass={listItemsClasses.nested} text={group.text} icon={group.icon} items={group.items} />
            </List>
        </Drawer>
    );
}