import endpoint from 'core/endpoint';

export function login(form) {
    return endpoint.post('/login', form);
}