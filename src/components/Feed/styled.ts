import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../styleProperties/index';

export const Wrapper = styled.div`
    display: block;
`;

export const Article = styled.div`
    display: block;
    border-top: 1px solid ${COLORS.blueLight};
    padding: 10px;
`;

export const ArticleWrapper = styled(Link)`
    display: block;
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