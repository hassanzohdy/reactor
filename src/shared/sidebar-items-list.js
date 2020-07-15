import sidebarItems from 'reactor/layout/components/admin-dashboard/sidebar/sidebar-items-list';
import { DashboardRounded, VerifiedUser, SupervisedUserCircle } from '@material-ui/icons';
import { trans } from 'reactor/localization';

sidebarItems.onUpdate(() => ([
    {
        text: trans('dashboard'),
        route: '/',
        icon: DashboardRounded
    },
    {
        text: trans('users'),        
        icon: VerifiedUser,
        items: [
            {
                text: trans('users'),
                route: '/users',
                icon: SupervisedUserCircle
            },
            {
                text: trans('usersGroups'),
                route: '/users/groups',
                icon: SupervisedUserCircle
            },
            
        ]
    }
]));