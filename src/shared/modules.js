import { setModules } from "reactor/router/modules-list";

setModules([
    {
        path: '/admin',
        name: 'admin',
        loadMain: true,
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