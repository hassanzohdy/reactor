import React from 'react';
import Avatar from 'reactor/components/Avatar';
import Image from 'reactor/components/Image';

export default function ImageFormatter({ column }) {
    let {value: imageSrc, theme = 'avatar' } = column;

    if (!imageSrc) return '';

    if (theme === 'avatar') {
        return <Avatar src={imageSrc} />
    } else if (theme === 'thumbnail') {
        return <Image src={imageSrc} />
    }
}