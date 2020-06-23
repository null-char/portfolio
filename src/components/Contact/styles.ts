import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import device from "@/utils/media"

// background wrapper
export const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};

  p {
    color: inherit;
  }

  h2 {
    color: inherit;
  }
`

// content wrapper. wraps around heading and form
export const InnerWrapper = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 4rem;
  padding: 3rem 2rem;

  @media ${device.tablet} {
    padding: 3rem 12rem;
  }

  @media ${device.tabletL} {
    padding: 3rem 25rem;
  }

  @media ${device.laptop} {
    padding: 3rem 30rem;
  }
`

export const TextContent = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 1rem;
`

export const ContactForm = styled(motion.form)`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  row-gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    grid-template-rows: repeat(3, min-content);
    row-gap: 3.5rem;
  }

  input,
  textarea {
    outline: none;
    font-size: 1.4rem;
    font-family: inherit;
    font-weight: 400;
    border: 0.1rem solid ${props => props.theme.colors.background};
    transition: border-width 0.2s ease-in-out;
    background-color: ${props => props.theme.colors.darkText};

    :focus {
      border-width: 0.2rem;
    }
  }
`

export const InputContainer = styled(motion.div)`
  position: relative;
`

type InputProps = {
  isNotEmpty: boolean
}

const labelStyles = css`
  top: -2.5rem;
  opacity: 1;
  font-size: 1.3rem;

  @media ${device.tablet} {
    top: -2rem;
  }
`

export const StyledInput = styled.input<InputProps>`
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;

  :focus + label,
  :valid + label {
    ${labelStyles}
  }

  ${props =>
    props.isNotEmpty &&
    css`
      & + label {
        ${labelStyles}
      }
    `}
`

export const StyledLabel = styled.label`
  opacity: 0.8;
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: Montserrat, sans-serif;
  color: ${props => props.theme.colors.background};
  font-size: 1.4rem;
  transition: 0.2s ease-in-out;
  transition-property: opacity, font-size, top;
  width: 100%;
`

export const TextAreaContainer = styled(motion.div)`
  position: relative;
  width: 100%;

  textarea:focus + label,
  textarea:valid + label {
    ${labelStyles}
  }

  @media ${device.tablet} {
    grid-area: 2 / 1 / 3 / 3;
  }
`

export const MessageTextArea = styled.textarea`
  /* disable user resize */
  resize: none;
  padding: 1rem 1rem;
  line-height: 1.45;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
`

export const SubmitBtn = styled(motion.div)`
  width: 17rem;
  justify-self: center;

  button {
    text-transform: uppercase;
    padding: 1.2rem 1.4rem;
    font-size: 1.8rem;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tabletL} {
      font-size: 1.5rem;
    }
  }

  @media ${device.tablet} {
    grid-area: 3 / 1 / 4 / 4;
    justify-self: flex-start;
  }
`
