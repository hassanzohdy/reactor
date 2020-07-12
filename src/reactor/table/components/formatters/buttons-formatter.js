import React from 'react';
import { ButtonGroup } from '@material-ui/core';

export default function ButtonsFormatter({ record, setRecord, column, columnIndex, rowIndex, updateRecords, service, options }) {
    const { buttons } = column;

    return (
        <ButtonGroup>
            {buttons.map((Button, buttonIndex) => (
                <Button key={buttonIndex} record={record} service={service} updateRecords={updateRecords} options={options} setRecord={setRecord} rowIndex={rowIndex} columnIndex={columnIndex} column={column} />
            ))}
        </ButtonGroup>
    )
}