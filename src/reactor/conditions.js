import React from 'react';
import PropTypes from 'prop-types';

export function If(props) {
    if (props.condition === false) return '';

    return (
        <>
            {props.children}
        </>
    );
}

If.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
};

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