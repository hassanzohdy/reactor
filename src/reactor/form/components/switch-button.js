import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SwitchButton({ label, readOnly, onChange, ...otherProps }) {
    const [checked, setChecked] = React.useState(Boolean(otherProps.defaultChecked || otherProps.checked));

    const handleChange = e => {
        const newInputCheckedState = e.target.checked;

        if (readOnly) return;

        setChecked(newInputCheckedState);

        onChange(newInputCheckedState);
    };

    const switchInput = <Switch color="primary" {...otherProps} checked={checked} onChange={handleChange} />;

    return (
        <FormControlLabel control={switchInput} label={label} />
    );
}


SwitchButton.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    readOnly: PropTypes.bool,
}

SwitchButton.defaultProps = {
    onChange: () => { },
}