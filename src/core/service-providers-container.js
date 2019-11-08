// we need a container to store our service providers
let serviceProviders = []; // this will be private 

/**
 * Register the given service providers 
 * 
 * @param {array} serviceProvidersList
 */
function register(serviceProvidersList) {
    serviceProviders = serviceProvidersList;
}

/**
 * Start Calling all service providers
 *
 */
function dispatch() {
    for (let serviceProvider of serviceProviders) {
        new serviceProvider(); //  function or class ?
    }
}

export default {
    register,
    dispatch,
};