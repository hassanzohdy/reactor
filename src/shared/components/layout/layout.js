import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import ReactorComponent from 'reactor/component/reactor.component';

export default class Layout extends ReactorComponent {
    /**
     * {@inheritDoc}
     */
    render() {
        return (
            <div id="wrapper">
                <Header />
                <main>
                    <Sidebar />
                    <div id="content">
                        {this.children()}
                    </div>
                </main>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};