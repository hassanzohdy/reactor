import UserForm from './user-form';
import crudPage from  'reactor/layout/utils/admin/crudPage';
import tableActions from 'reactor/layout/utils/admin/table-actions';
import usersService from 'modules/admin/users/services/users-service';
import EmailFormatter from 'reactor/table/components/Formatters/EmailFormatter';

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

const Users = crudPage(options);

export default Users;