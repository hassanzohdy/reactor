import endpoint from './endpoint';
import { concatRoute } from 'reactor/router';

export default class RestfulEndpoint {
    /**
     * Set the main module route
     * i.e /users
     * 
     * @var  {string}
     */
    route = '';

    endpoint = endpoint;

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
        return endpoint.get(this.path(id), {
            params
        });
    }

    /**
     * Concatenate the given path with the base route
     * 
     * @param  {string} path
     * @returns {string} 
     */
    path(...paths) {
        return concatRoute(this.route, ...paths);
    }

    /**
     * Create new record
     * 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    create(data) {
        return endpoint.post(this.route, data);
    }

    /**
     * Update existing record
     * 
     * @param   {number} id 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    update(id, data) {
        return endpoint.put(this.path(id), data);
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    delete(id) {
        return endpoint.delete(this.path(id));
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    patch(id, data = {}) {
        return endpoint.patch(this.path(id), data);
    }
}