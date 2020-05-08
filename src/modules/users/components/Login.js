import './login.scss';
import React from 'react';
import { mapObject } from 'reactor/helpers';
import Form from 'reactor/component/form/form';
import { login } from 'modules/users/services/auth';
import { title, description } from 'reactor/metadata';
import FormInput from 'reactor/component/form/form-input';
import ReactorComponent from 'reactor/component/reactor.component';
import user from 'reactor/user';

export default class Login extends ReactorComponent {
    state = {
    };

    /**
     * {@inheritdoc} 
     */
    init() {
        title('My Login Page');
        description('Some login description');

        if (user.isLoggedIn()) {
            // redirect to home page
        }
    }

    /**
     * Submit login form
     */
    login = async (e) => {
        this.set('errors', null); // make sure to clear previous errors

        try {
            let { data } = await login(e.target);

            user.login(data.user);

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

    render() {
        return (
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
        );
    }
}