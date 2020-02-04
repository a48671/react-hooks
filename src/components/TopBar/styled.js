import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MainContainer from "../Container";

export const Wrapper = styled.div`
    display: block;
    padding: 20px 0;
    width: 100%;
    color: aquamarine;
`;

export const Container = styled(MainContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NavItem = styled(NavLink)`
    display: block;
    padding: 0 10px;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
    &.active {
        color: blue;
    }
`;