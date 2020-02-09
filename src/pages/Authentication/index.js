import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Container from "../../components/Container";
import { Wrapper, Title, LinkForRegister, Form, Field, Input, Button } from "./styled";
import useFetch from "../../hooks/useFetch";

const Authentication = props => {

    const isLogin = props.location.pathname === '/login' ? true : false;
    const title = isLogin ? 'Sign in' : 'Sign up';
    const textLink = isLogin ? 'Need an account?' : 'Have an account?';
    const link = isLogin ? '/register' : '/login';
    const endPoint = isLogin ? '/users/login' : '/users';

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{data, error, isLoading}, doFetch] = useFetch(endPoint);

    const handlerSubmit = e => {
        e.preventDefault();
        const user = isLogin ? {email, password} : {email, password, username}
        doFetch({
            method: 'post',
            data: {user}
        });
    };

    useEffect(() => {
    }, [data, error])

    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <LinkForRegister to={link}>{textLink}</LinkForRegister>
                <Form onSubmit={e => handlerSubmit(e)}>
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