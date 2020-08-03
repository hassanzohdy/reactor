import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel } from '@material-ui/core';

export default function CheckboxGroup({ label, row, children }) {
    return (
        <>
            {label && <FormLabel children={label} />}
            <FormGroup row={row}>
                {children}
            </FormGroup>
        </>
    )
}

CheckboxGroup.propTypes = {
    label: PropTypes.string.isRequired,
    row: PropTypes.bool,
    children: PropTypes.node,
};

CheckboxGroup.defaultProps = {
    row: true,
};