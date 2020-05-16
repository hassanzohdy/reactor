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
import config from 'reactor/config';

const history = createBrowserHistory();

let localeCodes = config.get('locales');

// /en/users
// /users
// first remove the first slash from the url
// then split the pathname by the /
// then get the first segment of the created array 
let [firstSegmentOfLocation] = history.location.pathname.replace(/^\//, '').split('/');

if (localeCodes[firstSegmentOfLocation]) {
    document.documentElement.dir = localeCodes[firstSegmentOfLocation];
    document.documentElement.lang = firstSegmentOfLocation;
}

/**
 * Set all routes that may be requested in our application
 * 
 * @const  {Array}  
 */
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
            // added optional localization
            // /users
            // /en/users
            // /ar/users
            <Route path={`/:localeCode(${Object.keys(localeCodes).join('|')})?${route.path}`} exact={true} key={index}>
                {(routeData) => {                    
                    return <Middleware match={routeData.match} location={routeData.location} route={route} history={history} />;
                }}
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

/**
 * Navigate to current location and switch language
 * 
 * @param  {string} localeCode
 */
export function switchLang(localeCode) {

}

/**
 * Scan the entire routes list
 * 
 * @returns  {void}
 */
export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));
}

export default {
    add: addRouter
};