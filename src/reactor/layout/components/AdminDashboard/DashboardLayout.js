import clsx from 'clsx';
import React from 'react';
import Header from "./Header";
import Layout from "../Layout";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';
import layoutClasses from "reactor/layout/utils/style";

export default function DashboardLayout(props) {
    const classes = layoutClasses();
    const [sidebarIsOpened, setOpen] = React.useState(false);

    const openSidebar = () => {
        setOpen(true);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <div className={classes.root}>
                <Header
                    sidebarIsOpened={sidebarIsOpened}
                    onClick={openSidebar}
                />
                <Sidebar
                    open={sidebarIsOpened}
                    onClose={closeSidebar}
                />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: sidebarIsOpened,
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