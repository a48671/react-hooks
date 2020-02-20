import { useEffect, useContext } from "react";
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from '../../contexts/currentUser';

const CurrentUserChecker = ({children}) => {

    const [{response}, doFetch] = useFetch('/user');
    const [token] = useLocalStorage('token');

    const [, setCurrentUserState] = useContext(CurrentUserContext);

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
    }, []);

    useEffect(() => {
        if (!response) return;

        setCurrentUserState(state => ({
            ...state,
            isLoading: false,
            currentUser: response.user
        }));
    }, [response, setCurrentUserState]);

    return children;
};

CurrentUserChecker.propTypes = {
    children: PropTypes.node
}

export default CurrentUserChecker;