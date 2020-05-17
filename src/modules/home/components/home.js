import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import DashboardLayout from 'shared/components/layout/dashboard-layout';

export default function Home(props) {
    translatedTitle('dashboard');

    return (
        <DashboardLayout>
            <h1>Welcome</h1>
        </DashboardLayout>
    )
} 