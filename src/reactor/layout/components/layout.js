import React from 'react';
import Theme from './Theme';
import PropTypes from 'prop-types';

export default function Layout(props) {
    return <Theme {...props} />;
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};