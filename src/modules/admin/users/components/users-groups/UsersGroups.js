import UserGroupForm from './user-group-form';
import crudPage from  'reactor/layout/utils/admin/crudPage';
import tableActions from 'reactor/layout/utils/admin/table-actions';
import usersGroupsService from 'modules/admin/users/services/users-groups-service';

const options = {
    service: usersGroupsService,
    formOptions: {
        form: UserGroupForm,
        singleName: 'usersGroup',
    },
    table: {
        heading: 'usersGroups',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'name',
                key: 'name',
            },
            tableActions,
        ],
    }
};

const UsersGroups = crudPage(options);

export default UsersGroups;