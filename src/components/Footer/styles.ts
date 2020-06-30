import styled from "styled-components"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.footer)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 2rem;
  justify-items: center;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

export const Socials = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  column-gap: 1.5rem;
`

export const FooterText = styled(motion.p)`
  color: inherit;
  opacity: 0.8;
  font-size: 1.4rem;
  white-space: nowrap;
`

export const SvgIcon = styled.img`
  height: 100%;
  width: 3rem;
  height: 3rem;
`
