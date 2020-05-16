import 'shared/config';
import 'modules/users/routes';
import 'shared/locales/en';
import 'modules/users/locales/en';
import Reactor from 'reactor/reactor';

const reactor = new Reactor();    

// start the application
reactor.react();