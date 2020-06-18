import styled from "styled-components"
import device from "@/utils/media"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.nav)`
  padding: 0.8rem 1.5rem;
  display: grid;
  grid-template-columns: 10fr 1fr;
  align-items: center;
  width: 100%;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  background-color: ${props => props.theme.colors.background}D9;
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);

  @media ${device.tablet} {
    padding: 0.8rem 4rem;
    grid-template-columns: 1fr 1fr;
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

export const DesktopNavItemsList = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, min-content);
    justify-content: flex-end;
    align-items: center;
    column-gap: 3rem;
  }
`

export const NavItem = styled.li`
  text-transform: uppercase;
  display: block;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  :hover {
    transform: translateX(-0.6rem) scale(1.1);
    color: ${props => props.theme.colors.primary};
  }

  :active {
    transform: translateX(0rem) scale(1);
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`

export const ContactBtn = styled.div`
  button {
    border: 0.2rem solid ${props => props.theme.colors.primary};
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    border-radius: 0.7rem;
    font-size: 2rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.4rem;

    :hover {
      transform: translateY(0rem);
      color: ${props => props.theme.colors.background};
      background-color: ${props => props.theme.colors.primary};
    }

    :active {
      transform: translateY(0rem);
    }

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
`

export const MobileNavItemsList = styled(motion.ul)`
  position: fixed;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 3rem;
  padding-top: 3.2rem;
  padding-bottom: 4rem;
  align-content: center;
  justify-items: center;
  transform-origin: top center;
  width: 100%;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-right: none;
  background-color: ${props => props.theme.colors.background}D9;
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);

  @media ${device.tablet} {
    display: none;
  }
`

export const MobileIcon = styled(motion.svg)`
  justify-self: flex-end;
  height: 65%;
  cursor: pointer;

  path {
    height: 100%;
    width: 100%;
  }

  @media ${device.tablet} {
    display: none;
  }
`
