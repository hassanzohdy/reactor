const fontFamilyLinkId = 'ffam'; // f(ont) fam(ily)

function createLinkTag() {
    let linkTag = document.createElement('link');

    linkTag.rel = 'stylesheet';

    return linkTag;
}

export function setExternalFontFamily(url) {
    if (! url) return;
    
    let linkTag = document.getElementById(fontFamilyLinkId) || createLinkTag();

    linkTag.href = url;

    linkTag.id = fontFamilyLinkId;

    document.head.appendChild(linkTag);

    return linkTag;
}