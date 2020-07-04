import React from 'react';
import { trans } from 'reactor/localization';
import ButtonsFormatter from 'reactor/table/components/formatters/buttons-formatter';
import { TableDeleteButton, TableEditButton } from 'reactor/table/components/table-actions';

const tableActions = {
    heading: trans('actions'),
    formatter: ButtonsFormatter,
    buttons: [TableEditButton, TableDeleteButton]
};

export default tableActions;