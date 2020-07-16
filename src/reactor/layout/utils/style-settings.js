import { Obj } from 'reinforcements';

const styleSettings = {
    settings: {},
    set(moreSettings) {
        this.settings = Obj.merge(this.settings, moreSettings);
    },
    get(key, defaultValue = null) {
        return Obj.get(this.settings, key, defaultValue);
    } 
}

export default styleSettings;