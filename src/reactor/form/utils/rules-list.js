// import PropTypes from 'prop-types';
import { Arr } from "reinforcements";
import email from "../validation/rules/email";
import required from "../validation/rules/required";
import minLength from "../validation/rules/min-length";

// const ruleSchema = {
//     // 
//     requiresValue: true, // if the input has no value, skip rule evaluation
//     type: PropTypes.string, // email
//     rule: PropTypes.string, // required  check if the rule exists in the props list of the input 
//     // function to evaluate the rule and returns an object based on rule evaluation
//     evaluate: function (value, inputComponent, e) {
//         return {
//             hasError: PropTypes.bool.isRequired,
//             errorMessage: PropTypes.string.isRequired, // required >> This field is required
//         }
//     },
// };

// export default function evaluate()

const rulesList = new Arr([
    required,
    email,
    minLength,
    // maxLength
    // length
    // min
    // max 
    // match >> password with conform Password
    // pattern
]);

export default rulesList;