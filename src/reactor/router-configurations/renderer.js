import React from 'react';
import Middleware from './middleware';
import { firstSegmentOfRoute, isPartOfLazyModules } from './renderer-helpers';
import modulesList from './modules-list';
import { Route } from 'react-router-dom';
import ProgressBar from 'reactor/components/progress-bar';
import config from 'reactor/config';
import history from './router-history';
import { layoutsList } from './routes-list';

const forceRefresh = config.get('router.forceRefresh', true);

const renderRoute = (routeData, route) => {
    // timestamp
    // When forceRefresh flag is set to true
    // then the route component will be re-rendered every time
    // the user clicks on the same route
    // otherwise, the user will still in the same page without re-rendering
    const middlewareKey = forceRefresh ? Date.now() : null;
    return <Middleware key={middlewareKey} match={routeData.match} location={routeData.location} route={route} history={history} />;
};

export default function Renderer(props) {
    const { location } = props;

    let firstSegment = firstSegmentOfRoute(location);

    const [loadedModules, loadModule] = React.useState([]);

    // check if module is loaded
    const moduleIsLoaded = loadedModules.includes(firstSegment);

    React.useEffect(() => {
        const moduleInfo = modulesList[firstSegment];

        if (!moduleIsLoaded && moduleInfo) {
            moduleInfo.load().then(e => {
                // /users 
                loadModule(loadedModules.concat(moduleInfo.entry));
            });
        }

    }, [firstSegment, moduleIsLoaded, loadedModules]);

    return layoutsList.map(layout => {
        const { LayoutComponent, routes, routesList } = layout;

        let layoutContent;

        // Display the progress bar
        // if the first segment is not in the 
        // loadedModules and
        // the first segment is part of modules list that will be loaded
        if (!moduleIsLoaded && isPartOfLazyModules(firstSegment)) {
            layoutContent = <ProgressBar />
        } else {
            // list of routes
            layoutContent = routes.map((route, index) => {
                return (
                    <Route path={route.path}
                        exact
                        key={route.path}
                        render={props => renderRoute(props, route)}
                    />
                );
            });
        }

        return (
            <Route key={LayoutComponent} exact path={routesList} render={props => (
                <LayoutComponent {...props}>
                    {layoutContent}
                </LayoutComponent>
            )} />
        )
    });
}
