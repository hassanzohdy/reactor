import './login.scss';
import Is from '@flk/supportive-is';
import React from 'react';
import { ReactorPageComponent } from '../../../core/component';

export default class Login extends ReactorPageComponent {
    state = {
        validation: {
            email: null, // email input
            password: null, // password input
        }
    };

    constructor() {
        super();    

        this.setMeta('title', 'Login Page')
            .setMeta('description', 'Welcome to our login page.');
    }
    
    login = e => {
        e.preventDefault(); // disable default form submission  

        console.log('Send to some api!');
    };

    validateEmailInput = e => {
        let input = e.target,
            value = input.value;

        // reset validation email input error
        let emailValidation = null;

        // validate required input
        // check if the input is not empty
        if (input.required === true && Is.empty(value)) {
            // he didn't access this body
            emailValidation = 'Email Address Is Required!';
        } 

        // check if the input value a valid email address
        // validate the email when?
        // when the validation.email is null 
        if (emailValidation === null && ! Is.empty(value) && !Is.email(value)) {
            emailValidation = 'Invalid Email Address';            
        }

        this.set('validation.email', emailValidation);
    };

    render() {
        return (
            <div id="login-page">
                <h1>Login Page</h1>

                <form onSubmit={this.login}>
                    <div className="form-group">
                        <input type="email" className="form-control" required={true} onInput={this.validateEmailInput} placeholder="Email Address" />
                        {this.get('validation.email') !== null &&
                            <label className="error">{this.get('validation.email')}</label>
                        }

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter Your Password" />
                    </div>

                    <div id="button-wrapper">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}