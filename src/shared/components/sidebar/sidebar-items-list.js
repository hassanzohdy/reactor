import { DashboardRounded, VerifiedUser, SupervisedUserCircle } from '@material-ui/icons';

export default [
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
];