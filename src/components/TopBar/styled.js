import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import MainContainer from "../Container";
import { COLORS } from '../../styleProperties'

export const Wrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    color: aquamarine;
    background-color: ${COLORS.blue};
    color: ${COLORS.white};
    box-shadow: 0px 0 6px 0 ${COLORS.blueDark}; 
    z-index: 2;
`;

export const Container = styled(MainContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(Link)`
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${COLORS.white};
    font-size: 20px;
    font-weight: 600;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.white};
    margin-right: -10px;
`;

export const NavItem = styled(NavLink)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 20px 10px;
    color: ${COLORS.white};
    border-radius: 0px;
    background-color: ${COLORS.blue};
    font-size: 16px;
    transition: 1s;
    &:after {
        display: block;
        position:absolute;
        content: '';
        width: 100%;
        height: 2px;
        bottom: 5px;
        left: 0;
        right: 0;
        background-color: ${COLORS.orangeLight};
        transition: 1s;
        opacity: 0;
    }
    &.active {
        &:after {
            opacity: 1;
        }
    }
`;

export const Image = styled.nav`
    display: block;
    width: 40px;
    height: 40px;
    background-color: ${COLORS.white};
    background-image: ${p => p.image ?  `url(${p.image})` : 'none'};
    margin-right: 10px;
    border-radius: 6px;
`;