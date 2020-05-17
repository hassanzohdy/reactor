import {trans} from 'reactor/localization';

/**
 * Set page title
 * 
 * @param {string} pageTitle 
 */
export function title(pageTitle) {
    document.title = pageTitle;
}

/**
 * Set page title using the trans function for translation
 * 
 * @param {string} pageTitle 
 */
export function translatedTitle(pageTitle) {
    title(trans(pageTitle));
}

/**
 * Set page description
 * 
 * @param {string} title 
 */
export function description(description) {
    let metaDescriptionTag = document.getElementById('meta-description')
    metaDescriptionTag.content = description;
}
