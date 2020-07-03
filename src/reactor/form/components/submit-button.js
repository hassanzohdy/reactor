import clsx from 'clsx';
import React from 'react';
import Button from '@material-ui/core/Button';
import FormContext from '../utils/form-context';
import CircularProgress from '@material-ui/core/CircularProgress';
import layoutSettings from 'reactor/layout/utils/layout-settings';

export default function SubmitButton(props) {
    const { form } = React.useContext(FormContext);
    
    const {children, theme, ...buttonProps} = props;

    if (theme) {
        const classes = layoutSettings();
        buttonProps.className = clsx(buttonProps.className, classes[theme + 'Theme']); 
    }

    const buttonContent = form.isSubmitting ? <CircularProgress size="1rem" style={{ color: '#FFF' }} /> : children;

    return (
        <Button type="submit" disabled={form.isValidForm === false || form.isSubmitting} {...buttonProps}>
            {buttonContent}
        </Button>
    )
}