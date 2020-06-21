import React, { useState } from "react"
import { motion, Variants, useAnimation } from "framer-motion"
import logoSvg from "@/assets/logo.svg"
import scrollTo from "@/utils/scrollTo"
import theme from "@/themes/theme"
import Button from "@/components/Button"
import {
  Wrapper,
  Logo,
  Name,
  DesktopNavItemsList,
  NavItem,
  ContactBtn,
  MobileIcon,
  MobileNavItemsList,
} from "@/components/Nav/styles"

const barsVariants: Variants = {
  open: {
    opacity: 0,
    pathLength: 0,
    translateY: "200%",
  },
  closed: {
    opacity: 1,
    pathLength: 1,
    translateY: "0%",
  },
}

const timesVariants: Variants = {
  open: {
    opacity: 1,
    pathLength: 1,
    translateY: "0%",
  },
  closed: {
    opacity: 0,
    pathLength: 0,
    translateY: "-200%",
  },
}

const Nav: React.FC = () => {
  // for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // mobile exclusive animations
  const navControls = useAnimation()
  const dropDownControls = useAnimation()
  const navScrollTo = (elementId: string) => {
    // start scroll
    scrollTo(elementId)

    // close menu if opened (which it should be if on mobile)
    if (isMenuOpen) onIconClick()
  }

  const navItemsJSX = (
    <>
      <NavItem>Social</NavItem>
      <NavItem onClick={() => navScrollTo("projects")}>Projects</NavItem>
      <ContactBtn>
        <Button primary>Contact</Button>
      </ContactBtn>
    </>
  )

  const onIconClick = async () => {
    if (!isMenuOpen) {
      // take away the translucency first
      await navControls.start({
        backgroundColor: `rgba(${theme.colors.rgbBackground}, 1)`,
      })
      await dropDownControls.start({ translateY: "0%" })
    } else {
      // bring back the translucency
      await navControls.start({
        backgroundColor: `rgba(${theme.colors.rgbBackground}, 0.8)`,
      })
      await dropDownControls.start({ translateY: "-150%" })
    }

    // just to be safe, change state last
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper transition={{ duration: 0.1 }} animate={navControls}>
      <Logo>
        <img src={logoSvg} alt="null char logo" />
        <Name>Null Char</Name>
      </Logo>

      <DesktopNavItemsList>{navItemsJSX}</DesktopNavItemsList>

      <MobileNavItemsList
        initial={{ translateY: "-150%" }}
        transition={{ duration: 0.2 }}
        // animate={isMenuOpen ? { translateY: "0%" } : { translateY: "-150%" }}
        animate={dropDownControls}
      >
        {navItemsJSX}
      </MobileNavItemsList>

      <MobileIcon
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        onClick={onIconClick}
      >
        {/* the "hamburger" icon */}
        <motion.path
          data-icon="bars"
          fill={theme.colors.text}
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          variants={barsVariants}
          initial={{ opacity: 1, pathLength: 1, translateY: "0%" }}
          animate={isMenuOpen ? "open" : "closed"}
        ></motion.path>

        {/* the "close" icon */}
        <motion.path
          data-icon="times"
          fill={theme.colors.text}
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          variants={timesVariants}
          initial={{ opacity: 0, pathLength: 0, translateY: "-200%" }}
          animate={isMenuOpen ? "open" : "closed"}
        ></motion.path>
      </MobileIcon>
    </Wrapper>
  )
}

export default Nav
