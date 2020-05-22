import React, { useEffect, useState } from 'react';
import { translatedTitle } from 'reactor/metadata';
import DashboardLayout from 'shared/components/layout/dashboard-layout';
import { Button } from '@material-ui/core';

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
    translatedTitle('dashboard');

    const [clicks, setClicks] = useState(0);

    const [welcome, setWelcome] = useState('Welcome Home');

    if (clicks == 2 && welcome != 'Welcome Back Home') {
        setWelcome('Welcome Back Home');
    }

    // First case
    // call the callback after each render
    // componentDidMount + componentDidUpdate with every render
    // useEffect(() => {
    //     console.log(100);        
    // });

    // Second Case
    // call the callback only after the first render
    // init >> componentDidMount
    // useEffect(() => {
    //     console.log(100);        
    // }, []);

    // Third Case
    // call the callback only after the first render + 
    // certain props or state value is changed
    // componentDidMount + componentDidUpdate with certain values update
    // useEffect(() => {
    //     console.log(100);        
    // }, [welcome, clicks]);

    // Forth Case
    // ComponentWillUnmount
    // useEffect(() => {
    //     console.log('Welcome');

    //     return () => {
    //         console.log('Good Bye :)');
    //     };
    // }, []);

    
    return (
        <DashboardLayout>
            {clicks <= 2 && <Hello />}
            <h1>Total Clicks: {clicks}</h1>

            <Button onClick={e => 
                setClicks(currentClicks => {
                    return currentClicks + 1;
                })
                }>Update</Button>
        </DashboardLayout>
    )
} 