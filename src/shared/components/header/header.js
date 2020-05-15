import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import layoutSettings from '../layout-settings';

export default function Header(props) {
    let classes = layoutSettings(),
        sidebarIsOpened = props.sidebarIsOpened;

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: sidebarIsOpened,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.onClick}
                    edge="start"
                    className={clsx(classes.menuButton, sidebarIsOpened && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Persistent drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object,
    sidebarIsOpened: PropTypes.bool,
}