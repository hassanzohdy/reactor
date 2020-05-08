import axios from 'axios';
import config from './config';
import Is from '@flk/supportive-is';

export default axios.create({
    baseURL: config.get('endpoint.baseUrl'),
    transformRequest: [function (data) {
        if (Is.formElement(data)) {
            return new FormData(data);
        }

        return data;
    }],
});