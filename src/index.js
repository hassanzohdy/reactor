import 'shared/config';
import Reactor from 'core/reactor';
// grab all service providers from all modules
import UsersServiceProvider from 'modules/users/service-provider'; 
import CategoriesServiceProvider from 'modules/categories/service-provider'; 

const reactor = new Reactor();
    
reactor.registerServiceProviders([
    // service providers list
    UsersServiceProvider,
    CategoriesServiceProvider,
]);


// start the application
reactor.react();