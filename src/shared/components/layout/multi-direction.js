import React from 'react';
import rtl from 'jss-rtl';
import { create } from 'jss';
import PropTypes from 'prop-types';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function MultiDirection(props) {
    return (        
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    )
}

MultiDirection.propTypes = {
    children: PropTypes.any.isRequired,
};