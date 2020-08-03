import React from 'react';
import Link from 'reactor/components/Link';

export default function EmailFormatter({ column }) {
    let email = column.value;

    if (!email) return '';

    return <Link relative={false} to={'mailto:' + email} children={email} />;
}