import React from 'react';
import { Wrapper, Container, Nav, NavItem, Logo } from './styled';

const TopBar = () => {
    return (
        <Wrapper>
            <Container>
                <Logo to='/'>
                    I am programmer
                </Logo>
                <Nav>
                    <NavItem to='/' exact>
                        Home
                    </NavItem>
                    <NavItem to='/login'>
                        Sign in
                    </NavItem>
                    <NavItem to='/register'>
                        Sign up
                    </NavItem>
                </Nav>
            </Container>
        </Wrapper>
    );
};

export default TopBar;