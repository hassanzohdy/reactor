import React from 'react';
import List from '@material-ui/core/List';
import sidebarItems from './sidebar-items-list';
import SidebarListItem from './list-item';
import { trans } from 'reactor/localization';
import Drawer from '@material-ui/core/Drawer';
import SidebarContext from './sidebar-context';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import SidebarListItemGroup from './list-item-group';
import IconButton from '@material-ui/core/IconButton';
import layoutClasses from 'reactor/layout/utils/style';
import { currentRoute } from 'reactor/router/navigator';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Sidebar(props) {
    let { onClose, open } = props;
    const theme = useTheme();
    const classes = layoutClasses();
    const route = currentRoute();

    const sidebarContextValue = {
        currentRoute: route,
    };


    let itemsList = sidebarItems.getItems().map((item, index) => {
        // in this case, we'll return itemGroup
        if (item.items) {
            return <SidebarListItemGroup
                key={index}
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
        <SidebarContext.Provider value={sidebarContextValue}>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={onClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <h1>{trans('appName')}</h1>
                    <IconButton onClick={onClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List
                    component="nav"
                    className={classes.sidebar}
                >
                    {itemsList}
                </List>
            </Drawer>
        </SidebarContext.Provider>
    );
}