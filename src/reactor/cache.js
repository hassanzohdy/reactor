export default {
    /**
     * Set the storage engine
     */
    storage: localStorage,

    /**
     * Set data into storage engine
     * @param {string} key 
     * @param {value} value 
     */
    set(key, value) {
        this.storage.setItem(key, JSON.stringify({
            data: value,
        }));
    },

    /**
     * Get vale from storage engine
     * 
     * @param   {string} key 
     * @returns {any}
     */
    get(key, defaultValue = null) {
        let value = this.storage.getItem(key);

        return value ? JSON.parse(value).data : defaultValue;
    },

    /**
     * Remove key from storage
     * 
     * @param  {string} key  
     */
    remove(key) {
        this.storage.removeItem(key);
    }
};