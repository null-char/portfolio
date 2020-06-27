import styled from "styled-components"
import { motion } from "framer-motion"
import Paragraph from "@/components/Paragraph"
import device from "@/utils/media"
import { upAndDownAnim } from "@/components/StyledImage"

export const Wrapper = styled(motion.section)`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 4rem;
  padding: 0rem 2rem;

  /* align subheading to center */
  h2 {
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.35;
  }

  @media ${device.tabletL} {
    padding: 0rem 5rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 10rem;
`

export const ProjectItem = styled(motion.section)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }

  @media ${device.tabletL} {
    column-gap: 5rem;
  }
`

export const Content = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 2rem;

  @media ${device.tabletL} {
    p {
      width: 90%;
    }
  }
`

export const ProjectImage = styled(motion.div)`
  position: relative;
  z-index: 5;
  cursor: pointer;
  width: 100%;
  opacity: 0.8; /* dim it a bit */
  animation: ${upAndDownAnim} 1s infinite paused;

  :hover {
    animation-play-state: running;
  }

  img {
    border-radius: 1rem;
  }

  @media ${device.tablet} {
    grid-area: 1 / 2 / 1 / 2;
    margin-top: 1rem;
  }
`

export const ProjectHeading = styled(motion.h3)`
  font-size: 2.2rem;
  text-align: left;

  @media ${device.tablet} {
    font-size: 3.2rem;
  }
`

export const ProjectDesc = styled(Paragraph)`
  position: relative;
  z-index: -1;
`

export const BtnsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 2rem;
  align-items: center;
`

// to restrict width
export const BtnWrapper = styled.div`
  width: 11rem;

  :not(:first-of-type) {
    button,
    a {
      background-color: transparent;
      border: 0.2rem solid ${props => props.theme.colors.text};
      color: ${props => props.theme.colors.text};
      padding: 0.8rem 0rem;

      :hover {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
      }
    }
  }

  button,
  a {
    font-size: 1.4rem;
  }
`
