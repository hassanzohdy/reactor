import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import LazyTable from 'reactor/table/components/LazyTable';

export default function crudPage(options) {
    return function (props) {
        translatedTitle(options.title || options.table.heading);

        const sendRequest = params => {
            return options.service.list(params);
        };

        const mapResponse = response => {
            const { records, paginationInfo } = response.data;

            return {
                records,
                pagination: paginationInfo,
            };
        };

        return <LazyTable {...props} options={options} request={sendRequest} mapResponse={mapResponse} />
    }
}