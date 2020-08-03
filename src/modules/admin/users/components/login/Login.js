import './login.scss';
import user from 'user';
import React from 'react';
import { navigateTo } from 'reactor/router';
import Helmet from 'reactor/components/Helmet';
import Form from 'reactor/form/components/Form';
import Layout from 'reactor/layout/components/Layout';
import { TextCenter } from 'reactor/components/Aligned';
import FormError from 'reactor/form/components/FormError';
import { login } from 'modules/admin/users/services/auth';
import EmailInput from 'reactor/form/components/EmailInput';
import SubmitButton from 'reactor/form/components/SubmitButton';
import PasswordInput from 'reactor/form/components/PasswordInput';
import ReactorComponent from 'reactor/components/ReactorComponent';

export default class Login extends ReactorComponent {
    /**
     * {@inheritdoc}
     */
    state = {};
    /**
     * Submit login form
     */
    login = async (e, form) => {
        this.set('error', null); // make sure to clear previous errors

        try {
            let { data } = await login(e.target);

            user.login(data.user);

            navigateTo('/users');
        } catch (error) {
            form.isSubmitting = false;
            let { errors, error: errorText } = error.response.data;

            if (errorText) {
                this.set('error', errorText);
            } else if (errors) {
                this.set('error', errors);
            }
        }
    };

    
    /**
     * {@inheritdoc}
     */
    render() {
        return (
            <Layout>
                <Helmet title="login" />
                <div id="login-page">
                    <h1>Login Page</h1>

                    <Form onSubmit={this.login}>
                        {form => {
                            return (
                                <>
                                    <FormError error={this.get('error')} />

                                    <EmailInput
                                        autoFocus
                                        className="form-control"
                                        name="email"
                                        required
                                    />

                                    <PasswordInput
                                        required
                                        minLength={8}
                                        name="password"
                                        className="form-control"
                                    />

                                    {/* <MultilineTextFields /> */}

                                    <TextCenter>
                                        <SubmitButton fullWidth={form.isSubmitting !== true} theme="dark">Login</SubmitButton>
                                    </TextCenter>
                                </>
                            )
                        }}
                    </Form>
                </div>
            </Layout>
        );
    }
}