import React from 'react';
import PropTypes from 'prop-types';
import Is from '@flk/supportive-is';
import Alert from '@material-ui/lab/Alert';
import { styled } from '@material-ui/core';
import { trans } from '../../localization/translator';
import Globals from '../../globals';

const ErrorsList = styled('ul')({
    padding: 0,
})

export default function FormError({ error, heading = trans('validation.errorsHeading') }) {
    if (Is.empty(error)) return '';

    let errorText = error;

    if (Is.plainObject(error)) {
        errorText = [];

        for (let key in error) {
            errorText.push(error[key]);
        }
    }

    if (Is.array(errorText)) {
        errorText = (
            <div style={{textAlign: Globals.left}}>
                <strong>{heading}:</strong>
                <ErrorsList>
                    {errorText.map((error, key) => {
                        return (
                            <li key={key}>{error}</li>
                        )
                    })}
                </ErrorsList>
            </div>
        )
    }

    return (
        <Alert severity="error">
            {errorText}
        </Alert>
    )
}

FormError.propTypes = {
    heading: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}