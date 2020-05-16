import Globals from './globals';
import { Obj } from 'reinforcements';

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
     * Get translation value for the given key
     * Please note this method accepts dot notation syntax
     *  
     * @param   {string} key
     * @returns {any} 
     */
    translate(key, localeCode = this.localeCode) {        
        return Obj.get(this.keywords, `${localeCode}.${key}`);
    }
}

const localizationObject = new Localization();

export function trans() {
    return localizationObject.translate(...arguments);
}

export default localizationObject;