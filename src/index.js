import 'shared/config';
import 'modules/users/routes';
import Reactor from 'reactor/reactor';

const reactor = new Reactor();    

// start the application
reactor.react();