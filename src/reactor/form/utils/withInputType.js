import React from 'react';
import FormInput from '../components/FormInput';

export default function withInputType(type, defaultProps = {}) {
    const Input = function (props) {
        return <FormInput  {...props} type={type} />
    }

    Input.defaultProps = defaultProps;

    return Input;
}

