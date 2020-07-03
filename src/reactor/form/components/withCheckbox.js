import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function withCheckbox(WrappedCheckboxComponent) {
    const Checkbox = function ({ label, readOnly, onChange, ...otherProps }) {
        const [checked, setChecked] = React.useState(Boolean(otherProps.defaultChecked || otherProps.checked));

        const handleChange = e => {
            const newInputCheckedState = e.target.checked;

            if (readOnly) return;

            setChecked(newInputCheckedState);

            onChange(newInputCheckedState);
        };

        const checkboxInput = <WrappedCheckboxComponent color="primary" {...otherProps} checked={checked} onChange={handleChange} />;

        if (! label) {
            return checkboxInput;
        }
        
        return (
            <FormControlLabel control={checkboxInput} label={label} />
        )
    }

    Checkbox.propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        defaultChecked: PropTypes.bool,
        checked: PropTypes.bool,
        readOnly: PropTypes.bool,
    }

    Checkbox.defaultProps = {
        onChange: () => { },
    }

    return Checkbox;
}