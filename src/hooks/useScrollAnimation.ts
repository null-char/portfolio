import { useEffect } from "react"
import { useInView, IntersectionOptions } from "react-intersection-observer"
import {
  useAnimation,
  Variants,
  Orchestration,
  Spring,
  Tween,
  AnimationControls,
  Transition,
} from "framer-motion"

type AnimationTypes = "fade" | "slide"
type Options = {
  animation?: Orchestration & Partial<Spring | Tween>
  intersection?: IntersectionOptions
  inViewCallback?: () => void
}
type VariantStates = "visible" | "hidden"

/**
 * A hook which handles animation logic for scroll animations. Uses framer motion's `useAnimation` hook internally. Uses a "spring" animation.
 *
 * @param type Type of animation to play. Set to "fade" by default.
 * @param options Provide animation transition options.
 * @param intersectionOption Provide options for intersection observer
 * @param inViewCallback A callback that will be called whenever the observed node goes out of view or comes into view
 *
 * @returns An object containing `ref`, `controls` and `variants`
 * Provide ref to the motion component to be scroll animated. Provide controls and variants to the parent and optionally its children (also must be motion components) if you wish to do stagger animations. The `staggerChildren` transiton property is set to 0.1 seconds by default.
 *
 */
export const useScrollAnimation = (
  type?: AnimationTypes,
  options?: Options
) => {
  const animation = type || "fade"
  const intersectionOptions = options?.intersection || {}
  const animationOptions = options?.animation || {}

  const [ref, inView] = useInView({ ...intersectionOptions })
  const controls = useAnimation()

  // fade transitions work better with tween
  if (animation === "fade") {
    controls.setDefaultTransition({
      type: "tween",
      duration: 0.1,
      staggerChildren: 0.1,
      ...animationOptions,
    })
  } else {
    controls.setDefaultTransition({
      type: "spring",
      stiffness: 30,
      mass: 0.3,
      staggerChildren: 0.1,
      ...options,
    })
  }

  const allVariants: { [key in AnimationTypes]: Variants } = {
    fade: {
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    },
    slide: {
      visible: {
        opacity: 1,
        translateX: "0%",
      },
      hidden: {
        opacity: 0,
        translateX: "-100%",
      },
    },
  }

  useEffect(() => {
    // use the provided callback if it is provided else default to basic controls
    if (options?.inViewCallback) {
      options.inViewCallback()
    } else {
      if (inView) {
        controls.start("visible")
      } else {
        controls.start("hidden")
      }
    }
  }, [controls, inView, options])

  const variants = allVariants[animation]
  // restrict controls
  controls as AnimationControls & {
    start: (
      definition: VariantStates,
      transitionOverrides: Transition
    ) => Promise<any>
    set: (definition: VariantStates) => void
  }

  return {
    ref,
    controls,
    variants,
    inView,
  }
}
