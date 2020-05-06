import './login.scss';
import React from 'react';
import Form from 'core/component/form/form';
import { title, description } from 'core/metadata';
import ReactorComponent from 'core/component/reactor.component';
import FormInput from 'core/component/form/form-input';
import endpoint from 'core/endpoint';

export default class Login extends ReactorComponent {
    state = {
        validation: {
            email: null, // email input
            password: null, // password input
        }
    };

    init() {
        title('My Login Page');
        description('Some login description');
    }

    login = e => {
        console.log('Send to some api!')

        endpoint.get('/test');
    };

    render() {
        return (
            <div id="login-page">
                <h1>Login Page</h1>

                <Form onSubmit={this.login}>
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