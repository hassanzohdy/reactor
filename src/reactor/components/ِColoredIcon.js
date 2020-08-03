import React from 'react';

export default function ColoredIcon({color, icon: Icon, ...props}) {
    return <Icon style={{fill: color}} {...props} />
}