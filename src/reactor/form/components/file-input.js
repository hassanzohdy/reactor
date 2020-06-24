import React from 'react';
import PropTypes from 'prop-types';
import StaticButton from './static-button';
import FormContext from '../utils/form-context';
import { trans } from 'reactor/localization/translator';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';

export default function FileInput({ label, required, buttonText, buttonIcon, id, name }) {
    const [currentButtonText, setButtonText] = React.useState(buttonText);
    const [error, setError] = React.useState(null);

    const fileInputRef = React.useRef();

    const { form } = React.useContext(FormContext);

    const inputToForm = React.useRef();

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

        setButtonText(selectedFileName);

        setError(null);

        form.cleanInput(inputToForm.current);
    }
    
    return (
        <div style={{ marginBottom: '1rem' }}>
            <FormControl error={Boolean(error)}>
                <FormLabel htmlFor={id}>{label}</FormLabel>
                <div style={{ margin: '10px 0 0' }}>
                    <StaticButton id={id} onClick={openFileSelectionDialog} color="primary" variant="contained">
                        {buttonIcon}
                        <span style={{ marginLeft: '0.6rem' }}>{currentButtonText}</span>
                    </StaticButton>
                </div>

                {error &&
                    <FormHelperText>{error}</FormHelperText>
                }

                <input type="file" onChange={onFileSelection} ref={fileInputRef} style={{ display: 'none' }} name={name} />
            </FormControl>
        </div>
    )
}

FileInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.node,
    required: PropTypes.bool,
}

FileInput.defaultProps = {
    buttonText: 'Please Select File',
    buttonIcon: <CloudUploadIcon />,
    id: 'file-input-' + Math.random(),
}