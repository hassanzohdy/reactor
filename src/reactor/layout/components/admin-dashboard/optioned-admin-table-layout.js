import React from 'react';
import { translatedTitle } from 'reactor/metadata';
import AdminTableLayout from 'reactor/layout/components/admin-dashboard/admin-table-layout';

export default function optionedAdminTable(options) {
    return function (props) {
        translatedTitle(options.title || options.table.heading);

        return <AdminTableLayout {...props} options={options} service={options.service}></AdminTableLayout>;
    }
}