import React from 'react';

export default function useOnce(callback) {
    React.useEffect(callback, []);
}