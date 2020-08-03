import PropTypes from 'prop-types';

export function If(props) {
    if (props.condition === false) return '';

    return props.render ? props.render() : props.children;
}

If.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.any,
    render: PropTypes.func,
};

export function ElseIf(props) {
    if (props.condition === false) return '';

    return props.render ? props.render() : props.children;
}

export default function Condition(props) {
    for (let child of props.children) {
        if (child.props.condition === true || child.props.condition === undefined) {
            return child.props.children;
        }
    }
}