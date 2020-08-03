import React from 'react';
import Label from './Label';
import Is from '@flk/supportive-is';
import PropTypes from 'prop-types';
import { Random } from 'reinforcements';
import { PrimaryButton } from './StaticButton';
import { HiddenInputFile } from './FormHelpers';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FormControl, FormHelperText } from '@material-ui/core';
import useRequiredInputValidator from '../hooks/use-required-input-validator';
import toInputName from 'reinforcements/src/utilities/str/toInputName';
import {
    FileInputWrapper,
    FileButtonWrapper,
    FileButtonText
} from './FileInputHelperComponents';

export default function FileInput({ label, required, accept, onChange, buttonText, buttonIcon, id = Random.id(), name, ...otherProps }) {
    const [currentButtonText, setButtonText] = React.useState(buttonText);
    const [error, setError] = React.useState(null);
    const [files, setFiles] = React.useState(otherProps.value);

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
        // is the files is empty, it means client has clicked on the cancel button
        if (Is.empty(e.target.files)) return;

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

                <HiddenInputFile accept={accept} onChange={onFileSelection} ref={fileInputRef} style={{ display: 'none' }} name={toInputName(name)} />
            </FormControl>
        </FileInputWrapper>
    )
}

FileInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    buttonIcon: PropTypes.node,
    buttonText: PropTypes.node,
    buttonComponent: PropTypes.any,
};

FileInput.defaultProps = {
    onChange: () => { },
    buttonComponent: PrimaryButton,
    buttonIcon: <CloudUploadIcon />,
    buttonText: 'Please Select File',
};