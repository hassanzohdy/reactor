import React from 'react';
import PropTypes from 'prop-types';
import {
    RadioGroup as MaterialRadioGroup,
    FormLabel, FormControl, FormControlLabel, Radio
} from '@material-ui/core';

export default function RadioGroup({ value, defaultValue, onChange, inputs, row, label, name }) {
    const [currentValue, setValue] = React.useState(defaultValue || value);

    const radioInputs = inputs.map(input => {
        const { label, value, disabled } = input;
        return <FormControlLabel key={value} value={value} control={<Radio color="primary" />} disabled={disabled} label={label} />;
    });

    const handleChange = e => {
        const value = e.target.value;
        setValue(value);
        onChange(value);
    };

    return (
        <FormControl>
            {label && <FormLabel children={label} />}

            <MaterialRadioGroup row={row} name={name} value={currentValue} onChange={handleChange}>
                {radioInputs}
            </MaterialRadioGroup>
        </FormControl>
    )
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    inputs: PropTypes.array.isRequired,
    row: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
}

RadioGroup.defaultProps = {
    // row is the direction of setting radio inputs
    // if set to true, then all radio inputs will be inlined in the same line
    row: true,
    onChange: () => { },
};