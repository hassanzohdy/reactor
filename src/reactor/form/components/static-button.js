import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export default function StaticButton(props) {
    return (
        <Button type="button" {...props} />
    )
}

StaticButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export const PrimaryButton = props => <StaticButton color="primary" variant="contained" {...props} />
export const SecondaryButton = props => <StaticButton color="secondary" variant="contained" {...props} />
export const DefaultButton = props => <StaticButton color="default" variant="contained" {...props} />