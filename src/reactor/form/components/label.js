import React from 'react';
import { FormLabel } from '@material-ui/core';
import { RequiredSpan } from './form-components-helpers';

export default function Label({ label, children, component: Component, required, ...otherProps }) {
    label = label || children;

    if (! label) return '';

    return (
        <Component {...otherProps}>
            {label}
            <RequiredSpan required={required} />
        </Component>
    )
}

Label.defaultProps = {
    component: FormLabel,
}