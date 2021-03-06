import React from 'react';
import PropTypes from 'prop-types';
import { trans } from 'reactor/localization';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function withCheckbox(WrappedCheckboxComponent) {
    const Checkbox = function ({ label, readOnly, value = 1, onChange, ...otherProps }) {
        const [checked, setChecked] = React.useState(Boolean(otherProps.defaultChecked || otherProps.checked));

        const handleChange = e => {
            const newInputCheckedState = e.target.checked;

            if (readOnly) return;

            setChecked(newInputCheckedState);

            onChange(newInputCheckedState);
        };

        const checkboxInput = <WrappedCheckboxComponent value={value} color="primary" {...otherProps} checked={checked} onChange={handleChange} />;

        if (! label) {
            return checkboxInput;
        }
        
        return (
            <FormControlLabel control={checkboxInput} label={trans(label)} />
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