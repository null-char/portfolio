import styled from "styled-components"
import device from "@/utils/media"

export const Wrapper = styled.nav`
  background-color: ${props => props.theme.colors.background};
  padding: 0.8rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    padding: 0.8rem 4rem;
  }
`

// div containing the logo and the name
export const Logo = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 2rem;
  align-items: center;
  width: 100%;

  img {
    width: 4.3rem;
    border-radius: 50%;
  }
`

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8rem;
`

export const NavItemsList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, min-content);
    justify-content: flex-end;
    column-gap: 3rem;
  }
`

export const NavItem = styled.li`
  text-transform: uppercase;
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  :hover {
    transform: translateX(-0.6rem) scale(1.1);
    color: ${props => props.theme.colors.primary};
  }

  :active {
    transform: translateX(0rem) scale(1);
  }
`
