import endpoint from './endpoint';

export default class RestfulEndpoint {
    /**
     * Set the main module route
     * i.e /users
     * 
     * @var  {string}
     */
    route = '';

    /**
     * Fetch records from endpoint api
     * 
     * @param   {object} params 
     * @returns {Promise}
     */
    list(params) {        
        return endpoint.get(this.route, {
            params,
        });
    }

    /**
     * Fetch one record from endpoint api
     * 
     * @param   {number} id 
     * @param   {object} params 
     * @returns {Promise}
     */
    get(id, params) {
        return endpoint.get(this.route + '/' + id, {
            params
        });
    }

    /**
     * Create new record
     * 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    post(data) {
        return endpoint.post(this.route, {
            data
        });
    }

    /**
     * Update existing record
     * 
     * @param   {number} id 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    put(id, data) {
        return endpoint.put(this.route + '/' + id, {
            data
        });
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    delete(id) {
        return endpoint.delete(this.route + '/' + id);
    }
}