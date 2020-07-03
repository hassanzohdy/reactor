import React from 'react';
import { Obj } from 'reinforcements';
import Link from 'reactor/components/link';

export default function LinkFormatter({record, column}) {
    let text = Obj.get(record, column.key);
    let href = Obj.get(column, 'href');

    if (! href) return '';
    
    return <Link to={href(record, column)} children={text} />;
}