import { trans } from 'reactor/localization';

const meta = {
    title: null,
    description: null,
};

/**
 * Set page title
 * 
 * @param   {string} pageTitle 
 * @returns {string}
 */
export function title(pageTitle) {
    if (meta.title === pageTitle) return pageTitle;

    document.title = meta.title = pageTitle;

    return pageTitle;
}

/**
 * Set page title using the trans function for translation
 * 
 * @param   {string} pageTitle 
 * @returns {string}
 */
export function translatedTitle(pageTitle) {
    return title(trans(pageTitle));
}

/**
 * Set page description
 * 
 * @param {string} title 
 */
export function setDescription(description) {
    if (meta.description === description) return description;
    
    let metaDescriptionTag = document.getElementById('meta-description')
    metaDescriptionTag.content = meta.description = description;

    return description;
}