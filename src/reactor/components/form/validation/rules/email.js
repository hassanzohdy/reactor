import Is from "@flk/supportive-is";
import { trans } from 'reactor/localization';

export default {
    type: 'email',
    evaluate: function (value) {
        return {
            hasError: ! Is.email(value),
            errorMessage: trans('validation.email'),
        }
    },
};