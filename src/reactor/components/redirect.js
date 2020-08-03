import React from 'react';
import { concatRoute } from 'reactor/router';
import { Redirect as ReactRedirect } from 'react-router-dom';
import { hasInitialLocaleCode } from 'reactor/router/navigator';
import { getCurrentBseAppPath } from 'reactor/router/apps-list';
import { getCurrentLocaleCode } from 'reactor/localization/locales';

const Redirect = React.forwardRef(function (props, forwardedRef) {
    let { to, localeCode, relative, baseApp = getCurrentBseAppPath(), ...otherProps } = props;

    if (!localeCode && hasInitialLocaleCode()) {
        localeCode = getCurrentLocaleCode();
    }

    let path = concatRoute(baseApp, to);

    if (localeCode) {
        // /users
        // /en/users
        // to = /
        path = concatRoute(localeCode, path);
        // /en
    }
    
    otherProps.to = concatRoute(path);

    return <ReactRedirect {...otherProps} ref={forwardedRef} />
});
    
export default Redirect;