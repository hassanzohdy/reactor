const sidebarItems = {
    items: [],
    extend(moreItems) {
        this.items = this.items.concat(moreItems);
    }
};

export default sidebarItems;