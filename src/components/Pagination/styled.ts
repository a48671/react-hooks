import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../styleProperties';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin: 30px -5px 0;
`;

interface IPageProps {
    current: 'true' | 'false'
}

export const Page = styled(Link)`
    display: block;
    padding: 5px 10px;
    border: 1px solid ${COLORS.blueLight};
    color: ${(p: IPageProps) => p.current === 'true' ? COLORS.white : COLORS.dark};
    margin: 0 5px 10px;
    background-color: ${(p: IPageProps) => p.current === 'true' ? COLORS.blueLight : 'transperent'};
    pointer-events: ${(p: IPageProps) => p.current === 'true' ? 'none' : 'auto'};
    user-select: none;
`;