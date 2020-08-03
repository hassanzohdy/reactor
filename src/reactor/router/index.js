import React from 'react';
import ReactDOM from 'react-dom';
// use custom history to manage router navigation from our side
import Routes from './routes-handler';
import { addRouter, partOf, group } from './routes-list';
import initiateNavigator from './navigator';
import 'shared/modules';
import { queryString, hash } from './router-history';
export { navigateTo, switchLang, refresh, currentRoute } from './navigator';

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
    hash: hash,
    get queryString() {
        return queryString();
    }
};