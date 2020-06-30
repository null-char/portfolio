import React from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import githubLogo from "@/assets/github.svg"
import instagramLogo from "@/assets/instagram.svg"
import discordLogo from "@/assets/discord.svg"
import {
  Wrapper,
  Socials,
  FooterText,
  SvgIcon,
} from "@/components/Footer/styles"

const Footer: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation("slideRight")

  return (
    <Wrapper ref={ref} animate={controls} variants={variants}>
      <Socials animate={controls} variants={variants}>
        <a href="https://github.com/null-char" target="_blank" rel="noopener">
          <SvgIcon src={githubLogo} alt="GitHub" />
        </a>
        <a
          href="https://instagram.com/null.char"
          target="_blank"
          rel="noopener"
        >
          <SvgIcon src={instagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://discord.com/users/284293760647430144"
          target="_blank"
          rel="noopener"
        >
          <SvgIcon src={discordLogo} alt="Discord" />
        </a>
      </Socials>

      <FooterText animate={controls} variants={variants}>
        Thank you for your time!
      </FooterText>
    </Wrapper>
  )
}

export default Footer
