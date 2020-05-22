import './login.scss';
import user from 'user';
import React from 'react';
import { navigateTo } from 'reactor/router';
import { mapObject } from 'reactor/helpers';
import Form from 'reactor/components/form/form';
import { login } from 'modules/users/services/auth';
import Layout from 'shared/components/layout/layout';
import { title, description } from 'reactor/metadata';
import FormInput from 'reactor/components/form/form-input';
import ReactorComponent from 'reactor/components/reactor.component';

export default class Login extends ReactorComponent {
    /**
     * {@inheritdoc}
     */
    state = {};

    /**
     * {@inheritdoc} 
     */
    init() {
        title('My Login Page');
        description('Some login description');
    }

    /**
     * Submit login form
     */
    login = async (e) => {
        this.set('errors', null); // make sure to clear previous errors

        try {
            let { data } = await login(e.target);

            user.login(data.user);

            navigateTo('/users');

        } catch (error) {
            let errors = error.response.data.errors;

            this.set('errors', errors);
        }
    };

    /**
     * Display errors coming from api 
     */
    displayErrors() {
        this.errors = this.get('errors');
        return mapObject(this.errors, (key, value) => {
            return (
                <div key={key}>{value}</div>
            );
        });
    }

    /**
     * {@inheritdoc}
     */
    render() {
        return (
            <Layout>

                <div id="login-page">
                    <h1>Login Page</h1>

                    <Form onSubmit={this.login}>
                        {this.get('errors') &&
                            <div className="error">
                                {this.displayErrors()}
                            </div>
                        }

                        <FormInput
                            type="email"
                            className="form-control"
                            name="email"
                            required={true}
                            placeholder="Email Address"
                        />

                        <FormInput
                            type="password"
                            required={true}
                            name="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                        />
                        <div id="button-wrapper">
                            <button>Login</button>
                        </div>
                    </Form>
                </div>  
            </Layout>
        );
    }
}