import cache from 'reactor/cache';
import { Obj } from 'reinforcements';

class User {
    cacheKey = 'user';

    constructor() {
        this.setCacheKey(this.cacheKey);
    }

    setCacheKey(cacheKey) {
        this.cacheKey = cacheKey;
        this.userData = cache.get(this.cacheKey);
    }

    /**
     * Check if user is logged in
     * 
     * @returns {boolean}
     */
    isLoggedIn() {
        return this.getAccessToken();
    }

    /**
     * Log the user in 
     * It will store the data in the storage engine i.e Local Storage
     * But will not make the ajax request
     * 
     * @param  {object} userData 
     * @returns {void}
     */
    login(userData) {
        this.userData = userData;
        cache.set(this.cacheKey, userData);
    }

    /**
     * Log the user out
     */
    logout() {
        this.userData = null;
        cache.remove(this.cacheKey);
    }

    /**
     * Get user access token
     * 
     * @returns {string}
     */
    getAccessToken() {
        return Obj.get(this.userData, 'accessToken');
    }

    /**
     * Set the given value
     * 
     * @param   {string} key  
     * @param   {any} value
     */
    set(key, value) {
        Obj.set(this.userData, key, value);

        cache.set(this.cacheKey, this.userData);
    }

    /**
     * Reset user info excluding access token if not provided with the given data
     *  
     * @param {object} newInfo 
     */
    update(newInfo) {
        if (! newInfo.accessToken) {
            newInfo.accessToken = this.getAccessToken();
        }

        this.login(newInfo);
    }

    /**
     * Get value for the given key, otherwise return default value
     * 
     * @param   {string} key  
     * @param   {any} defaultValue
     * @returns {any}  
     */
    get(key, defaultValue) {
        return Obj.get(this.userData, key, defaultValue);
    }
}

export default new User();