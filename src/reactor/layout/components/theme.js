import React from 'react';
import PropTypes from 'prop-types';
import Globals from 'reactor/globals';
import MultiDirection from './multi-direction';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MAIN_COLOR, FONT_FAMILIES } from 'shared/style';
import { Obj } from 'reinforcements';
import { setExternalFontFamily } from '../utils/font-family-switcher';

export default function Theme(props) {
    setExternalFontFamily(Obj.get(FONT_FAMILIES, Globals.localeCode + '.src'))
    const theme = createMuiTheme({    
        direction: Globals.direction,
        typography: {
            fontFamily: Obj.get(FONT_FAMILIES, Globals.localeCode + '.fontFamily'),
        },
        palette: {
            primary: {
                main: MAIN_COLOR,
            },
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