import user from 'user';
import axios from 'axios';
import config from './config';
import Is from '@flk/supportive-is';

let http = axios.create({
    baseURL: config.get('endpoint.baseUrl'),
    transformRequest: [function (data, headers) {
        if (Is.formElement(data)) {
            let formData = new FormData(data);

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
    let auth = user.isLoggedIn() ? `Bearer ${user.getAccessToken()}` : `key ${config.get('endpoint.apiKey')}`;

    if (requestConfig.method === 'put') {
        requestConfig.method = 'post';
        requestConfig.headers.isPutRequest = true;
    }

    requestConfig.headers.Authorization = auth;
    
    return requestConfig;
});

export default http;

// Authorization Header

// If logged in

// Authorization: Bearer {accessToken}

// Otherwise

// Authorization: Key {apiKey}