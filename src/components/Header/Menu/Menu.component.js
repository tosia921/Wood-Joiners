import React from "react";
import { bool } from 'prop-types';

import { MenuContainer, NavMenuItem } from './Menu.styles';

const Menu = ({open}) => {
    return (
        <MenuContainer open={open}>
            <NavMenuItem activeStyle={{color: '${({ theme }) => theme.PrimaryTextColor}'}} to="/">HOME</NavMenuItem>
            <NavMenuItem to="/">ABOUT</NavMenuItem>
            <NavMenuItem activeStyle={{color: '${({ theme }) => theme.PrimaryTextColor}'}} to="/Process">PROCESS</NavMenuItem>
            <NavMenuItem to="/">PROJECTS</NavMenuItem>
            <NavMenuItem to="/">CONTACT</NavMenuItem>
        </MenuContainer>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;