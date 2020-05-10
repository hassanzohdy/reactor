import React from 'react';
import Is from '@flk/supportive-is';

export default function Middleware(props) {
    let { route, history } = props;

    let middlewareList = route.middleware;

    if (middlewareList) {
        if (! Is.array(middlewareList)) {
            middlewareList = [middlewareList];
        }

        for (let middleware of middlewareList) {
            let output = middleware(route, history);

            if (output) {
                return output;
            }
        }
    }

    return <route.component history={history} />;
}