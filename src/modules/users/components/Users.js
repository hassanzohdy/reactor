import React from 'react';
import UserForm from './user-form';
import { translatedTitle } from 'reactor/metadata';
import usersService from 'modules/users/services/users-service';
import AdminTableLayout from 'reactor/layout/components/admin-dashboard/admin-table-layout';
import EmailFormatter from 'reactor/table/components/formatters/email-formatter';
import BadgeFormatter from 'reactor/table/components/formatters/BadgeFormatter';
import { RedBadge, DarkBadge, OrangeBadge, GreenBadge } from 'reactor/components/badge';

const options = {
    heading: 'users',
    form: UserForm,
    singleName: 'user',
    actions: true, // table button actions
    columns: [
        {
            heading: '#',
            key: 'id',
        },
        {
            heading: 'name',
            key: 'name',
            formatter: BadgeFormatter,
            badges: {
                Testing: OrangeBadge,
                malak: GreenBadge,
                'Hasan Zohdy': RedBadge,
            }
        },
        {
            heading: 'group',
            key: 'group.name',
        },
        {
            heading: 'email',
            key: 'email',
            formatter: EmailFormatter,
        },
    ],
};

export default function Users(props) {
    translatedTitle(options.heading);

    return <AdminTableLayout options={options} service={usersService}></AdminTableLayout>;
}   