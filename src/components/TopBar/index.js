import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Container, Nav, NavItem } from './styled';

const TopBar = () => {
    return (
        <Wrapper>
            <Container>
                <Link to='/'>
                    TopBar
                </Link>
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