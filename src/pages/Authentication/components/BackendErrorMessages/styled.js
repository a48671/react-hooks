import styled from 'styled-components';
import { COLORS } from '../../../../styleProperties';

export const Wrapper = styled.ul`
    display: block;
    margin-left: 20px;
    color: ${COLORS.orangeDark};
    margin-bottom: 10px;
`;

export const Item = styled.li`
    list-style-type: disc;
`;