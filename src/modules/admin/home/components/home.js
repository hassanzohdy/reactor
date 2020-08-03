import React from 'react';
import { trans } from 'reactor/localization';
import Helmet from 'reactor/components/Helmet';
import usersService from '../../users/services/users-service';
import { lastRequest } from 'reactor/endpoint';

export default function Home() {
    usersService.list();

    return (
        <>
            <Helmet title="dashboard" description="myDescription" />
            <h1>{trans('dashboard')}</h1>
        </>
    );
} 