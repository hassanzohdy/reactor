import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import ReactorComponent from 'reactor/component/reactor.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import layoutSettings from '../layout-settings';

function PersistentDrawerLeft(props) {
    const classes = layoutSettings();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                sidebarIsOpened={open}
                onClick={handleDrawerOpen}
            />
            <Sidebar
                open={open}
                onClose={handleDrawerClose}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        </div>
    );
}

export default class Layout extends ReactorComponent {
    /**
     * {@inheritDoc}
     */
    render() {
        return (
            <PersistentDrawerLeft>
                {this.children()}
            </PersistentDrawerLeft>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};