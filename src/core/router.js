class Router {
    routesList = [];

    /**
     * Add new route to the routes list
     *
     * @param {string} path
     * @param {React.Component} component
     */
    add(path, component) {
        this.routesList.push({
            path,
            component,
        });
    }
}

export default new Router();