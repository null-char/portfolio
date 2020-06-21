import styled from "styled-components"
import device from "@/utils/media"
import Paragraph from "@/components/Paragraph"
import { motion } from "framer-motion"

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 4rem;
  padding: 0rem 3rem;
  margin-top: -7rem;

  @media ${device.tabletL} {
    padding: 0rem 5rem;
  }

  @media ${device.laptop} {
    padding: 0rem 7rem;
  }

  @media ${device.laptopL} {
    padding: 0rem 10rem;
  }
`

export const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 4rem;
  justify-items: center;
  justify-self: center;

  @media ${device.tablet} {
    grid-template-columns: 35rem;
  }

  @media ${device.tabletL} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }

  @media ${device.laptop} {
    column-gap: 5rem;
  }
`

export const Card = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  width: 100%;
  row-gap: 1.5rem;
  justify-items: center;
  padding: 3rem 0rem;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translateY(-0.2rem);
  }
`

export const CardMain = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  justify-items: center;
`

export const SVGImg = styled.img`
  width: 7rem;
  height: 7rem;
`

export const ColoredText = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.6rem;
  text-transform: none;
`

export const CenteredHeading = styled(motion.h2)`
  font-size: 2.7rem;
  font-weight: 700;
  font-family: Fira Sans, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  @media ${device.tablet} {
    font-size: 3.7rem;
  }
`

export const CardText = styled(motion.p)`
  line-height: 1.45;
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  text-align: center;
  padding: 0rem 2rem;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`
