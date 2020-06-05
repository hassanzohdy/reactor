import history from "./router-history";
import { localeCodes, updateCurrentLocaleCode } from "../localization/locales";

let currentFullRoute, currentRouteWithoutLocaleCode;

/**
 * Set the full current route and the current route without the locale code
 * 
 * @param   {string} route
 * @returns {void} 
 */
function updateCurrentRoute(route) {
    // /en/users
    currentFullRoute = route;

    // remove any possible locale code
    let regex = new RegExp(`^/(${localeCodes.join('|')})`); 
    // let regex = new RegExp('^/(en|ar)')

    currentRouteWithoutLocaleCode = currentFullRoute.replace(regex, function (matched, localeCode) {
        updateCurrentLocaleCode(localeCode);
        return '';
    });
}

/**
 * navigate to the given path
 * 
 * @param  {string} path 
 */
export function navigateTo(path) {
    // /users
    // if current initial locale code
    // /en/users
    history.push(path);
}

/**
 * Get current route 
 * 
 * @returns {string}
 */
export function currentRoute() {
    return history.location.pathname;
}

/**
 * Force reload current route content
 * 
 * @returns {void} 
 */
export function refresh() {
    navigateTo(currentRoute());
}

/**
 * Navigate to current location and switch language
 * 
 * @param  {string} localeCode
 */
export function switchLang(localeCode) {

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
        updateCurrentRoute(location.pathname);
    });

    updateCurrentRoute(history.location.pathname || '/');
}

/**
 * Check if current route has a locale code
 * By comparing the currentFullRoute with currentRouteWithoutLocaleCode
 * 
 * @returns  {boolean} 
 */
export function hasInitialLocaleCode() {
    return currentFullRoute !== currentRouteWithoutLocaleCode;
}