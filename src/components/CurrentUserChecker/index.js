import { useEffect, useContext } from "react";
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from '../../contexts/currentUser';

const CurrentUserChecker = ({children}) => {

    const [{response}, doFetch] = useFetch('/user');
    const [token] = useLocalStorage('token');

    const [, setCurrentUserState] = useContext(CurrentUserContext);

    console.log('CurrentUserChecker')

    useEffect(() => {
        if (!token) {
            setCurrentUserState(state => ({
                ...state,
                isLoggedIn: false
            }));
            return;
        }
        doFetch();
        setCurrentUserState(state => ({
            ...state,
            isLoading: true
        }));
    }, [token, doFetch, setCurrentUserState]);

    useEffect(() => {
        if (!response) return;

        setCurrentUserState(state => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
        }));
    }, [response, setCurrentUserState]);

    return children;
};

CurrentUserChecker.propTypes = {
    children: PropTypes.node
}

export default CurrentUserChecker;