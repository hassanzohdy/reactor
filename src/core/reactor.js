import * as serviceWorker from './serviceWorker';
import routerServiceProvider from './router-service-provider';
import serviceProvidersContainer from './service-providers-container';

export default class Reactor {
    internalServiceProviders = [
        routerServiceProvider,
    ];

    constructor() {
        serviceProvidersContainer.registerInternalServiceProviders(this.internalServiceProviders);
    }

    /** 
     * Register the entire application modules service providers to the service providers container
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

        // start scanning all routes
        routerServiceProvider.scan();
    }
    
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
}