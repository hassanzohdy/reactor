import React from 'react';
import FormInput from 'reactor/components/form/form-input';

export default function UserForm(props) {
    let { record } = props;
    
    return (
        <>
            <FormInput name="name" defaultValue={record.name} required placeholder="User Name"></FormInput>
        </>
    )
}
