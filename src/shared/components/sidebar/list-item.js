import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

SidebarListItem.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    // icon: PropTypes.element.isRequired,
    nestedItemClass: PropTypes.string
};