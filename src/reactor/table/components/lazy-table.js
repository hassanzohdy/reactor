import PropTypes from 'prop-types';
import Table from './table';
import React from 'react';
import ProgressBar from 'reactor/components/progress-bar';

export default function LazyTable(props) {
    let { request, options, mapResponse, ...otherProps } = props;

    let [isLoading, updateLoader] = React.useState(true);
    let [tableInfo, updateTableInfo] = React.useState({});

    // first step, set a loading state
    // second step, get data from service
    // third step, stop the loader and display the records

    // only once the component is rendered 
    React.useEffect(() => {
        request().then(response => {
            const { records, pagination } = mapResponse(response);

            updateTableInfo({
                records,
                pagination,
            });

            updateLoader(false);
        });
    }, [isLoading, request]);

    // Display In Progress Spinner
    // load the users data from API
    // 
    if (isLoading) {
        return <ProgressBar />
    }

    return (
        <Table
            options={options}
            records={tableInfo.records}
            pagination={tableInfo.pagination}
            {...otherProps}
        />
    );
}

LazyTable.propTypes = {
    options: PropTypes.any.isRequired,
    request: PropTypes.func.isRequired,
    mapResponse: PropTypes.func.isRequired,
};