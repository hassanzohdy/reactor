import 'shared/config';
import 'modules/home/routes';
import 'shared/locales/en';
import 'shared/locales/ar';

// home
import 'modules/home/locales/en';
import 'modules/home/locales/ar';

// users
import 'modules/users/routes';
import 'modules/users/locales/en';
import 'modules/users/locales/ar';

// Reactor
import Reactor from 'reactor/reactor';

const reactor = new Reactor();    

// start the application
reactor.react();