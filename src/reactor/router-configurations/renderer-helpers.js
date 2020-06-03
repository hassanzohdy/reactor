import modulesList from "./modules-list";
import config from 'reactor/config';
const localeCodes = config.get('locales');

export function isPartOfLazyModules(firstSegment) {
    return modulesList[firstSegment];
}

/**
 * Get first segment of the given location data
 * 
 * @param   {object} location
 * @returns {string}   
 */
export function firstSegmentOfRoute(location) {
    let [firstSegment, secondSegment] = location.pathname.replace(/^\//, '').split('/');

    let segment = firstSegment;

    // if first segment is locale code, then take the second
    if (localeCodes[firstSegment]) {
        // if there is no second segment
        // then return empty not undefined
        segment = secondSegment || '';
    }

    return '/' + segment;
}
