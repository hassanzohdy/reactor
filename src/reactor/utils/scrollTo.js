/**
 * Scroll to the given query selector smoothly
 * 
 * @param {string} querySelector 
 */
export default function scrollTo(querySelector) {
    const element = document.querySelector(querySelector);

    if (! element) return;

    element.scrollIntoView({
        behavior: 'smooth'
    });
}