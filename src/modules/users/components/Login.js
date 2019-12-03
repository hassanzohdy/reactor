import './login.scss';
import React from 'react';
import { ReactorPageComponent } from '../../../core/component';
import Input from '../../../core/component/Input';

export default class Login extends ReactorPageComponent {

    constructor() {
        super();

        this.setMeta('title', 'Login Page')
            .setMeta('description', 'Welcome to our login page.');
    }

    login = e => {
        e.preventDefault(); // disable default form submission  

        console.log('Send to some api!');
    };

    render() {
        return (
            <div id="login-page">
                <h1>Login Page</h1>

                <form onSubmit={this.login}>
                    {/* it will be validated by default and has the form-control class and wrapped by form-group */}
                    <Input
                        type="email"
                        required={true}
                        placeholder="Email Address"
                        minLength={5}
                        maxLength={30}
                        length={23}
                        max={2}
                        min={1}
                    />

                    <Input 
                        type="password"
                        required
                        placeholder="Password"
                        length={4}
                    />


                    <div id="button-wrapper">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}