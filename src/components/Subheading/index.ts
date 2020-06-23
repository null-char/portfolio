import styled from "styled-components"
import device from "@/utils/media"

type SubheadingProps = {
  center?: boolean
}
const Subheading = styled.h2<SubheadingProps>`
  font-size: 2.7rem;
  font-weight: 700;
  font-family: Fira Sans, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  @media ${device.tablet} {
    text-align: ${props => (props.center ? "center" : "left")};
    font-size: 3.7rem;
  }
`

export default Subheading
