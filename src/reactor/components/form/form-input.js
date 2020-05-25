import React from 'react';
import Is from '@flk/supportive-is';
import PropTypes from 'prop-types';
import ReactorComponent from 'reactor/components/reactor.component';
import TextField from '@material-ui/core/TextField';
import FormContext from './form-context';

export default class FormInput extends ReactorComponent {
    state = {
        validationError: null
    };

    messages = {
        email: 'Invalid Email Address',
        required: 'This field is required',
    };

    inputReference = React.createRef(); // createRef

    /**
     * {@inheritdoc}
     */
    ready() {
        this.input = this.inputReference.current;
    }

    validate() {
        this.validateInput({
            target: this.input,
        });
    }

    /**
     * Validate the input
     */
    validateInput(e) {
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

        // tell the form if the input is clean or not
        if (inputValidation) {
            this.form.dirtyInput(this);
        } else {
            this.form.cleanInput(this);
        }

        this.set('validationError', inputValidation);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        const errorMessage = this.get('validationError');
        let label = this.props.label || this.props.placeholder;
        return (
            <FormContext.Consumer>
                {context => {
                    if (!this.form) {
                        const { form } = context;

                        form.setInput(this);

                        this.form = form;
                    }

                    return (
                        <TextField
                            error={Boolean(errorMessage)}
                            label={label}
                            margin  ="normal"
                            inputRef={this.inputReference}
                            onInput={this.validateInput.bind(this)}
                            helperText={errorMessage}
                            fullWidth
                            {...this.props}
                        />
                    )
                }}
            </FormContext.Consumer>
        );
    }
}

FormInput.propTypes = {
    required: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
    type: 'text',
    color: 'primary',
    variant: "outlined",
};