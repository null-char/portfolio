import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, Variants, Orchestration, Spring } from "framer-motion"

type AnimationTypes = "fade" | "slide" | "skewedSlide"

/**
 * A hook which handles animation logic for scroll animations. Uses framer motion's `useAnimation` hook internally. Uses a "spring" animation.
 *
 * @param type Type of animation to play. Set to "fade" by default.
 * @param options Provide animation transition options.
 *
 * @returns An object containing `ref`, `controls` and `variants`
 * Provide ref to the motion component to be scroll animated. Provide controls and variants to the parent and optionally its children (also must be motion components) if you wish to do stagger animations. The `staggerChildren` transiton property is set to 0.1 seconds by default.
 *
 */
export const useScrollAnimation = (
  type?: AnimationTypes,
  options?: Orchestration & Partial<Spring>
) => {
  const animation = type || "fade"

  const [ref, inView] = useInView()
  const controls = useAnimation()
  controls.setDefaultTransition({
    type: "spring",
    stiffness: 30,
    mass: 0.3,
    staggerChildren: 0.1,
    ...options,
  })

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
    skewedSlide: {
      visible: {
        opacity: 1,
        translateX: "0%",
        skewX: "0deg",
      },
      hidden: {
        opacity: 0,
        translateX: "-100%",
        skewX: "45deg",
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const variants = allVariants[animation]

  return {
    ref,
    controls,
    variants,
  }
}
