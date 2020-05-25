import Is from "@flk/supportive-is";
import { trans } from 'reactor/localization';

export default {
    rule: 'required',
    requiresValue: false,
    evaluate: function (value) {
        return {
            hasError: Is.empty(value),
            errorMessage: trans('validation.required'),
        }
    },
};