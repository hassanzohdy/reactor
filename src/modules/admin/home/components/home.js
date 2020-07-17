import React from 'react';
import Helmet from 'reactor/components/helmet';
import { trans } from 'reactor/localization';

export default function Home() {
    return (
        <>
            <Helmet title="dashboard" description="myDescription" />
            <h1>{trans('dashboard')}</h1>
        </>
    );
} 