export const getItem = (items, value) => items.find(item => item.value === value);

export const getItems = (items, values) => items.filter(item => values.includes(item.value));