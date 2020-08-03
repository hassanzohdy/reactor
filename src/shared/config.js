import config from 'reactor/config';

const inDevelopmentMode = process.env.NODE_ENV === 'development';

export const BASE_API_URL = 'https://apps.mentoor.io/shera2/api';

config.set({
    // Services Configurations
    basePath: inDevelopmentMode ? '/' : '/some-directory-after-domain-name', // for production
    // A.K.A Endpoints
    endpoint: {
        baseUrl: BASE_API_URL,
        apiKey: 'SP6YHG56IKLO90MNF4TGAQW23FVBG765',
    },
    locales: {
        en: {
            direction: 'ltr',
        },
        ar: {
            direction: 'rtl',
        },
    },
});