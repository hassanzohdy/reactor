import Globals from './globals';
import { Obj } from 'reinforcements';
import {vsprintf} from 'sprintf-js';

class Localization {
    /**
     * Add all keywords
     */
    keywords = {};

    /**
     * Default locale Code
     */
    localeCode = Globals.localeCode;

    /**
     * Add keywords 
     * 
     * @param  {object} keywords
     * @returns {void}
     */
    extend(localeCode, keywords) {        
        this.keywords[localeCode] = Obj.merge(this.keywords[localeCode], keywords);
    }

    /**
     * Translate the given keyword in current locale code
     *  
     * @param   {string} keyword
     * @returns {any} 
     */
    translate(keyword, ...args) {        
        return this.translateFrom(this.localeCode, keyword, ...args);
    }

    /**
     * Translate the given keyword for the given locale code
     * 
     * Please note this method accepts dot notation syntax
     *  
     * @param   {string} key
     * @returns {any} 
     */
    translateFrom(localeCode, keyword, ...args) {
        let translation = Obj.get(this.keywords, `${localeCode}.${keyword}`);

        return vsprintf(translation, args) || keyword;
    } 
}

const localizationObject = new Localization();

export function trans() {
    return localizationObject.translate(...arguments);
}

export default localizationObject;