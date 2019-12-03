import React from "react";
import Is from "@flk/supportive-is";
import { ReactorComponent } from "../component";

import "./style.scss";

export default class Input extends ReactorComponent {
    state = {
        validation: {
            [this.props.type]: null,
            fieldValidation: null
        }
    };

    // get all the input types to add attributes dynamically to the input
    inputTypes = {
        numericTypes: ["number", "date"],
        textfulTypes: ["text", "email", "password", "tel"]
    };

    /**
     * Check if the type provided is a numeric number
     * it makes the input component accept min & max attributes
     *
     * @param {string} typeProvided
     */
    isNumericType = typeProvided => {
        return this.inputTypes.numericTypes.includes(typeProvided);
    };

    /**
     * Check if the type provided is a textful number
     * it makes the input component accept minLength & maxLength attributes
     *
     * @param {string} typeProvided
     */
    isTextFulType = typeProvided => {
        return this.inputTypes.textfulTypes.includes(typeProvided);
    };

    // check if the field is required
    isRequired = () => {
        return this.props.required;
    };

    // make the error message's position according to the errorPosition prop provided
    topPosition = () => {
        return this.props.errorPosition === "top" ? "order-top" : "order-bottom";
    };

    /**
     * View the custom message provided by the user or view a custom message
     *
     * @param {string} role
     * @param {string} defaultMessage
     */
    customMessage = (role, defaultMessage) => {
        let { validationMessages } = this.props;
        return (validationMessages && validationMessages[role]) || defaultMessage;
    };

    // validate the field according to its type
    validateField = e => {
        let input = e.target,
            value = input.value,
            { length, type } = this.props;

        // reset validation email input error
        this.set("validation.fieldValidation", null);

        // validate required input
        // check if the input is not empty
        if (this.isRequired() && Is.empty(value)) {
            // he didn't access this body
            this.set(
                "validation.fieldValidation",
                this.customMessage("empty", "This field Is Required!")
            );
        }

        // check if the input value a valid email address
        // validate the email when?
        // when the validation.email is null
        if (
            type === "email" &&
            this.get("validation.fieldValidation") === null &&
            !Is.empty(value) &&
            !Is.email(value)
        ) {
            this.set(
                "validation.fieldValidation",
                this.customMessage("email", "Invalid Email Address")
            );
        }

        // check if the value equals the length specified
        if (!Is.empty(value) && length && value.length !== length) {
            this.set(
                "validation.fieldValidation",
                this.customMessage(
                    "lengthMessage",
                    `This field should be ${length} in length`
                )
            );
        }

        this.set(`validation.${type}`, this.get("validation.fieldValidation"));
    };

    render() {
        // get all the props supplied
        let {
            type,
            required,
            min,
            max,
            minLength,
            maxLength,
            placeholder
        } = this.props;

        return (
            <section className="input-wrapper">
                {this.get(`validation.${type}`) !== null && (
                    <label className={`error ${this.topPosition()}`}>
                        {this.get(`validation.${type}`)}
                    </label>
                )}

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
        );
    }
}
