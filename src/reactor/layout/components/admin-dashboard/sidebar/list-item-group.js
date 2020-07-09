import cls from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import SidebarListItem from './list-item';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useLayoutClasses from 'reactor/layout/utils/style';
import { routeOnly } from 'reactor/router/navigator';

export default function SidebarListItemGroup(props) {
    const { text, items } = props;

    const classes = useLayoutClasses();

    let expandGroup = false;

    const currentRoute = routeOnly();

    let itemsList = items.map((item, index) => {
        const active = currentRoute === item.route;

        if (active) {
            expandGroup = true;
        }

        return (
            <SidebarListItem
                nested
                active={active}
                key={index}
                route={item.route}
                text={item.text}
                icon={item.icon}
            />
        )
    });

    const [open, setOpen] = React.useState(expandGroup);

    const coloredText = cls({
        [classes.sidebarActiveColor]: expandGroup === true,
    });

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon classes={{ root: classes.sidebarListItemIcon }}>
                    {<props.icon />}
                </ListItemIcon>
                <ListItemText classes={{ root: coloredText }} primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {itemsList}
                </List>
            </Collapse>
        </>
    );
}

SidebarListItemGroup.propTypes = {
    text: PropTypes.string.isRequired,
    // icon: PropTypes.node.isRequired, 
    nestedItemClass: PropTypes.string,
    items: PropTypes.array.isRequired,
};