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