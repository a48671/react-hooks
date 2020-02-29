import React from 'react';
import { Wrapper } from './styled';
import PropTypes from 'prop-types';

const Container = ({children, className}) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Container;