import PropTypes from 'prop-types';
import React, { useState } from 'react';

export function If(props) {
    if (props.condition === false) return '';

    return props.children;
}

export function ElseIf() {
    return;
}

export function Else() {
    return;
}

export default function Condition(props) {
    for (let child of props.children) {
        if (child.props.condition === true || child.props.condition === undefined) {
            return child.props.children;
        }  
    }
}