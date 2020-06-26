import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './static-button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { HiddenInputFile } from './form-components-helpers';
import { FormControl, FormHelperText } from '@material-ui/core';
import { FileInputWrapper, FileButtonWrapper, FileButtonText } from './file-input-helper-components';
import Is from '@flk/supportive-is';
import Label from './label';
import useRequiredInputValidator from './../hooks/use-required-input-validator';

export default function FileInput({ label, required, accept, onChange, buttonText, buttonIcon, id, name, ...otherProps }) {
    const [currentButtonText, setButtonText] = React.useState(buttonText);
    const [error, setError] = React.useState(null);
    const [files, setFiles] = React.useState(null);

    const fileInputRef = React.useRef();
    const componentRef = React.useRef();

    const clearRequiredInput = useRequiredInputValidator(required, componentRef, files, setError);

    if (Is.array(accept)) {
        accept = accept.map(extension => '.' + extension).join(',');
    }

    const hasError = Boolean(error);

    const openFileSelectionDialog = e => {
        fileInputRef.current.click();
    }

    const onFileSelection = e => {
        const selectedFileName = e.target.files[0].name;

        onChange(e);

        setButtonText(selectedFileName);

        setFiles(Array.from(e.target.files));

        clearRequiredInput();
    }
    
    return (
        <FileInputWrapper>
            <FormControl error={hasError}>
                <Label label={label} htmlFor={id} required={required} />
                
                <FileButtonWrapper>
                    <otherProps.buttonComponent id={id} onClick={openFileSelectionDialog}>
                        {buttonIcon}
                        <FileButtonText>{currentButtonText}</FileButtonText>
                    </otherProps.buttonComponent>
                </FileButtonWrapper>

                <FormHelperText error={hasError}>{error}</FormHelperText>

                <HiddenInputFile accept={accept} onChange={onFileSelection} ref={fileInputRef} style={{ display: 'none' }} name={name} />
            </FormControl>
        </FileInputWrapper>
    )
}

FileInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.node,
    buttonComponent: PropTypes.any,
    required: PropTypes.bool,
    onChange: PropTypes.func,
}

FileInput.defaultProps = {
    buttonText: 'Please Select File',
    buttonIcon: <CloudUploadIcon />,
    id: 'file-input-' + Math.random(),
    buttonComponent: PrimaryButton,
    onChange: () => {},
}