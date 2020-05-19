import React from 'react';
import PropTypes from 'prop-types';
import Globals from 'reactor/globals';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MultiDirection from './multi-direction';


const theme = createMuiTheme({
    direction: Globals.direction,
    palette: {
        primary: {
            main: lightBlue[800],
        },
    },
    status: {
        danger: 'orange',
    },
});

export default function Theme(props) {
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