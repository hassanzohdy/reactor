import React from 'react';
import { Obj } from 'reinforcements';
import Link from 'reactor/components/Link';

export default function LinkFormatter({record, column, children}) {
    let value = children || column.value;
    let href = Obj.get(column, 'href');

    if (! href) return '';
    
    return <Link to={href(record, column)} children={value} />;
}