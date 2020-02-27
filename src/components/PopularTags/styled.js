import styled from 'styled-components';

import { COLORS } from '../../styleProperties';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -5px;
`;

export const Tag = styled(Link)`
    display: block;
    padding: 10px 20px;
    margin: 0 5px 10px;
    border: 1px solid ${COLORS.orangeLight};
    border-radius: 4px;
`;
