import withInputType from '../utils/withInputType';
import { trans } from 'reactor/localization/translator';

const PasswordInput = withInputType('password', {
    name: 'password',
    placeholder: trans('password'),
}); 

export default PasswordInput;