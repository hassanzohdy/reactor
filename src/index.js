import 'shared/config';
import 'shared/locales/en';

// home
import 'modules/home/routes';
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