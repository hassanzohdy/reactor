import React from 'react';
import { trans } from 'reactor/localization';
import TextInput from 'reactor/form/components/text-input';
import EmailInput from 'reactor/form/components/email-input';
import PasswordInput from 'reactor/form/components/password-type';

export default function UserForm(props) {
    const { record } = props;
    return (
        <>
            <TextInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />
            <EmailInput required defaultValue={record.email} placeholder={trans('email')} />
            <PasswordInput required={!record.id} placeholder={trans('password')} />
        </>
    )
}