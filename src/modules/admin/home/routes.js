import router from 'reactor/router';
import Home from './components/Home';
import Guardian from 'modules/admin/users/middleware/guardian';
import DashboardLayout from 'reactor/layout/components/AdminDashboard/DashboardLayout';

router.partOf(DashboardLayout, [{
    path: '/', 
    component: Home, 
    middleware: Guardian,
}]);