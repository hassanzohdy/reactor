import React from 'react';
import FormModal from 'reactor/form/components/form-modal';
import { trans } from 'reactor/localization';

export default function TableForm({ action, formOptions, onClose, itemType, recordIndex, open, onSubmit, service, record }) {
    if (!open) return '';

    const submitForm = async (e) => {
        const form = e.target;
        let savedRecord;
        if (action === 'edit') {
            let { data } = await service.update(record.id, form);
            let { record: responseRecord } = data;

            savedRecord = responseRecord;
        } else {
            // action here is adding
            let { data } = await service.create(form);

            let { record: responseRecord } = data;

            savedRecord = responseRecord;
        }

        onSubmit && onSubmit(action, savedRecord);
    };

    return (
        <FormModal
            open={open}
            onSubmit={submitForm}
            title={trans(itemType, trans(formOptions.singleName))}
            onClose={onClose}
        >
            <formOptions.lazyForm index={recordIndex} record={record} />
        </FormModal>
    );
}