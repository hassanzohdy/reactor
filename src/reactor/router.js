import React from 'react';
import ReactDOM from 'react-dom';
// use custom history to manage router navigation from our side
import Routes from './router-configurations/routes-handler';
import { addRouter, partOf } from './router-configurations/routes-list';
import initiateNavigator from './router-configurations/navigator';
export { navigateTo, switchLang, refresh, currentRoute } from './router-configurations/navigator';

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
    partOf
};