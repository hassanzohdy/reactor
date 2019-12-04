import React from "react";
import Is from "@flk/supportive-is";
import { ReactorComponent } from "../component";

import "./style.scss";

export default class Input extends ReactorComponent {
  state = {
    validation: {
      errorMessage: null
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
   */
  isNumericType = () => {
    return this.inputTypes.numericTypes.includes(this.props.type);
  };

  /**
   * Check if the type provided is a textful number
   * it makes the input component accept minLength & maxLength attributes
   */
  isTextFulType = () => {
    return this.inputTypes.textfulTypes.includes(this.props.type);
  };

  // check if the field is required
  isRequired = () => {
    return this.props.required;
  };

  // make the error message's position according to the errorPosition prop provided
  errorPosition = () => {
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

  errorMessageClone = null;

  validateEmpty = field => {
    // validate required input
    // check if the input is not empty
    if (this.isRequired() && Is.empty(field.value)) {
      // he didn't access this body
      this.errorMessageClone = this.customMessage(
        "empty",
        "This field is Required!"
      );
    }
  };

  validateEmail = field => {
    // check if the input value a valid email address
    // validate the email when the validation.errorMessage is null
    if (
      this.props.type === "email" &&
      this.get("validation.errorMessage") === null &&
      !Is.empty(field.value) &&
      !Is.email(field.value)
    ) {
      this.errorMessageClone = this.customMessage(
        "email",
        "Invalid Email Address"
      );
    }
  };

  matchFieldLength = field => {
    let { length } = this.props;

    // check if the value equals the length specified
    if (!Is.empty(field.value) && length && field.value.length !== length) {
      this.errorMessageClone = this.customMessage(
        "lengthMessage",
        `This field should be ${length} in length`
      );
    }
  };

  matchMinValue = field => {
    let { min } = this.props;
    if (this.isNumericType() && min && field.value < min) {
      this.errorMessageClone = this.customMessage(
        "minValueMessage",
        `The minimum value accepted is ${min}`
      );
    }
  };

  matchMaxValue = field => {
    let { max } = this.props;
    if (this.isNumericType() && max && field.value > max) {
      this.errorMessageClone = this.customMessage(
        "maxValueMessage",
        `The maximum value accepted is ${max}`
      );
    }
  };

  matchMinLength = field => {
    let { minLength } = this.props;
    if (this.isTextFulType() && minLength && field.value.length < minLength) {
      this.errorMessageClone = this.customMessage(
        "minLengthMessage",
        `The field should be at minimum ${minLength} characters `
      );
    }
  };

  matchMaxLength = field => {
    let { maxLength } = this.props;
    console.log(field.value.length, maxLength, this.isTextFulType());
    if (this.isTextFulType() && !!maxLength && field.value.length > maxLength) {
      this.errorMessageClone = this.customMessage(
        "maxLengthMessage",
        `The field should be maximum ${maxLength} characters `
      );
    }
  };

  // make the error message's position according to the errorPosition prop provided
  errorPosition = () => {
    return this.props.errorPosition === "top" ? "order-top" : "order-bottom";
  };

  // validate the field according to its type
  validateField = e => {
    let input = e.target,
      validationCollectedRules = [
        this.validateEmpty,
        this.validateEmail,
        this.matchFieldLength,
        this.matchMinValue,
        this.matchMinValue,
        this.matchMaxLength,
        this.matchMinLength
      ];

    this.errorMessageClone = null;

    // validate according to the rules provided
    for (let rule of validationCollectedRules) {
      rule(input);
      if (this.errorMessageClone) break;
      else continue;
    }

    this.set(`validation.errorMessage`, this.errorMessageClone);

    if (this.props.onInput) {
      this.props.onInput(e);
    }
  };

  propsPassed = () => {
    let obj = {};

    for (let prop in this.props) {
      if (typeof this.props[prop] === "function") {
        obj[prop] = this.props[prop];
      }
    }

    return obj;
  };

  render() {
    // get all the props supplied
    let { type, required, placeholder } = this.props;

    return (
      <section className="input-wrapper">
        {this.get(`validation.errorMessage`) !== null && (
          <label className={`error ${this.errorPosition()}`}>
            {this.get(`validation.errorMessage`)}
          </label>
        )}

        <input
          type={type}
          ref="inputField"
          className="form-control"
          {...this.propsPassed()}
          required={required}
          onInput={this.validateField}
          placeholder={placeholder}
          autoComplete="new-password"
        />
      </section>
    );
  }
}
