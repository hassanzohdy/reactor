import history from "./router-history";
import config from 'reactor/config';
import Globals from './../globals';

history.listen(location => {
    updateCurrentRoute(location.pathname);
})

let currentLocaleCode = Globals.localeCode;

const localeCodes = Object.keys(config.get('locales'));

let currentFullRoute,
currentRouteWithoutLocaleCode;

updateCurrentRoute(history.location.pathname || '/');

export const initialLocaleCode = currentFullRoute !== currentRouteWithoutLocaleCode;

/**
 * Set the full current route and the current route without the locale code
 * 
 * @param   {string} route
 * @returns {void} 
 */
function updateCurrentRoute(route) {
    currentFullRoute = route;

    // remove any possible locale code
    let regex = new RegExp(`^/(${localeCodes.join('|')})`);

    currentRouteWithoutLocaleCode = currentFullRoute.replace(regex, function (matched, localeCode) {
        currentLocaleCode = localeCode;
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
