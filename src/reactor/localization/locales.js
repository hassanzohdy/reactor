import config from "reactor/config";
import history from "reactor/router-configurations/router-history";
import { Obj } from "reinforcements";

/**
 * List of locale code object
 * 
 * @const {object}
 */
const localeCodesList = config.get('locales');

/**
 * List of locale codes only in an array
 *
 * @const {array}
 */
export const localeCodes = Object.keys(localeCodesList);

/**
 * Current locale code that will be changed later for locale change in the router
 *  
 * @var  {string}
 */
let currentLocaleCode = document.documentElement.lang;

/**
 * Get direction of the given locale code
 * 
 * @param   {string} localeCode 
 * @returns {string}
 */
export function directionOf(localeCode) {
    return Obj.get(localeCodesList, localeCode + '.direction');
}

/**
 * Get current locale code
 * 
 * @returns {string}
 */
export function getCurrentLocaleCode() {
    return currentLocaleCode;
}

/**
 * Set current locale code at the beginning of the application
 */
export function initiateLocaleCode() {
    // /en/users
    // /users
    // first remove the first slash from the url
    // then split the pathname by the /
    // then get the first segment of the created array 
    let [ localeCode ] = history.location.pathname.replace(/^\//, '').split('/');

    if (localeCodes.includes(localeCode)) {
        updateCurrentLocaleCode(localeCode);
    }
};

/**
 * Update current locale code 
 * 
 * @param   {string} localeCode
 * @returns {void} 
 */
export function updateCurrentLocaleCode(localeCode) {
    if (localeCode === currentLocaleCode) return;

    document.documentElement.dir = directionOf(localeCode);
    document.documentElement.lang = localeCode;
    currentLocaleCode = localeCodes;
}