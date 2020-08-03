import router from 'reactor/router';
import Users from './components/users/Users';
import Login from './components/login/Login';
import Guardian from './middleware/guardian';
import ReverseGuardian from './middleware/reverse-guardian';
import UsersGroups from './components/users-groups/UsersGroups';
import DashboardLayout from 'reactor/layout/components/AdminDashboard/DashboardLayout';

router.add('/login', Login, ReverseGuardian);

router.group({
    path: '/users',
    middleware: Guardian,
    layout: DashboardLayout,
    routes: [{
        path: '/',
        component: Users
    }, {
        path: '/groups',
        component: UsersGroups
    }]
});