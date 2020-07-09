import React from 'react';
import PropTypes from 'prop-types';
import Globals from 'reactor/globals';
import MultiDirection from './multi-direction';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MAIN_COLOR } from 'shared/style';

export default function Theme(props) {
    const theme = createMuiTheme({    
        direction: Globals.direction,
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