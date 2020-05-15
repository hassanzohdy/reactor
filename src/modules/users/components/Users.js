import React from 'react';
import Layout from 'layout';
import usersService from 'modules/users/services/users-service';
import ReactorComponent from 'reactor/component/reactor.component';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Users extends ReactorComponent {
    state = {
        isLoading: true,
    };

    /**
     * {@inheritdoc}
     */
    async init() {
        let { data } = await usersService.list(); // /users

        let {records, paginationInfo} = data;

        this.users = records;

        this.set('isLoading', false);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        return (
            <Layout>
                {this.get('isLoading') && <LinearProgress />}

            </Layout>
        );
    }
}