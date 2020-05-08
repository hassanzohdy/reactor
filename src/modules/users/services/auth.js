import endpoint from 'reactor/endpoint';

export function login(form) {
    return endpoint.post('/login', form);
}