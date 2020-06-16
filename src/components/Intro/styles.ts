import styled from "styled-components"
import { motion } from "framer-motion"
import device from "@/utils/media"

export const Wrapper = styled(motion.section)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 3rem;
  padding: 0rem 2rem;
  height: 80vh;
  align-content: center;

  @media ${device.tablet} {
    grid-template-columns: 80%;
    justify-content: center;
    justify-items: center;
    height: 70vh;
  }
`

export const TextContent = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;

  p {
    text-align: center;
  }

  @media ${device.tablet} {
    p {
      width: 70%;
      text-align: center;
    }
    justify-items: center;
  }

  @media ${device.laptop} {
    p {
      width: 50%;
    }
  }
`

export const ColoredText = styled.span`
  display: inline-block; /* force a line break for this one */
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const Buttons = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${device.tablet} {
    width: 30rem;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
`
