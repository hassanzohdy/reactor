import Globals from 'reactor/globals';
import { Obj } from 'reinforcements';
import { vsprintf } from 'sprintf-js';
import { getCurrentLocaleCode } from './locales';

/**
 * all keywords for all locale codes
 */
let keywordsList = {};


/**
 * Add keywords 
 * 
 * @param  {object} keywords
 * @returns {void}
 */
export function extend(localeCode, keywords) {
    keywordsList[localeCode] = Obj.merge(keywordsList[localeCode], keywords);
}

/**
 * Translate the given keyword in current locale code
 *  
 * @param   {string} keyword
 * @returns {any} 
 */
export function trans(keyword, ...args) {
    /**
     * Default locale Code
     */
    let localeCode = getCurrentLocaleCode();
    return translateFrom(localeCode, keyword, ...args);
}

/**
 * Translate the given keyword for the given locale code
 * 
 * Please note this method accepts dot notation syntax
 *  
 * @param   {string} key
 * @returns {any} 
 */
export function translateFrom(localeCode, keyword, ...args) {
    let translation = Obj.get(keywordsList, `${localeCode}.${keyword}`);

    return vsprintf(translation, args) || keyword;
}