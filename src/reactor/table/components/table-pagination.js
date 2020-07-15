import React from 'react';
import { TablePagination as MaterialTablePagination } from "@material-ui/core";
import useTable from '../hooks/use-table';

export default function TablePagination() {
    const { pagination, setItemsPerPage, setPageNumber } = useTable();

    const [currentPage, setCurrentPage] = React.useState(pagination.currentPage - 1);

    const handleChangePage = (e, pageNumber) => {
        setCurrentPage(pageNumber);

        // page has been updated and we need to send again another request to backend
        setPageNumber(pageNumber + 1);
    }

    const allowedItemsPerPage = [10, 15, 20, 25, 30, 50, 100];

    const handleChangeRowsPerPage = e => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0); // reset again current page 
    }

    return (
        <MaterialTablePagination
            rowsPerPageOptions={allowedItemsPerPage}
            component="div"
            count={pagination.totalRecords}
            rowsPerPage={pagination.itemsPerPage}
            page={currentPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )
}