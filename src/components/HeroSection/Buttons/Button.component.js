import React from "react"
import { StyledButton } from "./Button.styles"
import { Link } from "gatsby"

const Button = ({ text, dest, ...props }) => {
  return (
    <StyledButton as={Link} to={dest} {...props}>
      {text}
    </StyledButton>
  )
}

export default Button
