import React from 'react';
import { trans } from 'reactor/localization';
import TextInput from 'reactor/form/components/text-input';

export default function UserGroupForm(props) {
    const { record } = props;
    return (
        <>
            <TextInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />            
        </>
    )
}