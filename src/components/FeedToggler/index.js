import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CurrentUserContext } from "../../contexts/currentUser";

import { Wrapper, Item } from './styled';

const FeedToggler = ({tagName}) => {

    const [{isLoggedIn}] = useContext(CurrentUserContext);

    return (
        <Wrapper>
            {isLoggedIn && (
                <Item key='yourFeed' to='/feed'>
                    Your feed
                </Item>
            )}
            <Item key='globalFeed' to='/' exact>
                Global feed
            </Item>
            {tagName && (
                <Item  key='tag'to={`/tags/${tagName}`}>
                    #{tagName}
                </Item>
            )}
        </Wrapper>
    );
};

FeedToggler.propTypes = {
    tagName: PropTypes.string
}

export default FeedToggler;