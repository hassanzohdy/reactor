import React from 'react';
import { Redirect as ReactRedirect } from 'react-router-dom';
import { concatRoute } from 'reactor/router/routes-list';
import { getCurrentBseAppPath } from '../router/apps-list';

export default function Redirect({ to }) {
    return <ReactRedirect to={concatRoute(getCurrentBseAppPath(), to)} />
}
