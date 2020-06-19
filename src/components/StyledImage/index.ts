import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

// exported for use in animating Gatsby Img elements
export const upAndDownAnim = keyframes`
  0% {
    transform: translateY(-0.1rem)
  }

  50% {
    transform: translateY(0rem)
  }

  100% {
    transform: translateY(-0.1rem)
  }
`

const StyledImage = styled(motion.img)`
  width: 100%;
  animation: ${upAndDownAnim} 1s infinite paused;

  :hover {
    animation-play-state: running;
  }
`

export default StyledImage
