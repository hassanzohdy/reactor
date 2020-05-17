import cache from 'reactor/cache';

class User {
    constructor() {
        this.userData = cache.get('user');
    }

    /**
     * Check if user is logged in
     * 
     * @returns {boolean}
     */
    isLoggedIn() {
        return this.userData !== null;
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
        cache.set('user', userData);
    }

    /**
     * Log the user out
     */
    logout() {
        this.userData = null;
        cache.remove('user');
    }

    /**
     * Get user access token
     * 
     * @returns {string}
     */
    getAccessToken() {
        return this.userData.accessToken;
    }
}

export default new User();