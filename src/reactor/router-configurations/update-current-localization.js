import config from 'reactor/config';
import history from './router-history';
const localeCodes = config.get('locales');

export default function setCurrentLocale() {
    // /en/users
    // /users
    // first remove the first slash from the url
    // then split the pathname by the /
    // then get the first segment of the created array 
    let [firstSegmentOfLocation] = history.location.pathname.replace(/^\//, '').split('/');

    if (localeCodes[firstSegmentOfLocation]) {
        document.documentElement.dir = localeCodes[firstSegmentOfLocation];
        document.documentElement.lang = firstSegmentOfLocation;
    }
};