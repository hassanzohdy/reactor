import sidebarItems from 'reactor/layout/components/admin-dashboard/sidebar/sidebar-items-list';
import { DashboardRounded, VerifiedUser, SupervisedUserCircle } from '@material-ui/icons';

sidebarItems.extend([
    {
        text: 'Dashboard',
        route: '/',
        icon: DashboardRounded
    },
    {
        text: 'Users',
        icon: VerifiedUser,
        items: [
            {
                text: 'Users List',
                route: '/users',
                icon: SupervisedUserCircle
            }
        ]
    }
]);