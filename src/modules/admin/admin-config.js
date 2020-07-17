import config from 'reactor/config';
import userLogout from 'modules/admin/users/helpers/user-logout';

config.set({
    // Services Configurations
    // A.K.A Endpoints
    endpoint: {
        baseUrl: 'https://apps.mentoor.io/shera2/api/admin/',
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
    dashboard: {
        logout: userLogout,
    }
});