import React from 'react';
import { translatedTitle } from 'reactor/metadata';

export default function Home() {
    let title = translatedTitle('dashboard');

    return <h1>{title}</h1>;
} 