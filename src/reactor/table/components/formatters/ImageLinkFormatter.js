import React from 'react';
import ImageFormatter from './ImageFormatter';
import LinkFormatter from './LinkFormatter';

export default function ImageLinkFormatter({ record, column }) {
    const Image = <ImageFormatter column={column} />;

    if (! Image) return '';

    return <LinkFormatter children={Image} column={column} record={record} />
}