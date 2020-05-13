import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

export default function SidebarListItem(props) {
    let { text, route, icon, nestedItemClass } = props;

    return (
        <ListItem
            className={nestedItemClass}
            component={Link}
            to={route}
            button
        >
            <ListItemIcon>
                {React.createElement(icon)}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}