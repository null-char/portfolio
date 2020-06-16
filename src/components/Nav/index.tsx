import React from "react"
import logoSvg from "@/assets/logo.svg"
import {
  Wrapper,
  Logo,
  Name,
  NavItemsList,
  NavItem,
} from "@/components/Nav/styles"

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logoSvg} alt="null char logo" />
        <Name>Null Char</Name>
      </Logo>

      <NavItemsList>
        <NavItem>Social</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </NavItemsList>
    </Wrapper>
  )
}

export default Nav
