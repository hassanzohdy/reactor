export const ENTER_KEY = 13;
export const ESC_KEY = 27;

export default function pressed(e, key) {
    return (e.keyCode || e.charCode) === key;
}