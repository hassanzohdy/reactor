import React from 'react';
import { styled } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { hasInitialLocaleCode } from 'reactor/router/navigator';
import { getCurrentLocaleCode } from 'reactor/localization/locales';
import styleSettings from '../layout/utils/style-settings';

const ColoredLink = styled(MaterialLink)({
    color: styleSettings.get('colors.link'),
});

const Link = React.forwardRef(function (props, forwardedRef) {
    let { to, localeCode, relative, ...otherLinkProps } = props;

    // if not relative, then use the normal anchor tag
    if (! relative) {
        return <ColoredLink href={to} ref={forwardedRef} {...otherLinkProps} />
    }

    if (!localeCode && hasInitialLocaleCode()) {
        localeCode = getCurrentLocaleCode();
    }

    if (localeCode) {
        // /users
        // /en/users
        // to = /
        to = '/' + localeCode + (to === '/' ? '' : to);
        // /en
    }

    otherLinkProps.to = to;

    return <ColoredLink component={RouterLink} {...otherLinkProps} ref={forwardedRef} />
});
    
Link.defaultProps = {
    relative: true,
    // localeCode: hasInitialLocaleCode() ? Globals.localeCode : null,
};

// if initial locale code is true, then add the current locale code as locale code prop
// for the link

// /users ? false >> no locale code
// /en/users ? true >> get current locale code

export default Link;