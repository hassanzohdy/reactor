// we need a container to store our service providers
let serviceProviders = []; // this will be private 

// resolved|created service providers objects
const resolvedServiceProviders = [];

// all services that wil be provided to any module 
const reactorServiceContainer = {};

/**
 * Register the given service providers 
 * 
 * @param {array} serviceProvidersList
 */
function register(serviceProvidersList) {
    serviceProviders = serviceProvidersList;
}

function registerInternalServiceProviders(serviceProviders) {
    for (let serviceProvider of serviceProviders) {
        let {name, call} = serviceProvider.provider;

        reactorServiceContainer[name] = call;
    }
}

/**
 * Start Calling all service providers
 */
function dispatch() {
    for (let serviceProvider of serviceProviders) {
        const provider = new serviceProvider(reactorServiceContainer); //  function or class ?

        resolvedServiceProviders.push(provider);
    }
}

export default {
    register,
    dispatch,
    registerInternalServiceProviders,
};