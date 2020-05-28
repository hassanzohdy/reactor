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
import { providers } from 'reactor/reactor';
import ProgressBar from 'reactor/components/progress-bar';

const history = createBrowserHistory();

const localeCodes = config.get('locales');
const forceRefresh = config.get('forceRefresh', true);

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
 * Get first segment of the given location
 * 
 * @param   {object} location 
 * @returns {string}
 */
function firstSegmentOfRoute(location) {
    const routeSegments = location.pathname.replace(/^\//, '').split('/');

    if (routeSegments) {        
        return '/' + (localeCodes[routeSegments[0]] ? (routeSegments[1] || '') : routeSegments[0]);
    }

    return '/';
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
    return (
        <Router history={history}>
            <Switch>
                <Renderer />
            </Switch>
        </Router>
    );
}

function Renderer(props) {
    const { location } = props;

    const firstSegment = firstSegmentOfRoute(location);

    const [loadedModules, loadModules] = React.useState([]);
     
    const moduleIsLoaded = loadedModules.includes(firstSegment) || ! providers[firstSegment]; 

    React.useEffect(() => { 
        const moduleData = providers[firstSegment];

        if (! moduleIsLoaded && firstSegment) {
            moduleData().then(e => {
                loadedModules.push(firstSegment);
                
                loadModules(loadedModules.concat([]));
            });
        }
    }, [moduleIsLoaded, loadedModules, firstSegment]);

    if (! moduleIsLoaded) {
        return <ProgressBar />
    }

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
            <Route path={`/:localeCode(${Object.keys(localeCodes).join('|')})?${route.path}`}
                exact={true}
                key={index}
                render={routeData => {
                    // timestamp
                    // When forceRefresh flag is set to true
                    // then the route component will be re-rendered every time
                    // the user clicks on the same route
                    // otherwise, the user will still in the same page without re-rendering
                    const middlewareKey = forceRefresh ? Date.now() : null;
                    return <Middleware key={middlewareKey} match={routeData.match} location={routeData.location} route={route} history={history} />;
                }}
            />
        );
    });

    return routes;
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
 * Get current route 
 * 
 * @returns {string}
 */
export function currentRoute() {
    return history.location.pathname;
}

/**
 * Force reload current route content
 * 
 * @returns {void} 
 */
export function refresh() {
    navigateTo(currentRoute());
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