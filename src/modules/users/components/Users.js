import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import usersService from 'modules/users/services/users-service';
import AdminTableLayout from 'shared/components/layout/admin-table-layout';

const table = {
    heading: 'users',
    actions: true, // table button actions
    columns: [
        {
            heading: '#',
            key: 'id',
        },
        {
            heading: 'name',
            key: 'name',
        },
        {
            heading: 'group',
            key: 'group.name',
        },
        {
            heading: 'email',
            key: 'email',
        },
    ],
};

export default function Users(props) {
    translatedTitle(table.heading);

    return <AdminTableLayout options={table} service={usersService}></AdminTableLayout>;
}   