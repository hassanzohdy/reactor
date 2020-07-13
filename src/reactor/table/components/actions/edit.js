import React from 'react';
import { trans } from 'reactor/localization';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from 'reactor/components/tooltip';
import IconButton from '@material-ui/core/IconButton';
import TableForm from '../table-form';
import useTable from '../../hooks/use-table';

export default function TableEditButton({ record, rowIndex, }) {
    const [formIsOpened, openForm] = React.useState(false);
    const { service, options, updateRecords } = useTable();

    const onSubmit = record => {
        updateRecords(tableRecords => {
            tableRecords[rowIndex] = record;

            return [...tableRecords];
        });

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
