import React from 'react';
import { Obj } from 'reinforcements';
import { trans } from 'reactor/localization';
import TextInput from 'reactor/form/components/TextInput';
import EmailInput from 'reactor/form/components/EmailInput';
import SelectInput from 'reactor/form/components/SelectInput';
import PasswordInput from 'reactor/form/components/PasswordInput';
import usersGroupsService from 'modules/admin/users/services/users-groups-service';

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