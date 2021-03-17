import React from "react"
import { StyledBurger } from "./Burger.styles"
import { bool, func } from "prop-types"

const Burger = ({ open, setOpen }) => {
  return <StyledBurger open={open} onClick={() => setOpen(!open)} />
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
