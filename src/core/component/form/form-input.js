import React from 'react';
import events from '@flk/events';
import Is from '@flk/supportive-is';
import ReactorComponent from 'core/component/reactor.component';

export default class FormInput extends ReactorComponent {
    state = {
        validationError: null
    };

    messages = {
        required: 'This field is required',
        email: 'Invalid Email Address',
    };

    constructor(props) {
        super(props);

        this.inputReference = React.createRef(); // createRef

        events.on('form.validation', form => {
            // validate the input
            this.validate({
                target: this.input,
            });

            if (this.get('validationError')) {
                form.isValidForm = false;
            }
        });
    }

    /**
     * {@inheritdoc}
     */
    ready() {
        this.input = this.inputReference.current;        
    }

    /**
     * Validate the input
     */
    validate(e) {
        let input = e.target,
            value = input.value;

        // reset validation input error
        let inputValidation = null;

        // validate required input
        // check if the input is not empty
        if (this.props.required === true && Is.empty(value)) {
            // he didn't access this body
            inputValidation = this.messages.required;
        }

        // check if the input value a valid email address
        // validate the email when?
        // when the validation.email is null 
        if (this.props.type === 'email' && inputValidation === null && !Is.empty(value) && !Is.email(value)) {
            inputValidation = this.messages.email;
        }

        this.set('validationError', inputValidation);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        return (
            <div className="form-group">
                <input
                    ref={this.inputReference}
                    type={this.props.type}
                    name={this.props.name}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    onInput={this.validate.bind(this)}
                />
                {
                    this.get('validationError') !== null &&
                    <label className="error">{this.get('validationError')}</label>
                }
            </div>
        );
    }
}