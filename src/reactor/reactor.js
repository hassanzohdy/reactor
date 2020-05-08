import { scan } from 'reactor/router';
import * as serviceWorker from './serviceWorker';

export default class Reactor {
    /**
     * Start the application
     */
    react() {
        // start scanning all routes
        scan();
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