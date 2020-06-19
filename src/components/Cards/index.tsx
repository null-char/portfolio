import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {
  Wrapper,
  CenteredHeading,
  CardsGrid,
  Card,
  CardMain,
  CardText,
  SVGImg,
  ColoredText,
} from "@/components/Cards/styles"

type QueryData = {
  allCardsYaml: {
    edges: {
      node: {
        feat: string
        description: string
        svg: {
          publicURL: string
        }
        id: string
      }
    }[]
  }
}

const Cards: React.FC = () => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allCardsYaml {
        edges {
          node {
            feat
            description
            svg {
              publicURL
            }
            id
          }
        }
      }
    }
  `)

  const {
    allCardsYaml: { edges: cards },
  } = data

  const {
    ref: cRef,
    controls: cControls,
    variants: cVariants,
    inView: cInView,
  } = useScrollAnimation("fade")

  // overrides the useEffect callback to only hide the heading if the Cards' inView state is false
  const {
    ref: hRef,
    controls: hControls,
    variants: hVariants,
    inView: hInView,
  } = useScrollAnimation("slide", {
    inViewCallback: () => {
      if (hInView) {
        hControls.start("visible")
      } else if (!cInView) {
        hControls.start("hidden")
      }
    },
  })

  return (
    <Wrapper>
      <CenteredHeading ref={hRef} animate={hControls} variants={hVariants}>
        My Approach
      </CenteredHeading>

      <CardsGrid ref={cRef} animate={cControls} variants={cVariants}>
        {cards.map(({ node: card }) => (
          <Card animate={cControls} variants={cVariants} key={card.id}>
            <CardMain>
              <SVGImg src={card.svg.publicURL} alt="card svg" />
              <ColoredText>{card.feat}</ColoredText>
            </CardMain>

            <CardText>{card.description}</CardText>
          </Card>
        ))}
      </CardsGrid>
    </Wrapper>
  )
}

export default Cards
