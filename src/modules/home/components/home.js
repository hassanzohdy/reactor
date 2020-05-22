import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import DashboardLayout from 'shared/components/layout/dashboard-layout';

export default function Home() {
    let title = translatedTitle('dashboard');

    return (
        <DashboardLayout>
            <h1>{title}</h1>
        </DashboardLayout>
    )
} 