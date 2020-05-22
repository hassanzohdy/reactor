import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DashboardLayout from './dashboard-layout';
import Table from 'shared/components/table/table';
import ProgressBar from 'reactor/components/progress-bar';

async function loadData(service, updateLoader, updateResponse) {
    let { data } = await service.list();

    updateResponse(data); // entire response body
    updateLoader(false);
}

function renderTable(tableOptions, response, ) {
    return <Table
        options={tableOptions}
        records={response.records}
        pagination={response.paginationInfo} />
}

export default function AdminTableLayout(props) {
    let { service, options } = props;

    let [isLoading, updateLoader] = useState(true);
    let [response, updateResponse] = useState({});

    // first step, set a loading state
    // second step, get data from service
    // third step, stop the loader and display the records

    // only once the component is rendered 
    useEffect(() => {
        loadData(service, updateLoader, updateResponse);
    }, []);

    // Display In Progress Spinner
    // load the users data from API
    // 
    let displayedContent = isLoading ? <ProgressBar /> : renderTable(options, response);

    return (
        <DashboardLayout>
            {displayedContent}
        </DashboardLayout>
    );
}

AdminTableLayout.propTypes = {
    options: PropTypes.any.isRequired,
    service: PropTypes.object.isRequired,
};