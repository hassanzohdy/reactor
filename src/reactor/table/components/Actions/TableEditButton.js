import React from 'react';
import TableForm from '../TableForm';
import useTable from '../../hooks/use-table';
import { trans } from 'reactor/localization';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from 'reactor/components/Tooltip';
import useTableRow from '../../hooks/use-table-row';
import IconButton from '@material-ui/core/IconButton';

export default function TableEditButton() {
    const [formIsOpened, openForm] = React.useState(false);
    const { service, options} = useTable();

    const { record, updateRecord} = useTableRow();

    const onSubmit = record => {
        updateRecord(record);

        openForm(false);
    };

    return (
        <>
            <IconButton onClick={e => openForm(true)}>
                <Tooltip title={trans('edit')}>
                    <EditIcon />
                </Tooltip>
            </IconButton>

            <TableForm
                onSubmit={onSubmit}
                open={formIsOpened}
                onClose={e => openForm(false)}
                service={service}
                action="edit"
                record={record}
                formOptions={options.formOptions}
            />
        </>
    )
}
