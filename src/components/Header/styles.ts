import styled from "styled-components"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  box-shadow: 0rem 0.4rem 0.6rem ${props => props.theme.colors.background}26;
`
