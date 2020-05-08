import './login.scss';
import React from 'react';
import Form from 'core/component/form/form';
import { login } from 'modules/users/services/auth';
import { title, description } from 'core/metadata';
import FormInput from 'core/component/form/form-input';
import ReactorComponent from 'core/component/reactor.component';

export default class Login extends ReactorComponent {
    state = {
    };

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
            console.log(data);

        } catch (error) {
            let errors = error.response.data.errors;

            this.set('errors', errors);
        }
    };

    displayErrors() {
        this.errors = this.get('errors');
        return Object.keys(this.errors).map(key => {
            return (
                <div key={key}>{this.errors[key]}</div>
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