import './login.scss';
import user from 'user';
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { navigateTo } from 'reactor/router';
import { mapObject } from 'reactor/helpers';
import { trans } from 'reactor/localization';
import Form from 'reactor/form/components/form';
import { login } from 'modules/users/services/auth';
import Layout from 'shared/components/layout/layout';
import { title, description } from 'reactor/metadata';
import EmailInput from 'reactor/form/components/email-input';
import SubmitButton from 'reactor/form/components/submit-button';
import PasswordInput from 'reactor/form/components/password-type';
import ReactorComponent from 'reactor/components/reactor.component';
import FileInput from 'reactor/form/components/file-input';
import { SecondaryButton } from 'reactor/form/components/static-button';

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
    login = async (e, form) => {
        this.set('error', null); // make sure to clear previous errors
        this.set('errors', null); // make sure to clear previous errors

        try {
            let { data } = await login(e.target);

            user.login(data.user);

            navigateTo('/users');
        } catch (error) {
            form.isSubmitting = false;
            let { errors, error: errorText } = error.response.data;

            if (errorText) {
                this.set('error', errorText);
            }

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


                        {this.get('error') &&
                            <Alert severity="error">{this.get('error')}</Alert>
                        }

                        <EmailInput
                            autoFocus
                            className="form-control"
                            name="email"
                            required
                            placeholder={trans('email')}
                        />

                        <PasswordInput
                            required
                            minLength={8}
                            name="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                        />

                        <FileInput required label="Attachment" />

                        <SubmitButton fullWidth theme="dark">Login</SubmitButton>
                    </Form>
                </div>
            </Layout>
        );
    }
}