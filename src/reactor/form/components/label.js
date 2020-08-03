import React from 'react';
import { FormLabel } from '@material-ui/core';
import { RequiredSpan } from './FormHelpers';
import { trans } from 'reactor/localization';

export default function Label({ label, children, component: Component, required, ...otherProps }) {
    label = label || children;

    if (! label) return '';

    return (
        <Component {...otherProps}>
            {trans(label)}
            <RequiredSpan required={required} />
        </Component>
    )
}

Label.defaultProps = {
    component: FormLabel,
}