import React from 'react';
import ReactDOM from 'react-dom';
// use custom history to manage router navigation from our side
import setCurrentLocale from './router-configurations/update-current-localization';
import Routes from './router-configurations/routes-handler';
import { addRouter } from './router-configurations/routes-list';
import { navigateTo, switchLang, refresh, currentRoute } from './router-configurations/navigator';

setCurrentLocale();

export {
    navigateTo, 
    switchLang, 
    refresh, 
    currentRoute,
};


/**
 * Scan the entire routes list
 * 
 * @returns  {void}
 */
export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));
}

export default {
    add: addRouter
};