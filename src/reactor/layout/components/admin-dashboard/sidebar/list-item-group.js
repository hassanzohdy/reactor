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

export default function SidebarListItemGroup(props) {
    const { text, icon, items, nestedItemClass } = props;

    const [open, setOpen] = React.useState(false);

    let itemsList = items.map((item, index) => {
        return (
            <SidebarListItem
                nestedItemClass={nestedItemClass}
                key={index}
                route={item.route}
                text={item.text}
                icon={item.icon}
            />
        )
    });

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    { React.createElement(icon) }
                </ListItemIcon>
                <ListItemText primary={text} />
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