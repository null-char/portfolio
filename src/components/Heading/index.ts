import styled from "styled-components"
import device from "@/utils/media"

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: Fira Sans, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  @media ${device.tablet} {
    font-size: 4rem;
  }
`

export default Heading
