import React from 'react';
import Label from './label';
import { Random } from 'reinforcements';
import { getItem } from '../utils/select-items';
import { Input, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { selectItems, RenderSelectedValues } from './select-input-helper-components';

export default function SelectInput({ id, label, onChange, lazyLoading, request, mapResponse, labelId, placeholder, required, value, items, groups, imagable, iconable, multiple, readOnly, none, ...otherProps }) {
    // for multiple selections
    if (multiple && ! value) {
        value = [];
    }

    const [noneAdded, markNoneAsAdded] = React.useState(false);
    const [placeholderAdded, markPlaceholderAsAdded] = React.useState(false);

    const [currentItems, setItems] = React.useState(items || []);

    const [isLoading, setLoading] = React.useState(lazyLoading);

    const [loaded, requestIsLoaded] = React.useState(false);

    React.useEffect(() => {
        if (! lazyLoading || loaded) return;

        request().then(response => {
            const items = mapResponse(response);
            
            setItems(items);
            requestIsLoaded(true);
            setLoading(false);
            setValue(value || '');
        });

    }, [lazyLoading, loaded, request, mapResponse, value]);

    if (none && ! noneAdded) {
        // add none 
        items.unshift({
            value: '',
            label: 'None',
        });

        markNoneAsAdded(true);
    }

    if (placeholder && ! placeholderAdded) {
        items.unshift({
            value: Random.id(3),
            label: placeholder,
            disabled: true,
        });

        markPlaceholderAsAdded(true);
    }

    const [opened, setOpenedStatus] = React.useState(false);

    const [currentValue, setValue] = React.useState(isLoading ? '' : value || '');
    // get the item object for the given value

    const handleChange = (event) => {
        let value = event.target.value;        
        setValue(value);
        // select the item by value
        let item = getItem(currentItems, value);
        // set the item as an argument for the onChange event 
        onChange && onChange(item);
    };

    return (
        <FormControl fullWidth>
            <Label component={InputLabel} id={labelId} label={label} />
            <Select
                input={<Input />}
                id={id}
                displayEmpty
                labelId={labelId}
                onOpen={e => setOpenedStatus(true)}
                onBlur={e => setOpenedStatus(false)}
                multiple={multiple}
                value={currentValue}
                onChange={handleChange}
                renderValue={selected => <RenderSelectedValues opened={opened} placeholder={placeholder} label={label} items={currentItems} selected={selected} /> }
                children={selectItems(currentItems, isLoading)}
                {...otherProps}
            />
        </FormControl>
    );
}

SelectInput.defaultProps = {
    id: Random.id(),
    labelId: Random.id(),
    value: '',
}