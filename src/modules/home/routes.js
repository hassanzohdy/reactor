import router from 'reactor/router';
import Home from './components/home';
import Guardian from 'modules/users/middleware/guardian';
import DashboardLayout from 'reactor/layout/components/admin-dashboard/dashboard-layout';

router.partOf(DashboardLayout, [{
    path: '/',
    component: Home, 
    middleware: Guardian,
}]);