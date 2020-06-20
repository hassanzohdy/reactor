const localeCode = document.documentElement.lang;
const direction = document.documentElement.dir;
const left = direction === 'ltr' ? 'left' : 'right';
const right = direction === 'ltr' ? 'right' : 'left';

const Globals = {
    left: left,
    right: right,
    direction: direction,
    marginLeft: `margin-${left}`,
    marginRight: `margin-${right}`,
    paddingLeft: `padding-${left}`,
    paddingRight: `padding-${right}`,
    localeCode: localeCode,
};

export default Globals;