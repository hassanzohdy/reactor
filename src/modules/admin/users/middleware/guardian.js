import React from 'react';
import user from "reactor/user";
import Redirect from 'reactor/components/redirect';

export default function isLoggedIn(route, history) {
    if (! user.isLoggedIn()) {
        return <Redirect to="/login" />
    }
}
