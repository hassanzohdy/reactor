import React from 'react';
import UserForm from './user-form';
import { translatedTitle } from 'reactor/metadata';
import usersService from 'modules/users/services/users-service';
import AdminTableLayout from 'reactor/layout/components/admin-dashboard/admin-table-layout';
import EmailFormatter from 'reactor/table/components/formatters/email-formatter';
import tableActions from 'reactor/layout/components/admin-dashboard/table-actions';

const Button1 = (props) => {
    console.log(props.record);
    
    return <button>GO</button>
}


const Button2 = props => {
    
    return <button>GO 2</button>
}

const options = {
    heading: 'users',
    form: UserForm,
    singleName: 'user',
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
            formatter: EmailFormatter,
        },
        tableActions,
    ],
};

export default function Users() {
    translatedTitle(options.heading);

    return <AdminTableLayout options={options} service={usersService}></AdminTableLayout>;
}   