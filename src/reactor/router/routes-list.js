import React from 'react';
import { localeCodes } from 'reactor/localization/locales';

// join all locale code with | for route matching
const gluedLocaleCodes = localeCodes.join('|');

/**
 * Default Full Page >> It Will be just a React Fragment
 */
export const FULL_PAGE = ({ key, children }) => <React.Fragment key={key} children={children} />;

/**
 * Set all layouts that will wrap the application routes
 * 
 * @const  {Array}  
 */
export const layoutsList = [];

/**
 * Add new route to the routes list of full page
 *
 * @param {string} path
 * @param {React.Component} component
 * @param {Function|Array|null} middleware
 */
export function addRouter(path, component, middleware = null) {
    return partOf(FULL_PAGE, [{
        path,
        component,
        middleware
    }]);
}

/**
 * Add the given routes as part of the given layout
 * 
 * @param  {React.Component} LayoutComponent
 * @param  {Array} routes   
 */
export function partOf(LayoutComponent, routes) {
    let layout = layoutsList.find(layout => layout.LayoutComponent === LayoutComponent);

    // if the layout component does not exist
    // then create new one and add it to the layouts list
    if (!layout) {
        layout = {
            LayoutComponent,
            routes: [],
            routesList: [],
        };

        layoutsList.push(layout);
    }

    routes = routes.map(route => {
        // added optional localization
        // /users
        // /en/users
        // /ar/users
        route.path = `/:localeCode(${gluedLocaleCodes})?${route.path}`;
        layout.routesList.push(route.path);
        return route;
    });

    layout.routes = layout.routes.concat(routes);
}