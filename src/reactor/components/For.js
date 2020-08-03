import React from 'react';
import mapObject from 'reactor/utils/mapObject';

export default function For({ array, object, key, render, ...basicIteration }) {
    if (array) {
        return array.map((item, index) => {
            return <React.Fragment key={key ? item[key] : index}>{render(item, index)}</React.Fragment>
        });
    }

    if (object) {
        return mapObject(object, (objectKey, value) => {
            return <React.Fragment key={key ? value[key] : objectKey}>{render(objectKey, value)}</React.Fragment>;
        });
    }

    if (typeof basicIteration.i !== undefined) {
        let data = [];

        let i = basicIteration.i;

        while (true) {
            if (basicIteration.when(i) !== true) break;

            data.push(
                <React.Fragment key={key || i}>{render(i)}</React.Fragment>
            );

            i = basicIteration.then ? basicIteration.then(i) : ++i;
        }

        return data;
    }
}