import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../styleProperties';

export const Wrapper = styled.div`
    display: block;
`;

export const Article = styled.div`
    display: block;
    border-top: 1px solid ${COLORS.blueLight};
    padding: 10px;
`;

export const ArticleHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AuthorImage = styled(Link)`
    display: block;
    width: 50px;
    height: 50px;
    img {
        height: 100%;
    }
`;

export const AuthorName = styled(Link)`
    display: block;
`;

export const CreatData = styled.span`
    display: block;
`;

export const Tags = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 -5px;
    flex-wrap: wrap;
`;

export const Tag = styled.li`
    display: block;
    padding: 5px 10px;
    margin: 0 5px 5px;
    background-color: ${COLORS.blueLight};
    white-space: nowrap;
    color: ${COLORS.white};
    border-radius: 4px;
`;