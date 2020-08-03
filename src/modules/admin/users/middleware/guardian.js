import React from 'react';
import user from "reactor/user";
import Redirect from 'reactor/components/Redirect';

export default function isLoggedIn(route, history) {
    if (! user.isLoggedIn()) {
        return <Redirect to="/login" />
    }
}
