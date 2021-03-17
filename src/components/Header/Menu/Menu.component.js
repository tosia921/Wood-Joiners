import React from "react"
import { bool } from "prop-types"

import { MenuContainer, NavMenuItem } from "./Menu.styles"

const Menu = ({ open, setOpen }) => {
  return (
    <MenuContainer open={open}>
      <NavMenuItem
        onClick={() => setOpen(!open)}
        activeStyle={{ color: "#DEA264" }}
        to="/"
      >
        HOME
      </NavMenuItem>
      <NavMenuItem
        onClick={() => setOpen(!open)}
        activeStyle={{ color: "#DEA264" }}
        to="/about"
      >
        ABOUT
      </NavMenuItem>
      <NavMenuItem activeStyle={{ color: "#DEA264" }} to="/process">
        PROCESS
      </NavMenuItem>
      <NavMenuItem activeStyle={{ color: "#DEA264" }} to="/projects">
        PROJECTS
      </NavMenuItem>
      <NavMenuItem
        onClick={() => setOpen(!open)}
        activeStyle={{ color: "#DEA264" }}
        to="/contact"
      >
        CONTACT
      </NavMenuItem>
    </MenuContainer>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
