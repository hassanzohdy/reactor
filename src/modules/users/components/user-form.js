import React from 'react';
import FormInput from 'reactor/components/form/form-input';
import { trans } from 'reactor/localization';

export default function UserForm(props) {
    const { record } = props;
    return (
        <>
            <FormInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />
            <FormInput type="email" name="email" required defaultValue={record.email} placeholder={trans('email')} />
            <FormInput type="password" name="password" required placeholder={trans('password')} />
        </>
    )
}