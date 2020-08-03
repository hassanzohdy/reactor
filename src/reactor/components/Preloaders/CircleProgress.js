import React from 'react';
import { CircularProgress as Progress } from '@material-ui/core';

export default function CircleProgress({color, ...props}) {
    const style = {};

    if (color) {
        style.color = color;
    }

    return <Progress style={style} {...props} />
}