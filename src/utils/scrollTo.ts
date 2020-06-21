import Scrollbar from "smooth-scrollbar"
import { SMOOTH_SCROLL_ID } from "@/utils/constants"

type Options = {
  offset?: number
  delay?: number
}

/**
 * Helper function for scrolling to a container with the provided id.
 * @param elementId Id of the element to scroll to
 * @param offset How many additional pixels to traverse. Provide a negative offset for reverse effect.      Default value is -100.
 * @param delay How many milliseconds to wait before initiating scroll. Default is 0ms.
 *
 * ! Intended for vertical scrolls ONLY
 */
const scrollTo = (elementId: string, options?: Options) => {
  const configuredOptions = {
    offset: -100,
    delay: 0,
    ...options,
  }
  const { delay, offset } = configuredOptions

  const scrollbarInstance = Scrollbar.get(
    document.querySelector(`#${SMOOTH_SCROLL_ID}`)
  )
  const element = document.getElementById(elementId)
  const yPosition = element.offsetTop + offset
  const duration = yPosition / 2.5

  // only scroll if the desired y position is actually different from the current scroll offset
  if (scrollbarInstance.offset.y !== yPosition) {
    setTimeout(() => scrollbarInstance.scrollTo(0, yPosition, duration), delay)
  }
}

export default scrollTo
