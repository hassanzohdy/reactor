import React from 'react';
import Globals from 'reactor/globals';
import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { hasInitialLocaleCode } from 'reactor/router-configurations/navigator';

const Link = React.forwardRef(function (props, forwardedRef) {
    let { to, localeCode, relative, ...otherLinkProps } = props;

    // if not relative, then use the normal anchor tag
    if (! relative) {
        return <MaterialLink href={to} ref={forwardedRef} {...otherLinkProps} />
    }

    if (localeCode) {
        // /users
        // /en/users
        // to = /
        to = '/' + localeCode + (to === '/' ? '' : to);
        // /en
    }

    otherLinkProps.to = to;

    return <RouterLink component={MaterialLink} {...otherLinkProps} ref={forwardedRef} />
});
    
Link.defaultProps = {
    relative: true,
    localeCode: hasInitialLocaleCode() ? Globals.localeCode : null,
};

// if initial locale code is true, then add the current locale code as locale code prop
// for the link

// /users ? false >> no locale code
// /en/users ? true >> get current locale code

export default Link;