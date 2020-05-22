import React, { useEffect, useState } from 'react';
import { translatedTitle } from 'reactor/metadata';
import DashboardLayout from 'shared/components/layout/dashboard-layout';
import { Button } from '@material-ui/core';
import { trans } from 'reactor/localization';

function Hello() {
    useEffect(() => {
        console.log('Welcome');

        // when the component will be removed from the dom
        return () => {
            console.log('Good Bye :)');
        };
    }, []);
    return <h1>Hello</h1>
}

function multiple(number) {
    return number * 20;
}

export default function Home(props) {
    let title = translatedTitle('dashboard');
    return (
        <DashboardLayout>
            <h1>{title}</h1>
        </DashboardLayout>
    )
} 