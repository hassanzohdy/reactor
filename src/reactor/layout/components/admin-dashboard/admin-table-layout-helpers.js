import React from 'react';
import Table from 'reactor/table/components/table';
    
export async function loadData(service, updateLoader, updateResponse) {
    let { data } = await service.list();

    updateResponse(data); // entire response body
    updateLoader(false);
}

export function renderTable(tableOptions, response, service) {
    return <Table
        options={tableOptions}
        records={response.records}
        service={service}
        pagination={response.paginationInfo} />
}
