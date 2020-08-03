import './index.scss';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

export default function Spinner({className, theme = 'main', color}) {
    const style = {};
    if (color && theme === 'main') {
        theme = '';
        style.backgroundColor = color;
    }

    const spinnerClass = clsx('spinner', className, theme);
    return (
        <div className={spinnerClass}>
            <div style={style} className="bounce bounce1"></div>
            <div style={style} className="bounce bounce2"></div>
            <div style={style} className="bounce bounce3"></div>
        </div>
    )
}

Spinner.propTypes = {
    theme: PropTypes.oneOf([
        'white', 'black', 'gray', 'red', 'blue', 'pink', 'purple', 'green',
        'orange', 'main'
    ]).isRequired,
}