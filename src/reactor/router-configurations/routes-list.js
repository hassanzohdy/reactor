/**
 * Set all routes that may be requested in our application
 * 
 * @const  {Array}  
 */
export const routesList = [];

/**
 * Add new route to the routes list
 *
 * @param {string} path
 * @param {React.Component} component
 * @param {Function|Array|null} middleware
 */
export function addRouter(path, component, middleware = null) {
    routesList.push({
        path,
        component,
        middleware,
    });
}