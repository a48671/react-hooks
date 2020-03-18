import { useEffect, useContext } from "react";
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch.tsx';
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from '../../contexts/currentUser';

const CurrentUserChecker = ({children}) => {

    const [{response}, doFetch] = useFetch('/user');
    const [token] = useLocalStorage('token');

    const [, dispatch] = useContext(CurrentUserContext);

    useEffect(() => {
        if (!token) {
            dispatch({type: 'SET_UNAUTHORIZED'});
            return;
        }
        doFetch();
        dispatch({type: 'LOADING'});
    }, [token, doFetch, dispatch]);

    useEffect(() => {
        if (!response) return;
        dispatch({type: 'SET_AUTHORIZED', payload: response.user});
    }, [response, dispatch]);

    return children;
};

CurrentUserChecker.propTypes = {
    children: PropTypes.node
}

export default CurrentUserChecker;