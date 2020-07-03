import React from 'react';
import { Arr } from 'reinforcements';
import FormContext from '../utils/form-context';
import ReactorComponent from 'reactor/components/reactor.component';

export default class Form extends ReactorComponent {
    inputs = [];
    isValidForm = true;
    formElement = null;
    dirtyInputs = new Arr([]);

    setInput(input) {
        if (input.id && this.inputs.find(inp => inp.id === input.id)) {
            let inputIndex = this.inputs.findIndex(inp => inp.id === input.id);

            this.inputs[inputIndex] = input;

            return;
        }

        if (this.inputs.includes(input)) return;

        this.inputs.push(input);
    }

    /**
     * Submit form
     */
    triggerSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isValidForm = true; // make sure its is reset
        
        for (let input of this.inputs) {
            input.validate(e);

            if (input.hasError) {
                this.isValidForm = false;
            }
        }

        // check if the form is valid
        // if not, then do not submit
        if (this.isValidForm === false) return;

        if (this.props.onSubmit) {
            this.isSubmitting = true;
            this.props.onSubmit(e, this);
        }
    }

    cleanInput(input) {
        this.dirtyInputs.remove(input);

        this.isValidForm = this.dirtyInputs.isEmpty();

        setTimeout(() => {
            this.forceUpdate();
        }, 0);
    }

    dirtyInput(input) {
        this.dirtyInputs.pushOnce(input);
        
        this.isValidForm = false;

        setTimeout(() => {
            this.forceUpdate();
        }, 0);
    }

    /**
     * Trigger form submission programmatically
     * 
     * @returns {void} 
     */
    submit() {
        this.formElement.requestSubmit();
    }

    /**
     * {@inheritdoc}
     */
    render() {
        // noValidate disables the browser default validation
        return (
            <FormContext.Provider value={{ form: this }}>
                <form ref={form => this.formElement = form} noValidate={true} onSubmit={this.triggerSubmit.bind(this)}>
                    {this.children()}
                </form>
            </FormContext.Provider>
        );
    }
}