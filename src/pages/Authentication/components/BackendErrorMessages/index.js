import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Item } from './styled';

const BackendErrorMessages = ({backendMessages}) => {
    const messages = Object.keys(backendMessages).map(key => {
        const message = backendMessages[key].join(' ');
        return `${key} ${message}`;
    })
    return (
        <Wrapper>
            {messages.map(message => <Item key={message}>{message}</Item>)}
        </Wrapper>
    );
};

BackendErrorMessages.propTypes = {
    backendMessages: PropTypes.object
};

export default BackendErrorMessages;