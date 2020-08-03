import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import moment from 'moment';
import FormInput from '../FormInput';
import {
    DatePicker as MaterialDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function DatePicker({ format = 'dd-mm-yyyy', value, defaultValue, onChange, ...otherProps }) {
    let givenValue = value || defaultValue;
    if (givenValue) {
        givenValue = moment(givenValue, format.toUpperCase()).toDate();
    }

    const [selectedDate, handleDateChange] = useState(givenValue || new Date());

    const onDateSelection = date => {
        handleDateChange(date);
        onChange && onChange(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MaterialDatePicker
                TextFieldComponent={FormInput}
                value={selectedDate}
                animateYearScrolling
                autoOk
                {...otherProps}
                format={format.replace(/m/g, 'M')}
                onChange={onDateSelection} />
        </MuiPickersUtilsProvider>
    );
}