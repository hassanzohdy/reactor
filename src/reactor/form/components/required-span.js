import React from 'react';
import { styled } from '@material-ui/core';

const Span = ({ open, className }) => {
    if (!open) return;

    return <span className={className}>*</span>;
}

const RequiredSpan = styled(Span)(({theme}) => ({
    color: 'red',
    marginLeft: theme.spacing(0.5),
}));

export default RequiredSpan;