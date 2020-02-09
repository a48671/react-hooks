import styled from "styled-components";
import { COLORS } from "../../styleProperties";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: block;
    margin-top: 30px;
`;

export const Title = styled.h1`
    display: block;
    margin-bottom: 20px;
    text-align: center;
    font-size: 36px;
    color: ${COLORS.blueDark};
`;

export const LinkForRegister = styled(Link)`
    display: block;
    margin-bottom: 30px;
    text-align: center;
    font-size: 18px;
    color: ${COLORS.orangeDark};
    text-decoration: underline;
    &:hover {
        color: ${COLORS.blue};
    }
`;

export const Form = styled.form`
    display: block;
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
`;

export const Field = styled.div`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding-bottom: 20px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid ${COLORS.blueLight};
    border-radius: 4px;
    height: 50px;
    font-size: 18px;
    padding: 0 20px;
    color: ${COLORS.blueDark};
`;

export const Button = styled.button`
    display: inline-block;
    width: auto;
    background-color: ${COLORS.orange};
    border: 1px solid ${COLORS.orangeDark};
    border-radius: 4px;
    height: 50px;
    font-size: 18px;
    line-height: 49px;
    padding: 0 20px;
    color: ${COLORS.white};
    cursor: ${p => p.disabled ? 'wait' : 'pointer'};
    transition: 0.3s;
    opacity: ${p => p.disabled ? '0.5' : '1'};
    &:hover {
        background-color: ${COLORS.orangeLight};
        color: ${COLORS.orangeDark};
    }
`;
