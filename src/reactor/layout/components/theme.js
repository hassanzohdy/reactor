import React from 'react';
import PropTypes from 'prop-types';
import Globals from 'reactor/globals';
import MultiDirection from './multi-direction';
import styleSettings from '../utils/style-settings';
import CssBaseline from '@material-ui/core/CssBaseline';
import { setExternalFontFamily } from '../utils/font-family-switcher';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Theme(props) {
    const fontFamily = styleSettings.get(`fontFamily.${Globals.localeCode}.fontFamily`);
    const fontFamilySrc = styleSettings.get(`fontFamily.${Globals.localeCode}.src`);

    setExternalFontFamily(fontFamilySrc);
    
    const theme = createMuiTheme({    
        direction: Globals.direction,
        typography: {
            fontFamily: fontFamily,
        },
        palette: {
            primary: {
                main: styleSettings.get('colors.primary'),
            },
            secondary: {
                main: styleSettings.get('colors.secondary'),
            }
        },
        status: {
            danger: 'orange',
        },
    });
    
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