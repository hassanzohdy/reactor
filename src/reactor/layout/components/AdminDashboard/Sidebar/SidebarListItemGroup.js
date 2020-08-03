import cls from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import SidebarListItem from './SidebarListItem';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useLayoutClasses from 'reactor/layout/utils/style';
import SidebarContext from './SidebarContext';

export default function SidebarListItemGroup(props) {
    const { text, items, onClick } = props;
    const sidebarGroupRoutes = [];

    let itemsList = items.map((item, index) => {
        sidebarGroupRoutes.push(item.route);
        return (
            <SidebarListItem
                nested
                key={index}
                onClick={onClick}
                route={item.route}
                text={item.text}
                icon={item.icon}
            />
        )
    });

    const { currentRoute } = React.useContext(SidebarContext);
    const [isActiveGroup, setActiveGroup] = React.useState(sidebarGroupRoutes.includes(currentRoute));

    const [open, setOpen] = React.useState(sidebarGroupRoutes.includes(currentRoute));

    const classes = useLayoutClasses();


    // when the sidebar group is opened
    // when an item from the list is matching the current route

    React.useEffect(() => {
        setActiveGroup(sidebarGroupRoutes.includes(currentRoute));
    }, [currentRoute, sidebarGroupRoutes]);

    const coloredText = cls({
        [classes.sidebarActiveColor]: isActiveGroup === true,
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