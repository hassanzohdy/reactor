import React from 'react';
import { FormLabel } from '@material-ui/core';
import { RequiredSpan } from './form-components-helpers';

export default function Label({ label, children, required, ...otherProps }) {
    label = label || children;

    if (! label) return '';

    return (
        <FormLabel {...otherProps}>
            {label}
            <RequiredSpan required={required} />
        </FormLabel>
    )
}