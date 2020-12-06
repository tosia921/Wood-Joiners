import React from "react";

import { MenuContainer, NavMenuItem } from './Menu.styles';

const Menu = () => {
    return (
        <MenuContainer >
            <NavMenuItem activeStyle={{color: '${({ theme }) => theme.PrimaryTextColor}'}} to="/">HOME</NavMenuItem>
            <NavMenuItem to="/">ABOUT</NavMenuItem>
            <NavMenuItem activeStyle={{color: '${({ theme }) => theme.PrimaryTextColor}'}} to="/Process">PROCESS</NavMenuItem>
            <NavMenuItem to="/">PROJECTS</NavMenuItem>
            <NavMenuItem to="/">CONTACT</NavMenuItem>
        </MenuContainer>
    )
}

export default Menu;