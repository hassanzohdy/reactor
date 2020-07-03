import React from 'react';
import UserForm from './user-form';
import { translatedTitle } from 'reactor/metadata';
import usersService from 'modules/users/services/users-service';
import AdminTableLayout from 'reactor/layout/components/admin-dashboard/admin-table-layout';
import EmailFormatter from 'reactor/table/components/formatters/email-formatter';
import ImageFormatter from 'reactor/table/components/formatters/ImageFormatter';

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
        },
        {
            heading: 'image',
            key: 'image',
            defaultImage: 'https://image.winudf.com/v2/image1/Y29tLndhbGxwYXBlcnMuYWhkcGlfc2NyZWVuXzE1XzE1NjcwOTU1ODdfMDYx/screen-15.jpg?fakeurl=1&type=.jpg',
            formatter: ImageFormatter,
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