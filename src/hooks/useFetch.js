import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import path from 'path';

export default url => {

    const [data, setData] = useState(null);
    const [isLoading, setLoadinng] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = (options = {}) => {
        setOptions(options);
        setLoadinng(true);
    };

    useEffect(() => {
        if (!isLoading) return;
        axios(path.join(BASE_URL, url), options)
            .then(res => {
                setData(res.data);
                setLoadinng(false);
            })
            .catch(error => {
                setError(error.response.data);
                setLoadinng(false);
            });
    }, [isLoading, options, url]);

    return [{data, isLoading, error}, doFetch];
};