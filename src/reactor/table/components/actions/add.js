import React from 'react';
import TableForm from '../table-form';
import { trans } from 'reactor/localization';
import Tooltip from 'reactor/components/tooltip';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

export default function TableAddButton({ service, options, updateRecords }) {
    const [formIsOpened, openForm] = React.useState(false);

    const onSubmit = record => {
        updateRecords(tableRecords => {
            tableRecords.unshift(record);

            return [...tableRecords];
        });

        openForm(false);
    };

    return (
        <>
            <IconButton onClick={e => openForm(true)}>
                <Tooltip title={trans('add')}>
                    <AddIcon fontSize="large" color="primary" />
                </Tooltip>
            </IconButton>

            <TableForm
                onSubmit={onSubmit}
                open={formIsOpened}
                onClose={e => openForm(false)}
                service={service}
                action="add"
                formOptions={options.formOptions}
            />
        </>
    )
}
