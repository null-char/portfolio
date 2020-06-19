import styled, { css, keyframes } from "styled-components"

const RIPPLE_ANIM_DUR = 600 // in milliseconds

export type VariantProps = {
  primary?: boolean
}

const ripple = keyframes`
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
`

export const Ink = styled.span`
  display: block;
  position: absolute;
  border-radius: 100%;
  transform: scale(0);
  background: rgba(0, 0, 0, 0.1);
`

const styles = css<VariantProps>`
  width: 100%;
  position: relative;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1rem 0rem;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.text};
  box-shadow: 0rem 0.3rem 0.6rem ${props => props.theme.colors.text}26;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-0.1rem);
    box-shadow: 0rem 0.5rem 0.6rem ${props => props.theme.colors.text}26;
  }

  :active {
    transform: translateY(0.05rem);
    box-shadow: 0rem 0.35rem 0.6rem ${props => props.theme.colors.text}26;
  }

  .animate {
    animation: ${ripple} ${RIPPLE_ANIM_DUR}ms linear;
  }

  ${Ink} {
    background: ${props => props.primary && "rgba(255, 255, 255, 0.5)"}
  }

  /* :focus {
    border: 0.2rem dashed ${props => props.theme.colors.primary};
  } */

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 0rem 0.3rem 0.6rem ${props => props.theme.colors.primary}26;

      :hover {
        box-shadow: 0rem 0.5rem 0.6rem ${props => props.theme.colors.primary}26;
      }

      :active {
        box-shadow: 0rem 0.35rem 0.6rem ${props =>
          props.theme.colors.primary}26;
      }

      /* :focus {
        border: 0.2rem dashed ${props => props.theme.colors.text};
      } */
    `}
`

// default is secondary state
export const Wrapper = styled.button`
  ${styles}
`

// anchor tag version
export const LinkWrapper = styled.a`
  ${styles}
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
