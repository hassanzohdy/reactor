import React from 'react';
import Table from './../table/table';

export async function loadData(service, updateLoader, updateResponse) {
    let { data } = await service.list();

    updateResponse(data); // entire response body
    updateLoader(false);
}

export function renderTable(tableOptions, response, ) {
    return <Table
        options={tableOptions}
        records={response.records}
        pagination={response.paginationInfo} />
}
