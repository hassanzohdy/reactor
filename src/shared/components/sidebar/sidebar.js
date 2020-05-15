import React from 'react';
import List from '@material-ui/core/List';
import items from './sidebar-items-list';
import SidebarListItem from './list-item';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import SidebarListItemGroup from './list-item-group';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import layoutSettings from '../layout-settings';

export default function Sidebar(props) {
    let { onClose, open } = props;
    const theme = useTheme();
    const classes = layoutSettings();

    let itemsList = items.map((item, index) => {
        // in this case, we'll return itemGroup
        if (item.items) {
            return <SidebarListItemGroup
                key={index}
                nestedItemClass={classes.sidebarNestedItem}
                text={item.text}
                icon={item.icon}
                items={item.items} 
            />;
        }

        // otherwise, we'll just return a list item
        return <SidebarListItem
            key={index}
            text={item.text}
            icon={item.icon}
            route={item.route} />;
    });

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
                className={classes.sidebar}
            >
                { itemsList }
            </List>
        </Drawer>
    );
}