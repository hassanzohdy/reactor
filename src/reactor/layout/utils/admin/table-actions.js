import ButtonsFormatter from 'reactor/table/components/Formatters/ButtonsFormatter';
import TableEditButton from 'reactor/table/components/Actions/TableEditButton';
import TableDeleteButton from 'reactor/table/components/Actions/TableDeleteButton';

const tableActions = {
    heading: 'actions',
    formatter: ButtonsFormatter,
    buttons: [TableEditButton, TableDeleteButton]
};

export default tableActions;