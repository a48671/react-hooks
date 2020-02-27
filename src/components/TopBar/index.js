import React, { useContext, Fragment } from 'react';
import { Wrapper, Container, Nav, NavItem, Logo, Image } from './styled';
import { CurrentUserContext } from '../../contexts/currentUser';

const TopBar = () => {

    const [{isLoggedIn, currentUser}] = useContext(CurrentUserContext);

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
                    {
                        isLoggedIn === false &&
                        <Fragment>
                            <NavItem to='/login'>
                                Sign in
                            </NavItem>
                            <NavItem to='/register'>
                                Sign up
                            </NavItem>
                        </Fragment>
                    }
                    {
                        isLoggedIn &&
                        <Fragment>
                            <NavItem to='/articles/new'>
                                New post
                            </NavItem>
                            <NavItem to={`/profiles/${currentUser.username}`}>
                                {currentUser.username}
                            </NavItem>
                            <Image image={currentUser.image}/>
                        </Fragment>
                    }
                </Nav>
            </Container>
        </Wrapper>
    );
};

export default TopBar;