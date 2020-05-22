import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from './dashboard-layout';
import Table from 'shared/components/table/table';
import ProgressBar from 'reactor/components/progress-bar';

function renderTable(tableOptions, records, paginationInfo) {
    return <Table
        options={tableOptions}
        records={records}
        pagination={paginationInfo} />
}

export default function AdminTableLayout(props) {
    let { service, options } = props;

    // Display In Progress Spinner
    // load the users data from API
    // 
    let displayedContent = this.get('isLoading') ? <ProgressBar /> : renderTable();

    return (
        <DashboardLayout>
            {/* {displayedContent} */}
            <h1>Welcome</h1>
        </DashboardLayout>
    );
}

AdminTableLayout.propTypes = {
    options: PropTypes.any.isRequired,
    service: PropTypes.object.isRequired,
};