import React from 'react';
import PropTypes from 'prop-types';
import Globals from 'reactor/globals';
import MultiDirection from './MultiDirection';
import styleSettings from '../utils/style-settings';
import CssBaseline from '@material-ui/core/CssBaseline';
import { setExternalFontFamily } from '../utils/font-family-switcher';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Obj } from 'reinforcements';

export default function Theme(props) {
    const fontFamily = styleSettings.get(`fontFamily.${Globals.localeCode}.fontFamily`);
    const fontFamilySrc = styleSettings.get(`fontFamily.${Globals.localeCode}.src`);

    setExternalFontFamily(fontFamilySrc);

    const themeSettings = {
        direction: Globals.direction,
        status: 'orange',
    };

    if (fontFamily) {
        themeSettings.typography = {
            fontFamily
        };
    }

    if (styleSettings.get('colors.primary')) {
        Obj.set(themeSettings, 'palette.primary.main', styleSettings.get('colors.primary'));
    }

    if (styleSettings.get('colors.secondary')) {
        Obj.set(themeSettings, 'palette.secondary.main', styleSettings.get('colors.secondary'));
    }
    
    const theme = createMuiTheme(themeSettings);
    
    return (
        <MultiDirection>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    {props.children}
            </ThemeProvider>
        </MultiDirection>
    )
}

Theme.propTypes = {
    children: PropTypes.any.isRequired,
};