import React from 'react';
import { Obj } from 'reinforcements';
import Link from 'reactor/components/link';

export default function EmailFormatter({record, column}) {
    let email = Obj.get(record, column.key);

    if (! email) return '';
    
    return <Link relative={false} to={'mailto:' + email} children={email} />;
}