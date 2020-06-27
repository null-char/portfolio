import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "@/components/Heading"
import Paragraph from "@/components/Paragraph"
import Button from "@/components/Button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {
  Wrapper,
  ColoredText,
  TextContent,
  Buttons,
  ButtonContainer,
} from "@/components/Intro/styles"
import scrollTo from "@/utils/scrollTo"

const SCROLL_DELAY = 150

type QueryData = {
  introYaml: {
    heading: {
      main: string
      sub: string
    }
    content: string
    primaryBtnText: string
    secondaryBtnText: string
  }
}

const Intro: React.FC = () => {
  const { introYaml: intro }: QueryData = useStaticQuery(graphql`
    query {
      introYaml {
        heading {
          main
          sub
        }
        content
        primaryBtnText
        secondaryBtnText
      }
    }
  `)

  const { ref, controls, variants } = useScrollAnimation("slide")

  return (
    <Wrapper ref={ref} animate={controls} variants={variants}>
      <TextContent animate={controls} variants={variants}>
        <Heading>
          {intro.heading.sub} <br />{" "}
          <ColoredText>{intro.heading.main}</ColoredText>
        </Heading>
        <Paragraph>{intro.content}</Paragraph>
      </TextContent>

      <Buttons animate={controls} variants={variants}>
        <ButtonContainer
          onClick={() =>
            scrollTo("contact", { offset: -70, delay: SCROLL_DELAY })
          }
        >
          <Button primary>Contact Me</Button>
        </ButtonContainer>

        <ButtonContainer
          onClick={() => scrollTo("projects", { delay: SCROLL_DELAY })}
        >
          <Button>Projects</Button>
        </ButtonContainer>
      </Buttons>
    </Wrapper>
  )
}

export default Intro
