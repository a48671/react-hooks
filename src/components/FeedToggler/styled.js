import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../styleProperties';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 -5px 20px;
`;

export const Item = styled(NavLink)`
    display: block;
    margin: 0 5px;
    padding: 10px 20px;
    color: ${COLORS.dark};
    &:hover {
        background-color: ${COLORS.orangeLight};
    }
    &.active {
        border-bottom: 1px solid ${COLORS.orange};
    }
`;