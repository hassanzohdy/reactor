import React from 'react';
import { ButtonGroup } from '@material-ui/core';

export default function ButtonsFormatter({ record, setRecord, column, columnIndex, rowIndex }) {
    const { buttons } = column;

    return (
        <ButtonGroup>
            {buttons.map((Button, buttonIndex) => (
                <Button key={buttonIndex} record={record} setRecord={setRecord} rowIndex={rowIndex} columnIndex={columnIndex} column={column} />
            ))}
        </ButtonGroup>
    )
}