import Reactor from './core/reactor';

// grab all service providers from all modules
import usersServiceProvider from './modules/users/service-provider'; 
import categoriesServiceProvider from './modules/categories/service-provider'; 

const reactor = new Reactor();

reactor.registerServiceProviders([
    // service providers list
    usersServiceProvider,
    categoriesServiceProvider,
]);

// start the application
reactor.react();