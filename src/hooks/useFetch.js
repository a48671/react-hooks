import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import path from 'path';

import useLocalStorage from "./useLocalStorage";

export default url => {

    const [response, setResponse] = useState(null);
    const [isLoading, setLoadinng] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const [token] = useLocalStorage('token');


    const doFetch = useCallback((options = {}) => {
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

    return [{response, isLoading, error}, doFetch];
};