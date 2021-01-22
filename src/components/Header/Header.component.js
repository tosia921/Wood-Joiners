import React, { useState } from 'react';
import Burger from './Burger/Burger.component';
import Logo from './Logo/Logo.component';
import Menu from './Menu/Menu.component';


import { Nav } from './Header.styles';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <Nav
            initial={{y: -300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.7, durtion: 5}}
        >
            <Logo/>
            <Menu open={open} setOpen={setOpen}/>
            <Burger open={open} setOpen={setOpen}/>
        </Nav>
    )
}

export default Header;