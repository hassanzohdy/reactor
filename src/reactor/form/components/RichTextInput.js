import React from 'react';
import Label from './Label';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { trans } from 'reactor/localization/translator';
import toInputName from 'reinforcements/src/utilities/str/toInputName';
import { FormControl, styled, FormHelperText } from '@material-ui/core';
import useRequiredInputValidator from '../hooks/use-required-input-validator';

// When the editor is empty, it returns the following html text
// in that case we'll compare the value with the following constant
// If it equals it, then we'll consider the value is empty
const emptyValueString = '<p><br></p>';

const InputWrapper = styled(FormControl)(({ theme }) => ({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
}));

const InputLabel = styled(Label)(({ theme }) => ({
    marginBottom: theme.spacing(1.5),
}));

export default function RichInput({ required, name, defaultValue, value, onChange, label, ...otherProps }) {
    const [inputValue, setValue] = React.useState(defaultValue || value);
    const [error, setError] = React.useState(null);

    const hasError = Boolean(error);

    const componentRef = React.useRef();

    const clearRequiredValidation = useRequiredInputValidator(required, componentRef, inputValue, setError);

    const onInputChange = value => {
        if (value === emptyValueString) {
            value = '';
        }

        setValue(value);

        if (onChange) {
            onChange(value);
        }

        if (! value) {
            setError(trans('validation.required'));
        } else {
            clearRequiredValidation();
        }
    }

    return (
        <InputWrapper error={hasError} fullWidth>
            <InputLabel label={label} required={required} />
            <ReactQuill {...otherProps} value={inputValue} onChange={onInputChange} />

            <FormHelperText error={hasError}>{error}</FormHelperText>

            {name &&
                <input type="hidden" name={toInputName(name)} value={inputValue} />
            }
        </InputWrapper>
    );
}