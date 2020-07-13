import React from 'react';
import TableProvider from '../providers/table-provider';

export default function useTable() {
    return React.useContext(TableProvider);
}