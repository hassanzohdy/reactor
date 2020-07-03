import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Is from '@flk/supportive-is';
import { getItem, getItems } from '../utils/select-items';
import { makeStyles, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    smallText: {
        fontSize: theme.spacing(1.5)
    }
}));

export const selectItems = items => {
    return items.map(item => {
        return <MenuItem disabled={item.disabled === true} key={item.value} value={item.value}>
            {item.label}
        </MenuItem>
    });
};

export const RenderSelectedItem = ({ item }) => {
    if (!item) return '';

    return <MenuItem>{item.label}</MenuItem>
};

const RenderMultipleSelectedItems = ({ selectedItems }) => {
    const classes = useStyles();

    return (
        <div className={classes.chips}>
            {selectedItems.map(item => (
                <Chip key={item.value} className={classes.chip} label={item.label} />
            ))}
        </div>
    )
};

export function RenderSelectedValues({ items, selected, opened, label, placeholder }) {
    // Render Placeholder On Empty Selection as a text 
    const classes = useStyles();

    if (Is.empty(selected)) {
        if (label && !opened) return '';

        return <MenuItem className={classes.smallText}>{placeholder}</MenuItem>
    }

    // if the selected is an array 
    // then render the selected items in chips for now
    if (Is.array(selected)) {
        return <RenderMultipleSelectedItems selectedItems={getItems(items, selected)} />
    }

    // render single selection
    return <RenderSelectedItem item={getItem(items, selected)} />
}