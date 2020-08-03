import React from 'react';
import { styled } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { hasInitialLocaleCode } from 'reactor/router/navigator';
import { getCurrentLocaleCode } from 'reactor/localization/locales';
import styleSettings from 'reactor/layout/utils/style-settings';
import { getCurrentBseAppPath } from 'reactor/router/apps-list';
import { concatRoute } from 'reactor/router';

const ColoredLink = styled(MaterialLink)({
    color: styleSettings.get('colors.link'),
});

const Link = React.forwardRef(function (props, forwardedRef) {
    let { to, href, localeCode, color, style = {}, relative, baseApp = getCurrentBseAppPath(), ...otherLinkProps } = props;

    if (!to && href) {
        to = href;
    }

    if (color) {
        style.color = color;
    }

    otherLinkProps.style = style;

    // Using target="_blank" without rel="noopener noreferrer" is a security risk: 
    // @see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
    if (otherLinkProps.target) {
        otherLinkProps.rel = 'noopener noreferrer';
    }


    // if not relative, then use the normal anchor tag
    if (!relative) {
        return <ColoredLink href={to} ref={forwardedRef} {...otherLinkProps} />
    }

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

    otherLinkProps.to = concatRoute(path);

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