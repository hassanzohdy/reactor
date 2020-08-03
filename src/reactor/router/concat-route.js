import trim from "reinforcements/src/utilities/str/trim";
import ltrim from "reinforcements/src/utilities/str/ltrim";
import rtrim from "reinforcements/src/utilities/str/rtrim";

/**
 * Concatenate the given paths to one single path
 * 
 * @param   {...string} segments
 * @returns {string} 
 */
export default function concatRoute(...segments) {
    let path = '';

    for (let segment of segments) {
        segment = String(segment || '');
        if (segment === '/') continue;

        segment = '/' + trim(segment || '', '/');
        
        path += segment;
    }
    
    path = rtrim(path, '/');

    return '/' + ltrim(path || '/', '/');
} 
