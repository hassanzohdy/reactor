import React from 'react';
import Table from './table';
import PropTypes from 'prop-types';

export default function LazyTable(props) {
    let { request, options, mapResponse, ...otherProps } = props;

    let [isLoading, updateLoader] = React.useState(true);
    let [tableInfo, setTableInfo] = React.useState({});
    let [tableBody, updateTableBody] = React.useState({});

    // first step, set a loading state
    // second step, get data from service
    // third step, stop the loader and display the records

    // only once the component is rendered 
    React.useEffect(() => {
        request(tableInfo).then(response => {
            const { records, pagination } = mapResponse(response);

            updateTableBody({
                records,
                pagination,
            });

            updateLoader(false);
        });
    }, [request, mapResponse, tableInfo]);

    const updateTableInfo = newTableInfo => {
        setTableInfo(newTableInfo);
        updateLoader(true);
    }

    return (
        <Table
            options={options}
            isLoading={isLoading}
            records={tableBody.records}
            pagination={tableBody.pagination}
            onChange={updateTableInfo}
            {...otherProps}
        />
    );
}

LazyTable.propTypes = {
    options: PropTypes.any.isRequired,
    request: PropTypes.func.isRequired,
    mapResponse: PropTypes.func.isRequired,
};