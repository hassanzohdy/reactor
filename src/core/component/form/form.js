import React  from 'react';
import events from '@flk/events';
import ReactorComponent from 'core/component/reactor.component';

export default class Form extends ReactorComponent {
    isValidForm = true;
    /**
     * Submit form
     */
    submit(e) {
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
     * {@inheritdoc}
     */
    render() {
        // noValidate disables the browser default validation
        return (
            <form noValidate={true} onSubmit={this.submit.bind(this)}>
                {this.props.children}
            </form>
        );
    }
}