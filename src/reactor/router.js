import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Router,
    Switch,
} from "react-router-dom";

// use custom history to manage router navigation from our side
import { createBrowserHistory } from 'history';
import Middleware from './middleware';

const history = createBrowserHistory();

const routesList = [];

/**
 * Add new route to the routes list
 *
 * @param {string} path
 * @param {React.Component} component
 * @param {Function|Array|null} middleware
 */
function addRouter(path, component, middleware = null) {
    routesList.push({
        path,
        component,
        middleware,
    });
}

/**
 * Return all application routes
 * 
 * @returns {Array}
 */
function Routes() {

    // each route contains:
    // path: path to page
    // middleware: middleware to be applied before accessing the component page 
    // component: component class that will render the page
    const routes = routesList.map((route, index) => {
        return (
            <Route path={route.path} exact={true} key={index}>
                <Middleware route={route} history={history} />
            </Route>
        );
    });
    return (
        <Router history={history}>
            <Switch>
                {routes}
            </Switch>
        </Router>
    );
}

/**
 * navigate to the given path
 * 
 * @param  {string} path 
 */
export function navigateTo(path) {
    history.push(path);
}

export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));
}


export default {
    add: addRouter
};