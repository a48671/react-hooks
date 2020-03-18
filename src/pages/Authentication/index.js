import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from "../../components/Container";
import BackendErrorMessages from "./components/BackendErrorMessages";
import { Wrapper, Title, LinkForRegister, Form, Field, Input, Button } from "./styled";
import useFetch from "../../hooks/useFetch.tsx";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from '../../contexts/currentUser';

const Authentication = props => {

    const isLogin = props.location.pathname === '/login' ? true : false;
    const title = isLogin ? 'Sign in' : 'Sign up';
    const textLink = isLogin ? 'Need an account?' : 'Have an account?';
    const link = isLogin ? '/register' : '/login';
    const endPoint = isLogin ? '/users/login' : '/users';

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{response, error, isLoading}, doFetch] = useFetch(endPoint);
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [, setToken] = useLocalStorage('token');
    const [, dispatch] = useContext(CurrentUserContext);

    const handlerSubmit = e => {
        e.preventDefault();
        const user = isLogin ? {email, password} : {email, password, username}
        doFetch({
            method: 'post',
            data: {user}
        });
    };

    useEffect(() => {
        if (response) {
            setToken(response.user.token);
            setIsSuccessfullSubmit(true);
            dispatch({
                type: 'SET_AUTHORIZED',
                payload: response.user
            });
        }
    }, [response, error, dispatch, setToken]);

    if (isSuccessfullSubmit) {
        return <Redirect to='/'/>
    }

    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <LinkForRegister to={link}>{textLink}</LinkForRegister>
                <Form onSubmit={e => handlerSubmit(e)}>
                    {error && <BackendErrorMessages backendMessages={error.errors}/>}
                    <fieldset>
                        {
                            !isLogin &&
                            <Field>
                                <Input
                                    type="text"
                                    placeholder='User name'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Field>
                        }
                        <Field>
                            <Input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Field>
                    </fieldset>
                    <Button type='submit' disabled={isLoading}>
                        {title}
                    </Button>
                </Form>
            </Container>
        </Wrapper>
    );
};

Authentication.propTypes = {
    location: PropTypes.object
};

export default Authentication;