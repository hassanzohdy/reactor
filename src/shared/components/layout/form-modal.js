import React from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import FormModalTitle from './form-modal-title';
import Form from 'reactor/components/form/form';

export default function FormModal(props) {
    const { title, onSubmit, ...otherDialogProps } = props;

    let formHandler;

    const handleOnConfirm = () => {
        formHandler.submit();
    };

    const formTitle = <FormModalTitle title={title} onSubmit={handleOnConfirm} onClose={props.onClose} />;

    return (
        <Modal
            {...otherDialogProps}
            title={formTitle}
        >
            <Form
                onSubmit={onSubmit}
                ref={form => formHandler = form}
            >
                {props.children}
            </Form>
        </Modal>
    );
}

FormModal.propTypes = {
    esc: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,// same attribute name in the modal
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    backdrop: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fullScreen: PropTypes.bool.isRequired, // same attribute name in the modal
};

FormModal.defaultProps = {
    size: 'sm',
    esc: false, // if set to false, then the esc button will not close the modal    
    backdrop: false, // if set to false, then the backdrop click will not close the modal
    fullScreen: false,
};