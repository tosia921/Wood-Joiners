import React from 'react';
import Burger from './Burger/Burger.component';
import Logo from './Logo/Logo.component';
import Menu from './Menu/Menu.component';

import { Nav } from './Header.styles';


const Header = () => {
    return (
        <Nav>
            <Logo/>
            <Menu/>
            <Burger/>
        </Nav>
    )
}

export default Header;