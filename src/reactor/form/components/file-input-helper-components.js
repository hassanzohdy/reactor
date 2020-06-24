import React from 'react';
import { styled } from '@material-ui/core';
import StaticButton from './static-button';

export const FileInputWrapper = styled('div')(({ theme }) => {
    return {
        marginBottom: theme.spacing(1),
    }
});

export const FileButtonWrapper = styled('div')(({ theme }) => {
    return {
        marginTop: theme.spacing(1),
    }
});

export const FileButtonText = styled('span')(({ theme }) => {
    return {
        marginLeft: theme.spacing(1),
    }
});

export const FileButton = props => {
    return <StaticButton color="primary" variant="contained" {...props} />
}

const InputFile = React.forwardRef((props, ref) => <input ref={ref} type="file" {...props} />);

export const HiddenFileInput = styled(InputFile)({
    display: 'none'
});