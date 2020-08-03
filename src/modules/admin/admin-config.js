import config from 'reactor/config';
import { BASE_API_URL } from 'shared/config';
import userLogout from 'modules/admin/users/helpers/user-logout';

config.set({
    // Services Configurations
    // A.K.A Endpoints
    endpoint: {
        baseUrl: BASE_API_URL + '/admin',
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
        header: {
            logout: userLogout,
        }
    }
});