// import events from "@flk/events";
// import { SWITCHING_LOCALE_CODE_EVENT } from "reactor/router/flags";

const sidebarItems = {
    items: [],
    onUpdateItemsCallback: [],
    extend(moreItems) {
        this.items = this.items.concat(moreItems);
    },
    onUpdate(itemsCallback) {
        this.onUpdateItemsCallback.push(itemsCallback);        
    },
    getItems() {
        if (this.onUpdateItemsCallback.length > 0) {
            let items = [];
            for (let itemsCallback of this.onUpdateItemsCallback) {
                items = items.concat(itemsCallback());
            }

            this.items = items;
        }

        return this.items;
    }
};

export default sidebarItems;