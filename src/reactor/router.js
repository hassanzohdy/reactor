import React from 'react';
import ReactDOM from 'react-dom';
// use custom history to manage router navigation from our side
import { createBrowserHistory } from 'history';
import Middleware from './middleware';
import config from 'reactor/config';
import modules from 'shared/modules';
import ProgressBar from 'reactor/components/progress-bar';
import {
    Route,
    Router,
    Switch,
} from "react-router-dom";

const history = createBrowserHistory();

const localeCodes = config.get('locales');
const forceRefresh = config.get('forceRefresh', true);

// List of all modules 
const modulesList = {};

// spread all entries into object
for (let moduleInfo of modules) {
    moduleInfo.load = () => import(`modules/${moduleInfo.module}/${moduleInfo.module}-provider.js`);
    // loop over the entry array
    for (let entryRoute of moduleInfo.entry) {
        modulesList[entryRoute] = moduleInfo;
    }
}


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
 * Get first segment of the given location data
 * 
 * @param   {object} location
 * @returns {string}   
 */
function firstSegmentOfRoute(location) {
    let [firstSegment, secondSegment] = location.pathname.replace(/^\//, '').split('/');

    let segment = firstSegment;

    // if first segment is locale code, then take the second
    if (localeCodes[firstSegment]) {
        // if there is no second segment
        // then return empty not undefined
        segment = secondSegment || '';
    }

    return '/' + segment;
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

function isPartOfLazyModules(firstSegment) {
    return modulesList[firstSegment];
}

function Renderer(props) {
    const { location } = props;

    let firstSegment = firstSegmentOfRoute(location);

    const [loadedModules, loadModule] = React.useState([]);

    // check if module is loaded
    const moduleIsLoaded = loadedModules.includes(firstSegment);

    React.useEffect(() => {
        // login
        const moduleInfo = modulesList[firstSegment];

        if (!moduleIsLoaded && moduleInfo) {
            console.log(moduleInfo);
                        
            moduleInfo.load().then(e => {
                // /users 
                loadModule(loadedModules.concat(moduleInfo.entry));                
            });
        }

    }, [firstSegment, moduleIsLoaded, loadedModules]);


    // Display the progress bar
    // if the first segment is not in the 
    // loadedModules and
    // the first segment is part of modules list that will be loaded
    if (! moduleIsLoaded && isPartOfLazyModules(firstSegment)) {
        return <ProgressBar />
    }

    const routes = routesList.map((route, index) => {
        const renderRoute = routeData => {
            // timestamp
            // When forceRefresh flag is set to true
            // then the route component will be re-rendered every time
            // the user clicks on the same route
            // otherwise, the user will still in the same page without re-rendering
            const middlewareKey = forceRefresh ? Date.now() : null;
            return <Middleware key={middlewareKey} match={routeData.match} location={routeData.location} route={route} history={history} />;
        };
        return (
            // added optional localization
            // /users
            // /en/users
            // /ar/users
            <Route path={`/:localeCode(${Object.keys(localeCodes).join('|')})?${route.path}`}
                exact={true}
                key={index}
                render={renderRoute}
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