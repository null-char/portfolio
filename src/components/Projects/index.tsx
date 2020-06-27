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
  // for the paragraph at the very bottom
  const {
    ref: pRef,
    controls: pControls,
    variants: pVariants,
  } = useScrollAnimation("slide")

  return (
    <Wrapper ref={ref} animate={controls} variants={variants} id="projects">
      <Subheading>My Projects</Subheading>

      <ProjectsGrid>
        {projects.map(({ node: project }, idx) => {
          const shouldSlideRight = (idx + 1) % 2 !== 0
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

      <motion.p ref={pRef} animate={pControls} variants={pVariants}>
        Want to see more? Check out my{" "}
        <a
          href="https://github.com/null-char/repositories"
          target="_blank"
          rel="noopener"
        >
          GitHub profile
        </a>
        .
      </motion.p>
    </Wrapper>
  )
}

export default Projects
