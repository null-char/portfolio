import React from "react"
import { PageProps } from "gatsby"
import SEO from "@/components/seo"
import Layout from "@/components/layout"
import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Sections from "@/components/Sections"
import Cards from "@/components/Cards"
import Projects from "@/components/Projects"
import styled from "styled-components"
import { SMOOTH_SCROLL_ID } from "@/utils/constants"

const GridContainer = styled.main`
  display: grid;
  grid-template-rows: auto;
  row-gap: 15rem;
  padding-top: 6.4rem;

  padding-bottom: 20rem; /* temporary padding */
`

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Null Char | Freelance Web Developer" />

    <Header />
    <div id={SMOOTH_SCROLL_ID}>
      <GridContainer>
        <div>
          <Intro />
          <Sections />
        </div>

        <Cards />
        <Projects />
      </GridContainer>
    </div>
  </Layout>
)

export default Home
