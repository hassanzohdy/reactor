import React from 'react';
import Layout from 'layout';
import usersService from 'modules/users/services/users-service';
import ReactorComponent from 'reactor/component/reactor.component';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from './table';
import { TableCell, TableRow } from '@material-ui/core';

export default class Users extends ReactorComponent {
    state = {
        isLoading: true,
    };

    table = {
        columns: [
            '#',
            'Name',
            'Email',
            'Actions',
        ],
    };

    /**
     * {@inheritdoc}
     */
    async init() {
        let { data } = await usersService.list(); // /users

        let { records, paginationInfo } = data;

        this.paginationInfo = paginationInfo;

        this.records = records;

        this.renderedRecords = this.records.map(record => {
            return <TableRow key={record.id}>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>
                    Actions List    
                </TableCell>
            </TableRow>
        });

        this.set('isLoading', false);
    }

    renderTable() {
        return <Table columns={this.table.columns} pagination={this.paginationInfo} rows={this.renderedRecords} />
    }

    /**
     * {@inheritdoc}
     */
    render() {
        let displayedContent = this.get('isLoading') ? <LinearProgress /> : this.renderTable();
        return (
            <Layout>
                {this.get('isLoading') && <LinearProgress />}

                {displayedContent}

            </Layout>
        );
    }
}   