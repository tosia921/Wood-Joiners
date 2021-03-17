import React, { useState } from "react"
import Burger from "./Burger/Burger.component"
import Logo from "./Logo/Logo.component"
import Menu from "./Menu/Menu.component"

import { Nav } from "./Header.styles"

//Animations
import { headerAnimation } from "../../framerMotionAnimations/animation"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <Nav variants={headerAnimation} initial="hidden" animate="show">
      <Logo />
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </Nav>
  )
}

export default Header
