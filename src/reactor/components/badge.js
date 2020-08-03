import React from 'react';
import { makeStyles } from '@material-ui/core';
import cls from 'clsx';
import { red, blue, orange, yellow, green, grey } from '@material-ui/core/colors';

const badgeStyle = makeStyles(theme => ({
    root: {
        color: '#fff',
        display: 'inline-block',
        padding: '5px 12px',
        fontSize: '10px',
        textAlign: 'center',
        fontWeight: 500,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        verticalAlign: 'baseline',       
    },
    roundedBadge: {
        borderRadius: '12px',    
    },
}));

export default function Badge({ backgroundColor, color, className, rounded, style = {}, ...otherProps }) {
    const { root, roundedBadge } = badgeStyle();

    const classesList = cls(root, className, {
        [roundedBadge]: rounded === true
    });

    style.backgroundColor = backgroundColor;
    style.color = color;

    return <span className={classesList} style={style} {...otherProps} />;
}

export const RedBadge = props => <Badge backgroundColor={red[400]} color="#FFF" {...props} />;
export const BlueBadge = props => <Badge backgroundColor={blue[400]} color="#FFF" {...props} />;
export const OrangeBadge = props => <Badge backgroundColor={orange[400]} color="#FFF" {...props} />;
export const YellowBadge = props => <Badge backgroundColor={yellow[600]} color="#FFF" {...props} />;
export const GreenBadge = props => <Badge backgroundColor={green[400]} color="#FFF" {...props} />;
export const BlackBadge = props => <Badge backgroundColor="#000" color="#FFF" {...props} />;
export const DarkBadge = props => <Badge backgroundColor="#333" color="#FFF" {...props} />;
export const GreyBadge = props => <Badge backgroundColor={grey[400]} color="#000" {...props} />;
export const WhiteBadge = props => <Badge backgroundColor="#FFF" color="#000" {...props} />;