import 'shared/modules';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes-handler';
import concatRoute from './concat-route';
import initiateNavigator from './navigator';
import {queryString, hash} from './router-history';
import { addRouter, partOf, group } from './routes-list';

export { concatRoute };
export { navigateTo, navigateBack, switchLang, refresh, currentRoute } from './navigator';

/**
 * Scan the entire routes list
 * 
 * @returns  {void}
 */
export function scan() {
    initiateNavigator();
    ReactDOM.render(<Routes />, document.getElementById('root'));
}

export default {
    add: addRouter,
    partOf,
    group,
    hash,
    get queryString() {
        return queryString();
    }
};