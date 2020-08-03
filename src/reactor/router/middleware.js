import React from 'react';
import Is from '@flk/supportive-is';

export default function Middleware(props) {
    let { route, history, match } = props;

    let { params } = match || {};

    let middlewareList = route.middleware;

    if (middlewareList) {
        if (!Is.array(middlewareList)) {
            middlewareList = [middlewareList];
        }

        for (let middleware of middlewareList) {
            let output = middleware(route, history, params);

            if (output) {
                return output;
            }
        }
    }

    // scroll to the top page when navigating to new page
    window.scrollTo(0, 0);
    return <route.component params={params} history={history} />;
}