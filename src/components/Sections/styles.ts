import styled from "styled-components"
import { motion } from "framer-motion"
import device from "@/utils/media"
import StyledImage from "@/components/StyledImage"

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  padding: 15rem 2rem;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);

  p {
    color: inherit;
  }

  h2 {
    color: inherit;
  }

  @media ${device.tablet} {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  }

  @media ${device.laptop} {
    padding: 20rem 5rem;
  }
`

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 10rem;

  @media ${device.tablet} {
    row-gap: 15rem;
  }
`

export const SectionWrapper = styled(motion.section)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 4rem;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1.3fr;
    column-gap: 5rem;
  }
`

export const TextContent = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;

  @media ${device.tablet} {
    margin-top: 2rem;
  }
`

export const SvgImage = styled(StyledImage)`
  @media ${device.tablet} {
    height: 35rem;
  }
`
