import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import DashboardLayout from 'reactor/layout/components/admin-dashboard/dashboard-layout';
import Link from 'reactor/components/link';

export default function Home() {
    let title = translatedTitle('dashboard');

    return (
        <>
            <h1>{title}</h1>
            <Link to="/test">Test</Link>
            <Link to="/users">Users</Link>
        </>

    )
} 