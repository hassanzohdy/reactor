import React from 'react';
import Link from 'reactor/components/link';

export default function EmailFormatter({record, column}) {
    let email = column.value;

    if (! email) return '';
    
    return <Link relative={false} to={'mailto:' + email} children={email} />;
}