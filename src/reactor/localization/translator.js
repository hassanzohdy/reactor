import { Obj } from 'reinforcements';
import { vsprintf } from 'sprintf-js';
import { getCurrentLocaleCode } from './locales';
import events from '@flk/events';
import { SWITCHING_LOCALE_CODE_EVENT } from 'reactor/router/flags';

/**
 * all keywords for all locale codes
 */
let keywordsList = {};

/**
 * Default locale Code
 */
let currentLocaleCode = getCurrentLocaleCode();

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
    return translateFrom(currentLocaleCode, keyword, ...args);
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

events.on(SWITCHING_LOCALE_CODE_EVENT, newLocaleCode => {
    currentLocaleCode = newLocaleCode;
});