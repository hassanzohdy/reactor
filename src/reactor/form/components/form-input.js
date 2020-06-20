import React from 'react';
import PropTypes from 'prop-types';
import Is from '@flk/supportive-is';
import rulesList from '../utils/rules-list';
import FormContext from '../utils/form-context';
import TextField from '@material-ui/core/TextField';
import ReactorComponent from 'reactor/components/reactor.component';

export default class FormInput extends ReactorComponent {
    state = {
        validationError: null
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

        this.hasError = false; // reset the hasError flag

        // get rules list from props
        const { rules } = this.props;

        for (let inputRule of rules) {
            // if the inputRule is function
            // then wrap it inside an object with `evaluate` key
            if (Is.function(inputRule)) {
                inputRule = {
                    evaluate: inputRule,
                }
            }

            // Get rule options list
            // requiresValue: requires value before evaluating the rule
            // type: requires a certain type before evaluating the rule
            // evaluate: the  rule evaluation function 
            const { requiresValue = true, type, rule, evaluate } = inputRule;

            //  if the requires value is set to true and there is no value
            // then skip the rule
            if (requiresValue && !value) continue;

            // If the rule requires certain input type and 
            // the input type is not the same, then skip the rule
            if (type && type !== input.type) continue;

            // if the rule is not listed in the input props, then skip the rule evaluation
            if (rule && !this.props[rule]) continue;

            // Finally, evaluate the input against the rule

            const { hasError, errorMessage } = evaluate(value, this, e);

            if (hasError) {
                inputValidation = errorMessage;
                this.hasError = true;
                break; // stop the rest of the rules evaluation
            }
        }

        // // validate required input
        // // check if the input is not empty
        // if (this.props.required === true && Is.empty(value)) {
        //     // he didn't access this body
        //     inputValidation = this.messages.required;
        // }

        // // check if the input value a valid email address
        // // validate the email when?
        // // when the validation.email is null 
        // if (this.props.type === 'email' && inputValidation === null && !Is.empty(value) && !Is.email(value)) {
        //     inputValidation = this.messages.email;
        // }

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
                            margin="normal"
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
    rules: rulesList,
};