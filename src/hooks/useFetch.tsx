import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';
const path = require('path');

import useLocalStorage from "./useLocalStorage";

interface InterfaceDoFetchResponse {
    response: Object | null,
    isLoading: boolean,
    error: Object
}

export default (url: string): (InterfaceDoFetchResponse | Function)[] => {

    const [response, setResponse] = useState<Object | null>(null);
    const [isLoading, setLoadinng] = useState<boolean>(false);
    const [error, setError] = useState<Object>(null);
    const [options, setOptions] = useState<Object>({});

    const [token] = useLocalStorage('token');


    const doFetch = useCallback((options: Object = {}) => {
        setOptions(options);
        setLoadinng(true);
    }, []);

    useEffect(() => {
        const requestOptions = {
            ...options,
            headers: {
                authorization: token ? `Token ${token}` : ''
            }
        };
        if (!isLoading) return;
        axios(path.join(BASE_URL, url), requestOptions)
            .then(res => {
                setResponse(res.data);
                setLoadinng(false);
            })
            .catch(error => {
                setError(error.response ? error.response.data : error);
                setLoadinng(false);
            });
    }, [isLoading, options, url, token]);

    const doFetchResponse: InterfaceDoFetchResponse = {response, isLoading, error}

    return [doFetchResponse, doFetch];
};