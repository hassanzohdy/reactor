import React from 'react';
import router from 'reactor/router';
import Home from './components/home';
import Link from 'reactor/components/link';
import Guardian from 'modules/users/middleware/guardian';
import DashboardLayout from 'reactor/layout/components/admin-dashboard/dashboard-layout';

const Test = props => {
    return (
        <>
            <h1>Test</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/users">Users</Link>
        </>
    )
};

router.partOf(DashboardLayout, [
    {
        path: '/',
        component: Home,
        middleware: Guardian,
    },
    {
        path: '/test',
        component: Test
    }
])