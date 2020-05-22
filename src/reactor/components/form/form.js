import React  from 'react';
import events from '@flk/events';
import ReactorComponent from 'reactor/components/reactor.component';

export default class Form extends ReactorComponent {
    isValidForm = true;
    formElement = null;
    /**
     * Submit form
     */
    triggerSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isValidForm = true; // make sure its is reset

        // validate all inputs
        events.trigger('form.validation', this);

        // check if the form is valid
        // if not, then do not submit
        if (this.isValidForm === false) return;

        if (this.props.onSubmit) {
            let formElement = e.target;
            this.props.onSubmit(e, formElement);
        }
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
            <form ref={form => this.formElement = form} noValidate={true} onSubmit={this.triggerSubmit.bind(this)}>
                {this.props.children}
            </form>
        );
    }
}