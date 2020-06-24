import { styled } from '@material-ui/core';

export const FileInputWrapper = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(1.5)
}));

export const FileButtonWrapper = styled('div')(({theme}) => ({
    marginTop: theme.spacing(1)
}));

export const FileButtonText = styled('span')(({theme}) => ({
    marginLeft: theme.spacing(1)
}));