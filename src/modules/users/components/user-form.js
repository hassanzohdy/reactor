import React from 'react';
import { trans } from 'reactor/localization';
import TextInput from 'reactor/form/components/text-input';
import EmailInput from 'reactor/form/components/email-input';
import PasswordInput from 'reactor/form/components/password-type';
import usersGroupsService from '../services/users-groups-service';
import SelectInput from 'reactor/form/components/select-input';
import { Obj } from 'reinforcements';


const mapResponse = response => {
    return response.data.records.map(record => ({
        label: record.name,
        value: record.id,
    }));
};

export default function UserForm(props) {
    const { record } = props;
    return (
        <>
            <TextInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />
            <EmailInput required defaultValue={record.email} placeholder={trans('email')} />
            <PasswordInput required={!record.id} placeholder={trans('password')} />
            <SelectInput 
                name="group"
                label="Administrator Group"
                lazyLoading
                required
                value={Obj.get(record, 'group.id')}
                request={e => usersGroupsService.list()}
                mapResponse={mapResponse}
            />
        </>
    )
}