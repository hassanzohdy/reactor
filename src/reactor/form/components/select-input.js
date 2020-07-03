import React from 'react';
import Label from './label';
import { Random } from 'reinforcements';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const selectItems = items => {
    return items.map(item => {
        return <MenuItem key={item.value} value={item.value}>
            {item.label}
        </MenuItem>
    });
};


export default function SelectInput({ id, label, labelId, placeholder, required, value, items, groups, imagable, iconable, multiple, readOnly, none, ...otherProps }) {
    const [currentValue, setValue] = React.useState(value);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const displayValue = value => {
        return <MenuItem>{value}</MenuItem>
    };

    return (
        <div>
            <FormControl fullWidth>
                <Label component={InputLabel} id={labelId} label={label} />
                <Select
                    labelId={labelId}
                    id={id}
                    value={currentValue}
                    onChange={handleChange}
                    renderValue={displayValue}
                >
                    {selectItems(items)}
                </Select>
            </FormControl>
        </div>
    );
}


SelectInput.defaultProps = {
    id: Random.id(),
    labelId: Random.id(),
    value: '',
}