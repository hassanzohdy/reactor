import React from 'react';
import FormInput from '../components/form-input';

export default function withInputType(type, defaultProps = {}) {
    const Input = function (props) {
        return <FormInput  {...props} type={type} />
    }

    Input.defaultProps = defaultProps;

    return Input;
}

