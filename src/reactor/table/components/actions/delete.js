import React from 'react';
import { trans } from 'reactor/localization';
import Confirm from 'reactor/components/confirm';
import Tooltip from 'reactor/components/tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteSweep';

export default function TableDeleteButton({ record, rowIndex, setRecord, options, service, recordIndex, updateRecords }) {
    const [confirming, setConfirm] = React.useState(false);

    const removeRecord = e => {
        // update table records
        updateRecords(records => {
            records.splice(rowIndex, 1);

            return [...records];
        });

        // Remove from API
        service.delete(record.id);
    };

    return (
        <>
            <IconButton onClick={e => setConfirm(true)}>
                <Tooltip title={trans('remove')}>
                    <DeleteIcon />
                </Tooltip>
            </IconButton>

            <Confirm open={confirming}
                onClose={e => setConfirm(false)}
                onConfirm={removeRecord}
                message={trans('removeText')} />
        </>
    )
}