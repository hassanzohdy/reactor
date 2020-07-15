import React from 'react';
import Table from './table';
import PropTypes from 'prop-types';

export default function LazyTable(props) {
    let { request, options, mapResponse, ...otherProps } = props;

    let [isLoading, updateLoader] = React.useState(true);
    let [tableInfo, updateTableInfo] = React.useState({});

    // first step, set a loading state
    // second step, get data from service
    // third step, stop the loader and display the records

    // only once the component is rendered 
    React.useEffect(() => {
        request(tableInfo).then(response => {
            const { records, pagination } = mapResponse(response);

            updateTableInfo({
                records,
                pagination,
            });

            updateLoader(false);
        });
    }, [request, mapResponse]);

    const updateTable = tableInfo => {
        updateLoader(true);
    };

    return (
        <Table
            options={options}
            isLoading={isLoading}
            records={tableInfo.records}
            pagination={tableInfo.pagination}
            onChange={updateTable}
            {...otherProps}
        />
    );
}

LazyTable.propTypes = {
    options: PropTypes.any.isRequired,
    request: PropTypes.func.isRequired,
    mapResponse: PropTypes.func.isRequired,
};