import { trans } from 'reactor/localization';

export default {
    rule: 'minLength',
    evaluate: function minLength(value, inputComponent) {
        const minLength = inputComponent.props.minLength;
        return {
            hasError: String(value).length < minLength,
            errorMessage: trans('validation.minLength', minLength),
        }
    }
};
