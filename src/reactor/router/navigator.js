import history from "./router-history";
import ltrim from "reinforcements/src/utilities/str/ltrim";
import {
    localeCodes, updateCurrentLocaleCode, getCurrentLocaleCode
} from "reactor/localization/locales";

import events from '@flk/events';
import { SWITCHING_LOCALE_CODE_EVENT } from "./flags";
import { concatRoute } from "./routes-list";
import { getCurrentBseAppPath } from "./apps-list";

let currentFullRoute, fullRouteWithoutLocaleCode;

/**
 * Set the full current route and the current route without the locale code
 * 
 * @param   {string} route
 * @returns {void} 
 */
function updateFullRoute(route) {
    // /en/users
    currentFullRoute = route;

    // remove any possible locale code
    let regex = new RegExp(`^/(${localeCodes.join('|')})`);
    // let regex = new RegExp('^/(en|ar)')

    fullRouteWithoutLocaleCode = currentFullRoute.replace(regex, function (matched, localeCode) {
        updateCurrentLocaleCode(localeCode);
        return '';
    });
}

/**
 * navigate to the given path
 * 
 * @param  {string} path 
 */
export function navigateTo(path, localeCode = null) {
    // login >> valid
    // /login >> valid

    path = concatRoute(getCurrentBseAppPath(), path);

    // /users
    // if current initial locale code
    // /en/users   
    if (localeCode === null && hasInitialLocaleCode()) {
        localeCode = getCurrentLocaleCode();
    }

    if (localeCode) {
        path = concatRoute(localeCode, path);
    }
 
    history.push(path);
}

/**
 * Get current route 
 * 
 * @returns {string}
 */
export function fullRoute() {
    return history.location.pathname;
}

/**
 * Get the route without the locale code
 * 
 * @returns  {string}
 */
export function currentRoute() {
    let route = ltrim(fullRoute(), '/' + getCurrentLocaleCode()) || '/';

    route = ltrim(route, getCurrentBseAppPath());

    return route;
}

/**
 * Force reload current route content
 * 
 * @returns {void} 
 */
export function refresh() {
    navigateTo(fullRoute(), false);
}

/**
 * Navigate to current location and switch language
 * 
 * @param  {string} localeCode
 */
export function switchLang(localeCode) {    
    let route = currentRoute();
    events.trigger(SWITCHING_LOCALE_CODE_EVENT, localeCode);
    
    navigateTo('/' + route, localeCode);
}

/**
 * Initialize Navigator
 */
export default function initiateNavigator() {
    /**
     * Listen to any router navigation to update current full route 
     * and current route without locale codes
     */
    history.listen(location => {
        updateFullRoute(location.pathname);
    });

    updateFullRoute(history.location.pathname || '/');
}

/**
 * Check if current route has a locale code
 * By comparing the currentFullRoute with fullRouteWithoutLocaleCode
 * 
 * @returns  {boolean} 
 */
export function hasInitialLocaleCode() {
    return currentFullRoute !== fullRouteWithoutLocaleCode;
}