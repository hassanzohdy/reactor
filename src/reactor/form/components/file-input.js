import React from 'react';
import PropTypes from 'prop-types';
import RequiredSpan from './required-span';
import FormContext from '../utils/form-context';
import { trans } from 'reactor/localization/translator';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';
import {
    FileInputWrapper, FileButtonWrapper,
    FileButtonText, FileButton,
    HiddenFileInput
} from './file-input-helper-components';

export default function FileInput({ label, required, accept, onChange, buttonText, buttonIcon, id, name, ...otherProps }) {
    const [currentButtonText, setButtonText] = React.useState(buttonText);
    const [error, setError] = React.useState(null);

    const fileInputRef = React.useRef();

    const { form } = React.useContext(FormContext);

    const inputToForm = React.useRef();

    const hasError = Boolean(error);

    if (!inputToForm.current) {
        inputToForm.current = {
            validate() {
                if (!required) return;

                const files = fileInputRef.current.files;

                // reset the error if exists
                this.hasError = null;

                // now check if there are no files selected
                if (files.length === 0) {
                    // the required error
                    const errorMessage = trans('validation.required');

                    // set the error to the form
                    this.hasError = errorMessage;

                    // also update the file input error
                    setError(errorMessage);
                }
            }
        };

        form.setInput(inputToForm.current);
    }

    const openFileSelectionDialog = e => {
        fileInputRef.current.click();
    }

    const onFileSelection = e => {
        const selectedFileName = e.target.files[0].name;

        onChange(e);

        setButtonText(selectedFileName);

        setError(null);

        form.cleanInput(inputToForm.current);
    }

    return (
        <FileInputWrapper>
            <FormControl error={hasError}>
                <FormLabel htmlFor={id}>
                    <span className="text">{label}</span>
                    <RequiredSpan open={required} />
                </FormLabel>
                <FileButtonWrapper>
                    <otherProps.buttonComponent id={id} onClick={openFileSelectionDialog}>
                        {buttonIcon}
                        <FileButtonText>{currentButtonText}</FileButtonText>
                    </otherProps.buttonComponent>
                </FileButtonWrapper>

                <FormHelperText error={hasError}>{error}</FormHelperText>

                <HiddenFileInput accept={accept} onChange={onFileSelection} ref={fileInputRef} style={{ display: 'none' }} name={name} />
            </FormControl>
        </FileInputWrapper>
    )
}

FileInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.node,
    required: PropTypes.bool,
    accept: PropTypes.any,
    buttonComponent: PropTypes.node,
    onChange: PropTypes.func,
}

FileInput.defaultProps = {
    buttonText: 'Please Select File',
    buttonIcon: <CloudUploadIcon />,
    id: 'file-input-' + Math.random(),
    buttonComponent: FileButton,
    onChange: () => {},
}