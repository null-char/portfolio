import styled from "styled-components"
import device from "@/utils/media"

const Subheading = styled.h2`
  font-size: 2.7rem;
  font-weight: 700;
  font-family: Fira Sans, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  @media ${device.tablet} {
    text-align: left;
    font-size: 3.7rem;
  }
`

export default Subheading
