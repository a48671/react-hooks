import React, { useState } from 'react';
import Container from "../../components/Container";
import { Wrapper, Title, LinkForRegister, Form, Field, Input, Button } from "./styled";

const Authentication = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = e => {
        e.preventDefault();
        console.log(email)
        console.log(password)
    };

    return (
        <Wrapper>
            <Container>
                <Title>Login</Title>
                <LinkForRegister to="/register">Need an account?</LinkForRegister>
                <Form onSubmit={e => handlerSubmit(e)}>
                    <fieldset>
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
                    <Button type='submit'>
                        Sign in
                    </Button>
                </Form>
            </Container>
        </Wrapper>
    );
};

export default Authentication;