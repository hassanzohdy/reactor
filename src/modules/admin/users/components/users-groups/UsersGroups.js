import tableActions from 'reactor/layout/components/admin-dashboard/table-actions';
import optionedAdminTable from 'reactor/layout/components/admin-dashboard/optioned-admin-table-layout';
import usersGroupsService from 'modules/admin/users/services/users-groups-service';
import UserGroupForm from './user-group-form';

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

const UsersGroups = optionedAdminTable(options);

export default UsersGroups;