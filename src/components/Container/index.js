import React from 'react';
import { Wrapper } from './styled';

const Container = ({children, className}) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
};

export default Container;