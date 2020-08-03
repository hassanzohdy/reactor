import React from 'react';

const ColoredIcon = React.forwardRef(function ({color, icon: Icon, ...props}, ref) {
    return <Icon style={{fill: color}} {...props} ref={ref} />
});

export default ColoredIcon;