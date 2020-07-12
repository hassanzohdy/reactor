import { trans } from 'reactor/localization';
import ButtonsFormatter from 'reactor/table/components/formatters/buttons-formatter';
import TableEditButton from 'reactor/table/components/actions/edit';
import TableDeleteButton from 'reactor/table/components/actions/delete';

const tableActions = {
    heading: trans('actions'),
    formatter: ButtonsFormatter,
    buttons: [TableEditButton, TableDeleteButton]
};

export default tableActions;