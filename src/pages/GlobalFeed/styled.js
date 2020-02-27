import styled from 'styled-components';
import { COLORS } from '../../styleProperties';

export const Wrapper = styled.div`
    display: block;
`;

export const Banner = styled.div`
    display: block;
    padding: 50px 0;
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px 0;
`;

export const Articles = styled.div`
    display: block;
    width: 70%;
`;

export const Tags = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 30%;
    padding-left: 20px;
`;