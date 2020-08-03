import React from 'react';
import useOnce from 'reactor/hooks/useOnce';
import { lastRequest } from 'reactor/endpoint';

export default function useRequest(promiseFunction) {
    const [state, setState] = React.useState({
        value: null,
        error: null,
        isLoading: false,
        isLoaded: false,
    });

    useOnce(() => {
        setState({
            ...state,
            isLoading: true,
        });

        promiseFunction().then(response => {
            setState({
                value: response,
                isLoaded: true,
                isLoading: false,
                error: null
            });
        })
            .catch(response => {
                if (response.__CANCEL__ === true) return;

                setState({
                    value: null,
                    isLoaded: true,
                    isLoading: false,
                    error: response
                });
            });

        let request;

        setTimeout(() => {
            request = lastRequest();
        }, 0);

        return () => request.abort();
    });

    return [state.value, state.error, state.isLoading];
}