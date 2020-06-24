import withInputType from '../utils/withInputType';
import { trans } from 'reactor/localization/translator';

const EmailInput = withInputType('email', {
    name: 'email',
    placeholder: trans('email'),
}); 

export default EmailInput;