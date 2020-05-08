/**
 * Set page title
 * 
 * @param {string} title 
 */
export function title(title) {
    document.title = title;
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
