import { setTitle, setDescription } from '../metadata';
import { trans } from 'reactor/localization';

export default function Helmet({ title, id, appendAppName = true, description, bodyClass }) {
    setTitle(trans(title) +  (appendAppName ? ' | ' + trans('appName') : ''));
    
    if (description) {
        setDescription(description);
    }

    if (bodyClass) {
        document.body.className = bodyClass;
    }

    if (id) {
        document.body.id = id;
    }

    return '';
}