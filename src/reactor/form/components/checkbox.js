import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Checkbox({label, readOnly, onChange, ...otherProps}) {
    const [checked, setChecked] = React.useState(Boolean(otherProps.defaultChecked || otherProps.checked));

    const handleChange = e => {
        const newInputCheckedState = e.target.checked;

        if (readOnly) return;

        setChecked(newInputCheckedState);

        onChange(newInputCheckedState);
    };

    const checkboxInput = <MaterialCheckbox color="primary" {...otherProps} checked={checked} onChange={handleChange}  />;

    return (
        <FormControlLabel control={checkboxInput} label={label} />
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    readOnly: PropTypes.bool,
}

Checkbox.defaultProps = {
    onChange: () => {},
}