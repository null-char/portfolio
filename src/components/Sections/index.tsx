import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {
  Wrapper,
  SectionWrapper,
  TextContent,
  SvgImage,
  InnerWrapper,
} from "@/components/Sections/styles"

type QueryData = {
  allSectionsYaml: {
    edges: {
      node: {
        heading: string
        content: string
        img: {
          publicURL: string
        }
        id: string
      }
    }[]
  }
}

const Sections: React.FC = () => {
  const data = useStaticQuery<QueryData>(graphql`
    {
      allSectionsYaml {
        edges {
          node {
            heading
            content
            img {
              publicURL
            }
            id
          }
        }
      }
    }
  `)
  const {
    allSectionsYaml: { edges: sections },
  } = data

  return (
    <Wrapper>
      <InnerWrapper>
        {sections.map(({ node: section }, i) => {
          const { ref, controls, variants } = useScrollAnimation("slide")

          return (
            <SectionWrapper
              ref={ref}
              animate={controls}
              variants={variants}
              key={section.id}
            >
              <TextContent animate={controls} variants={variants}>
                <Subheading>{section.heading}</Subheading>
                <Paragraph>{section.content}</Paragraph>
              </TextContent>

              <SvgImage
                src={section.img.publicURL}
                animate={controls}
                variants={variants}
              />
            </SectionWrapper>
          )
        })}
      </InnerWrapper>
    </Wrapper>
  )
}

export default Sections
