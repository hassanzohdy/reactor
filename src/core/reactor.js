// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

import serviceProvidersContainer from './service-providers-container';

import * as serviceWorker from './serviceWorker';

export default class Reactor {
    /**
     * Allow the application to work offline
     */
    workOffline() {
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.register();

        return this;
    }

    /** 
     * Register the entire application service providers to the service providers container
     * 
     * @param {array} serviceProviders
    */
    registerServiceProviders(serviceProviders) {
        serviceProvidersContainer.register(serviceProviders);
    }

    /**
     * Start the application
     */
    react() {
        // start calling all service providers
        serviceProvidersContainer.dispatch();
    }
}