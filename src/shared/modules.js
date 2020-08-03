import { setModules } from "reactor/router/modules-list";

setModules([
    {
        path: '/admin',
        name: 'admin',
        modules: [
            {
                entry: ['/users', '/login'],
                module: 'users',
            },
            {
                entry: ['/'],
                module: 'home',
            }
        ]
    }
]);