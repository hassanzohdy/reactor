import user from 'user';
import axios from 'axios';
import config from './config';
import events from '@flk/events';
import Is from '@flk/supportive-is';
import { Obj } from 'reinforcements';
import { concatRoute } from 'reactor/router';
import ltrim from 'reinforcements/src/utilities/str/ltrim';

let cancelToken;

let lastRequestInfo = {};

let http = axios.create({
    // baseURL: config.get('endpoint.baseUrl'),
    transformRequest: [function (data, headers) {
        if (Is.plainObject(data)) {
            headers['Content-Type'] = 'Application/json';

            if (headers.isPutRequest) {
                data._method = 'PUT';
                delete headers.isPutRequest;
            }

            data = JSON.stringify(data);
        } else if (Is.formElement(data)) {
            let formData = new FormData(data);

            // @see line: 50
            if (headers.isPutRequest) {
                formData.append('_method', 'PUT');

                // delete the isPutRequest flag
                delete headers.isPutRequest;
            }

            return formData;
        }

        return data;
    }],
});

http.interceptors.request.use(requestConfig => {
    // concat the base url with the requested route 
    requestConfig.url = ltrim(concatRoute(config.get('endpoint.baseUrl'), requestConfig.url), '/');

    let auth = user.isLoggedIn() ? `Bearer ${user.getAccessToken()}` : `key ${config.get('endpoint.apiKey')}`;

    // A workaround for put requests to be sent as post request
    // this will allow us to upload images
    if (requestConfig.method === 'put') {
        requestConfig.method = 'post';
        requestConfig.headers.isPutRequest = true;
    }

    requestConfig.headers.Authorization = auth;

    // this will be used mainly with lastRequest
    // and with useRequest hook as well
    const CancelToken = axios.CancelToken;

    requestConfig.cancelToken = new CancelToken(c => cancelToken = c);

    // capture last request info
    lastRequestInfo = requestConfig;

    // trigger event of sending ajax request
    events.trigger('endpoint.sending', requestConfig);

    return requestConfig;
});

// when response is returned from the request
http.interceptors.response.use(response => {
    // trigger success response
    events.trigger('endpoint.sent endpoint.success', response);
    return response;
}, responseError => {
    // trigger error response
    events.trigger('endpoint.sent endpoint.error', responseError.response);
    return responseError;
});

/**
 * Get last request 
 * This function MUST BE called directly after sending the request so we can cancel the 
 * last ajax request, and also to get any info we need about it as well
 * 
 * @returns {object} 
 */
export const lastRequest = () => {
    return {
        ...lastRequestInfo,
        cancelToken: Obj.clone(cancelToken),
        abort() {
            this.cancelToken();
        },
    };
};

export default http;