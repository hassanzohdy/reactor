import React from 'react';
import Is from '@flk/supportive-is';
import TableForm from '../TableForm';
import useTable from '../../hooks/use-table';
import { trans } from 'reactor/localization';
import Tooltip from 'reactor/components/Tooltip';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

export default function TableAddButton() {
    const [formIsOpened, openForm] = React.useState(false);

    const { service, options, updateRecords } = useTable();

    const {defaultData = {}} = options.formOptions;

    const onSubmit = record => {
        updateRecords(tableRecords => {
            tableRecords.unshift(record);

            return [...tableRecords];
        });

        openForm(false);
    };

    if (Is.empty(options.formOptions)) return '';

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
                record={defaultData}
                formOptions={options.formOptions}
            />
        </>
    )
}
