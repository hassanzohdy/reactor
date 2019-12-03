import React from 'react';
import Is from '@flk/supportive-is';
import { ReactorComponent } from '../component';

import "./style.scss"

export default class Input extends ReactorComponent {

    state = {
        validation: {
            [this.props.type]: null
        }
    }

    // numeric input types so we can pass max & min attribute
    numericInputTypes = ["number", "date"];

    // textful input types so we can pass max & min attribute
    textfulInputTypes = ["text", "email", "password", "tel"];

    isNumericType = (typeProvided) => {
        return this.numericInputTypes.includes(typeProvided);
    }

    isTextFulType = (typeProvided) => {
        return this.textfulInputTypes.includes(typeProvided);
    }

    isRequired = () => {
        return this.props.required;
    }

    validateField = e => {
        let input = e.target,
            value = input.value,
            { length, type, validationMessages } = this.props;

        // reset validation email input error
        let fieldValidation = null;

        // validate required input
        // check if the input is not empty
        if (this.isRequired() && Is.empty(value)) {
            // he didn't access this body
            fieldValidation = validationMessages && (validationMessages.empty || 'Email Address Is Required!');
        }

        // check if the input value a valid email address
        // validate the email when?
        // when the validation.email is null 
        if (type === "email" && fieldValidation === null && !Is.empty(value) && !Is.email(value)) {
            fieldValidation = validationMessages && (validationMessages.email || 'Invalid Email Address');
        }

        // check if the value equals the length specified
        if (length && value.length !== length) {
            fieldValidation = validationMessages && (validationMessages.lengthMessage || `This field should be ${length} in length`);
        }

        this.set(`validation.${type}`, fieldValidation);
    };

    render() {

        // console.log(this.props.validationMessages)

        // get all the props supplied
        let { type, required, min, max, minLength, maxLength, placeholder, errorPosition } = this.props;

        return (
            <section className="input-wrapper">

                {this.get(`validation.${type}`) !== null &&
                    <label
                        className={`error ${errorPosition === "top" ? "order-top" : "order-bottom"}`}
                    >
                        {this.get(`validation.${type}`)}
                    </label>
                }

                <input
                    type={type}
                    className="form-control"
                    required={required}
                    onInput={this.validateField}
                    placeholder={placeholder}
                    min={this.isNumericType(type) ? min : null}
                    max={this.isNumericType(type) ? max : null}
                    maxLength={this.isTextFulType(type) ? maxLength : null}
                    minLength={this.isTextFulType(type) ? minLength : null}
                />

            </section>
        )
    }
}
