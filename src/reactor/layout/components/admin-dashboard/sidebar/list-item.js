import cls from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'reactor/components/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useLayoutClasses from 'reactor/layout/utils/style';
import { styled } from '@material-ui/core';

const ItemLink = styled(Link)({
    color: '#333',
});

export default function SidebarListItem(props) {
    let { text, route, nested, active } = props;
    const classes = useLayoutClasses();

    const className = cls({
        [classes.sidebarNestedItem]: nested === true,
    });

    const coloredTextClass = cls({
        [classes.sidebarActiveColor]: active === true,
    });

    return (
        <ListItem
            className={className}
            component={ItemLink}
            to={route}
            button
        >
            <ListItemIcon classes={{ root: classes.sidebarListItemIcon }}>
                {<props.icon />}
            </ListItemIcon>
            <ListItemText classes={{root: coloredTextClass}} primary={text} />
        </ListItem>
    );
}

SidebarListItem.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    nested: PropTypes.bool
};