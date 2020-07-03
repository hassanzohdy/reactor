import './login.scss';
import user from 'user';
import React from 'react';
import { navigateTo } from 'reactor/router';
import Form from 'reactor/form/components/form';
import { login } from 'modules/users/services/auth';
import Layout from 'shared/components/layout/layout';
import { title, description } from 'reactor/metadata';
import { TextCenter } from 'reactor/components/aligned';
import FormError from 'reactor/form/components/form-error';
import EmailInput from 'reactor/form/components/email-input';
import SubmitButton from 'reactor/form/components/submit-button';
import PasswordInput from 'reactor/form/components/password-type';
import ReactorComponent from 'reactor/components/reactor.component';
import SelectInput from 'reactor/form/components/select-input';

const genderTypes = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    }
];

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

                                    <SelectInput label="Gender" items={genderTypes} />

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