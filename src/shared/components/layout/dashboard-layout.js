import clsx from 'clsx';
import React from 'react';
import Layout from "./layout";
import PropTypes from 'prop-types';
import Header from "../header/header";
import FormModal from './form-modal';
import Sidebar from "../sidebar/sidebar";
import { Button } from '@material-ui/core';
import layoutSettings from "../layout-settings";

export default function DashboardLayout(props) {
    const classes = layoutSettings();
    const [open, setOpen] = React.useState(false);
    const [modalIsOpened, toggleModal] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const openModal = () => {
        toggleModal(true);
    }

    const closeModal = () => {
        toggleModal(false);
    }

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

                    <Button variant="outlined" color="primary" onClick={openModal}>
                        Open full-screen dialog
                    </Button>

                    <FormModal 
                        title="Create new user" 
                        onSubmit={closeModal} 
                        open={modalIsOpened} 
                        onClose={closeModal}>
                        <h1>Welcome Modal</h1>
                    </FormModal>

                    {props.children}
                </main>
            </div>
        </Layout>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.any.isRequired,
};