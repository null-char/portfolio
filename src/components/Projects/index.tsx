import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import Subheading from "@/components/Subheading"
import Img, { FluidObject } from "gatsby-image"
import {
  Wrapper,
  ProjectsGrid,
  Content,
  ProjectItem,
  ProjectHeading,
  ProjectDesc,
  ProjectImage,
  BtnsContainer,
  BtnWrapper,
} from "@/components/Projects/styles"
import Button from "@/components/Button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

type QueryData = {
  allProjectsYaml: {
    edges: {
      node: {
        img: {
          childImageSharp: {
            fluid: FluidObject | FluidObject[]
          }
        }
        name: string
        description: string
        siteAvailable: boolean
        siteURL: string
        sourceURL: string
        id: string
      }
    }[]
  }
}

const Projects: React.FC = () => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            description
            siteAvailable
            siteURL
            sourceURL
            id
          }
        }
      }
    }
  `)

  const {
    allProjectsYaml: { edges: projects },
  } = data
  const { ref, controls, variants } = useScrollAnimation("slide")

  return (
    <Wrapper ref={ref} animate={controls} variants={variants}>
      <Subheading>My Projects</Subheading>

      <ProjectsGrid>
        {projects.map(({ node: project }, idx) => {
          const shouldSlideRight = (idx + 1) % 2 !== 0

          // kind of a hacky fix but because of the order of elements, stagger children
          // will have to be set to 0 for right slides.
          const { ref, controls, variants } = useScrollAnimation(
            shouldSlideRight ? "slideRight" : "slide"
          )

          return (
            <ProjectItem
              ref={ref}
              animate={controls}
              variants={variants}
              key={project.id}
            >
              <ProjectImage animate={controls} variants={variants}>
                <Img fluid={project.img.childImageSharp.fluid} />
              </ProjectImage>

              <Content>
                <ProjectHeading animate={controls} variants={variants}>
                  {project.name}
                </ProjectHeading>

                <motion.div animate={controls} variants={variants}>
                  {/* to allow for basic formatting */}
                  <ProjectDesc
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </motion.div>

                <BtnsContainer animate={controls} variants={variants}>
                  {project.siteAvailable && project.siteURL && (
                    <BtnWrapper>
                      <Button linkTo={project.siteURL}>View Site</Button>
                    </BtnWrapper>
                  )}

                  <BtnWrapper>
                    <Button linkTo={project.sourceURL}>View Source</Button>
                  </BtnWrapper>
                </BtnsContainer>
              </Content>
            </ProjectItem>
          )
        })}
      </ProjectsGrid>
    </Wrapper>
  )
}

export default Projects
