import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { trans } from 'reactor/localization';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import layoutSettings from '../layout-settings';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import userLogout from 'modules/users/helpers/user-logout';
import { refresh } from 'reactor/router';
import Tooltip from 'reactor/components/tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';

const refreshText = trans('refresh');
const logoutText = trans('logout');

export default function Header(props) {
    let classes = layoutSettings(),
        sidebarIsOpened = props.sidebarIsOpened;

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: sidebarIsOpened,
            })}
        >
            <Toolbar>
                {/* Sidebar Toggle Icon */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.onClick}
                    edge="start"
                    className={clsx(classes.menuButton, sidebarIsOpened && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                {/* Application Name */}
                <Typography variant="h6" noWrap>
                    {trans('appName')}
                </Typography>
                {/* Divider */}
                <div className={classes.grow} />

                {/* Refresh Button */}

                <IconButton color="inherit" onClick={refresh}>
                    <Tooltip title={refreshText}>
                        <RefreshIcon />
                    </Tooltip>
                </IconButton>

                {/* Logout Button */}
                <IconButton color="inherit" onClick={userLogout}>
                    <Tooltip title={logoutText}>
                        <ExitToApp />
                    </Tooltip>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
};

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object,
    sidebarIsOpened: PropTypes.bool,
}