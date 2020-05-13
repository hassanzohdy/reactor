import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ReactorComponent from 'reactor/component/reactor.component';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { AppBar } from '@material-ui/core';

export default class Header extends ReactorComponent {
    /**
     * {@inheritDoc}
     */
    render() {
        let classes = this.props.classes,
            sidebarIsOpened = this.props.sidebarIsOpened;
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
                        onClick={this.props.onClick}
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
    }
}

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object,
    sidebarIsOpened: PropTypes.bool,
}