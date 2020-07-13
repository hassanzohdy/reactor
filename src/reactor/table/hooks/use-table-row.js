import React from 'react';
import TableRowProvider from '../providers/table-row-provider';

export default function useTableRow() {
    return React.useContext(TableRowProvider);
}