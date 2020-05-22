import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import Table from 'shared/components/table/table';
import usersService from 'modules/users/services/users-service';
import ReactorComponent from 'reactor/components/reactor.component';
import DashboardLayout from 'shared/components/layout/dashboard-layout';
import { TableEditButton, TableDeleteButton } from 'shared/components/table/table-actions';
import AdminTableLayout from 'shared/components/layout/admin-table-layout';

export default class Users extends ReactorComponent {
    state = {
        isLoading: true,
    };

    table = {
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
            },
            {
                heading: 'actions',
                buttons: [TableEditButton, TableDeleteButton]
            }
        ],
    };

    /**
     * {@inheritdoc}
     */
    async init() {
        translatedTitle(this.table.heading);

        let { data } = await usersService.list(); // /users

        let { records, paginationInfo } = data;

        this.paginationInfo = paginationInfo;

        this.records = records;

        this.set('isLoading', false);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        return <AdminTableLayout options={this.table} service={usersService}></AdminTableLayout>
    }
}   