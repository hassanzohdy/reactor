import React from 'react';
import Avatar from 'reactor/components/avatar';
import Image from 'reactor/components/image';

export default function ImageFormatter({ column }) {
    let { defaultImage, value: imageSrc, theme = 'avatar' } = column;

    if (!imageSrc) {
        imageSrc = defaultImage;
    }

    if (!imageSrc) return '';

    if (theme == 'avatar') {
        return <Avatar src={imageSrc} />
    } else if (theme == 'thumbnail') {
        return <Image src={imageSrc} />
    }
}