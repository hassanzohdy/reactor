import UserForm from './user-form';
import usersService from 'modules/admin/users/services/users-service';
import EmailFormatter from 'reactor/table/components/formatters/email-formatter';
import tableActions from 'reactor/layout/components/admin-dashboard/table-actions';
import optionedAdminTable from 'reactor/layout/components/admin-dashboard/optioned-admin-table-layout';

const options = {
    service: usersService,
    formOptions: {
        form: UserForm,
        singleName: 'user',
        load: process.env.NODE_ENV,
    },
    table: {
        heading: 'users',
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
    }
};

const Users = optionedAdminTable(options);

export default Users;