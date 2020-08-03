import { Obj } from 'reinforcements';
import queryStringParser from 'query-string';
import { createBrowserHistory } from 'history';
import ltrim from 'reinforcements/src/utilities/str/ltrim';

const history = createBrowserHistory();

/**
 * Get has value if provided
 * If the withHash is set to true, then the # will be returned, 
 * otherwise it will be trimmed off
 * 
 * @param {boolean} withHash 
 */
export function hash(withHash = true) {
    let hash = history.location.hash;

    return withHash ? hash: ltrim(hash, '#');
}

/**
 * Parse the query string then get an object the provides an API to get value(s) from it
 * 
 * @returns {object}
 */
export function queryString() {
    const queryString = queryStringParser.parse(history.location.search, {
        parseNumbers: true,
        parseBooleans: true,
        arrayFormat: "bracket"
    });

    return {
        get(key, defaultValue = null) {
            return Obj.get(queryString, key, defaultValue);
        },
        all() {
            return queryString;
        },
        toString() {
            return JSON.stringify(queryString);
        },
    };
}

export default history;