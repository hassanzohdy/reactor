import cls from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core';
import Link from 'reactor/components/Link';
import SidebarContext from './SidebarContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useLayoutClasses from 'reactor/layout/utils/style';

const ItemLink = styled(Link)({
    color: '#333',
});

export default function SidebarListItem(props) {
    let { text, route, nested, onClick } = props;
    const classes = useLayoutClasses();

    const { currentRoute } = React.useContext(SidebarContext);

    const [isActiveItem, setActiveItem] = React.useState(currentRoute === route);

    React.useEffect(() => {
        setActiveItem(route === currentRoute);
    }, [currentRoute, route]);

    const className = cls({
        [classes.sidebarNestedItem]: nested === true,
    });

    const coloredTextClass = cls({
        [classes.sidebarActiveColor]: isActiveItem === true,
    });

    return (
        <ListItem
            className={className}
            component={ItemLink}
            to={route}
            onClick={onClick}
            button
        >
            <ListItemIcon classes={{ root: classes.sidebarListItemIcon }}>
                {<props.icon />}
            </ListItemIcon>
            <ListItemText classes={{ root: coloredTextClass }} primary={text} />
        </ListItem>
    );
}

SidebarListItem.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    nested: PropTypes.bool
};