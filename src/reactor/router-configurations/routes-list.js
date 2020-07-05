import React from 'react';

/**
 * Set all routes that may be requested in our application
 * 
 * @const  {Array}  
 */
export const routesList = [];

export const FULL_PAGE = props => {

    React.useEffect(() => {
        // var err = new Error();
        // return err.stack;
        console.log('Full Page Layout Is Mounted');

        return () => {
            console.log('Full Page Layout Is Unmounted');            
        }
    }, []);
    
    return <React.Fragment {...props} />
};
export const layoutsList = [];

/**
 * Add new route to the routes list
 *
 * @param {string} path
 * @param {React.Component} component
 * @param {Function|Array|null} middleware
 */
export function addRouter(path, component, middleware = null) {
    partOf(FULL_PAGE, [
        {
            path,
            component,
            middleware,
        }
    ])
    // routesList.push({
    //     path,
    //     component,
    //     middleware,
    // });
}

export function partOf(LayoutComponent, routes) {
    let layout = layoutsList.find(layout => layout.Layout == LayoutComponent);

    if (!layout) {
        layout = {
            Layout: LayoutComponent,
            routes: [],
        };
        layoutsList.push(layout);
    }

    layout.routes = layout.routes.concat(routes);

    layout.routesList = layout.routes.map(route => route.path);
}