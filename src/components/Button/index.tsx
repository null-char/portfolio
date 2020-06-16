import React, { useRef } from "react"
import { TapInfo } from "framer-motion"
import { Wrapper, Ink, VariantProps } from "@/components/Button/styles"

type ButtonProps = VariantProps

/**
 * A Button component with a tap effect akin to Material design buttons.
 * 
 * Provide it with props dictating which variant it should be. By default it is set to secondary
   variant which is whiteish in color.
 */
const Button: React.FC<ButtonProps> = props => {
  const parentRef = useRef<HTMLButtonElement>(undefined)
  const inkRef = useRef<HTMLSpanElement>(undefined)

  const onButtonTap = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const { current: parent } = parentRef
    const { current: ink } = inkRef

    // remove the animate class if it is already attached
    if (ink.classList.contains("animate")) ink.classList.remove("animate")

    ink.style.width = ink.style.height = `${Math.max(
      parent.offsetWidth,
      parent.offsetHeight
    )}px`
    ink.style.left = `${event.nativeEvent.offsetX - ink.offsetWidth / 2}px`
    ink.style.top = `${event.nativeEvent.offsetY - ink.offsetHeight / 2}px`
    // add "animate" class which specifies the actual ripple animation
    ink.classList.add("animate")
  }

  return (
    <Wrapper ref={parentRef} {...props} onClick={onButtonTap}>
      <Ink ref={inkRef}></Ink>
      {props.children}
    </Wrapper>
  )
}

export default Button
