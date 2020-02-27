import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({children}) => {
    const [state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null
    });
    console.log('state', state)
    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    );
};

CurrentUserProvider.propTypes = {
    children: PropTypes.node
};