import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "#ff8906" : "#f25f4c")};
  padding: 1.5rem 6rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
  text-shadow: 5px 5px 10px rgba(0,0,0,0.7);
  font-size: 2.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in;
  border-radius: 30px;
  text-align: center;
  letter-spacing: 1.1px;
  text-decoration: none;
  text-transform: uppercase;


  @media screen and (max-width: 768px) {
    margin: 0 0.5rem;
    font-size: 1.4rem;
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.PrimaryTextColor};
    transform: translateY(-2px);
    box-shadow: 0px 15px 20px -10px #000000;
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0px 10px 13px -7px #000000;
  }
`
