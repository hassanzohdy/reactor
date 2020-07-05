import clsx from 'clsx';
import React from 'react';
import Layout from "../layout";
import PropTypes from 'prop-types';
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import layoutClasses from "reactor/layout/utils/style";

export default function DashboardLayout(props) {
    React.useEffect(() => {
        console.log('Dashboard Layout Is Mounted');
        return e => {
            console.log('Dashboard Layout Is Unmounted');
        }
    }, []);
    
    const classes = layoutClasses();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <div className={classes.root}>
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
        </Layout>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.any.isRequired,
};