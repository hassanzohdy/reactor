import { trans } from 'reactor/localization';

const meta = {
    title: null,
    description: null,
};

/**
 * Set page title
 * 
 * @param   {string} pageTitle 
 */
export function setTitle(pageTitle) {
    if (meta.title === pageTitle) return pageTitle;

    document.title = meta.title = pageTitle;
}

/**
 * Set page title using the trans function for translation
 * 
 * @param   {string} pageTitle 
 * @returns {string}
 */
export function translatedTitle(pageTitle) {
    return setTitle(trans(pageTitle));
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