import { currentDirection, getCurrentLocaleCode, directionOf } from "reactor/localization/locales";
import events from '@flk/events';
import { SWITCHING_LOCALE_CODE_EVENT } from "reactor/router/flags";

const localeCode = getCurrentLocaleCode();
const direction = currentDirection();
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

const updateGlobalLocaleCode = localeCode => {
    const direction = directionOf(localeCode);
    const left = direction === 'ltr' ? 'left' : 'right';
    const right = direction === 'ltr' ? 'right' : 'left';

    Globals.localeCode = localeCode;
    Globals.direction = direction;
    Globals.left = left;
    Globals.right = right;
    Globals.marginLeft = `margin-${left}`;
    Globals.marginRight = `margin-${right}`;
    Globals.paddingLeft = `padding-${left}`;
    Globals.paddingRight = `padding-${right}`;
};

events.on(SWITCHING_LOCALE_CODE_EVENT, updateGlobalLocaleCode);

export default Globals;