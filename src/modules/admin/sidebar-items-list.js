import { trans } from 'reactor/localization';
import sidebarItems from 'reactor/layout/utils/admin/sidebar-items-list';
import { DashboardRounded, VerifiedUser, SupervisedUserCircle } from '@material-ui/icons';

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