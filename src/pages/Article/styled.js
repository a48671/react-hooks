import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styleProperties';

export const Wrapper = styled.div`
    display: block;
`;

export const Tile = styled.h1`
    display: block;
    font-size: 32px;
    margin-bottom: 10px;
`;

export const  Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    background-color: ${COLORS.blueLight};
    color: ${COLORS.white};
    padding: 30px 0;
`;

export const Avatar = styled(Link)`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const  ArticleInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const  Name = styled(Link)`
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const  Date = styled.div`
    display: block;
    font-size: 14px;
    width: 100%;
`;

export const  Body = styled.div`
    display: block;
    padding: 30px 0;
    font-size: 14px;
`;

export const  AuthorAndDate = styled.div`
    display: block;
    padding-left: 20px;
`;