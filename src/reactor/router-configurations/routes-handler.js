import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './router-history';
import Renderer from './renderer';
/**
 * Return all application routes
 * 
 * @returns {Array}
 */
export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Renderer />
            </Switch>
        </Router>
    );
}
