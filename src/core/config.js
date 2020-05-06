import { Obj } from 'reinforcements';

let configurationsList = {};

const config = {
    /**
     * Set the given key/value in our configurations list
     * 
     * @param   {string} key
     * @param   {any} value
     * @returns void
     */
    set(key, value) {
        // case one one argument only is passed and is object
        if (arguments.length === 1) {
            let data = key;
            configurationsList = Object.assign(configurationsList, data);
        } else {
            configurationsList[key] = value;
        }
    },
    /**
     * Get the value for the given key, otherwise return the given default value
     * P.S data will be grabbed using dot notation
     * i.e name.first
     * @param   {string} key
     * @param   {any} defaultValue
     * @returns any
     */
    get(key, defaultValue = null) {
        return Obj.get(configurationsList, key, defaultValue);
    },
};

export default config;