import user from 'user';
import axios from 'axios';
import config from './config';
import Is from '@flk/supportive-is';

let http = axios.create({
    baseURL: config.get('endpoint.baseUrl'),
    transformRequest: [function (data) {
        if (Is.formElement(data)) {
            return new FormData(data);
        }

        return data;
    }],
});

http.interceptors.request.use(requestConfig => {    
    let auth = user.isLoggedIn() ? `Bearer ${user.getAccessToken()}` : `key ${config.get('endpoint.apiKey')}`;

    requestConfig.headers.Authorization = auth;
    
    return requestConfig;
});

export default http;

// Authorization Header

// If logged in

// Authorization: Bearer {accessToken}

// Otherwise

// Authorization: Key {apiKey}