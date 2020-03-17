import styled from 'styled-components';
import { COLORS } from '../../styleProperties/index.js';

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