import React from "react"
import { PageProps } from "gatsby"
import Layout from "@/components/layout"
import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Sections from "@/components/Sections"
import Cards from "@/components/Cards"
import styled from "styled-components"

const GridContainer = styled.main`
  display: grid;
  grid-template-rows: auto;
  row-gap: 7rem;
  padding-top: 6.4rem;
`

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <GridContainer id="smooth-scroll">
      <div>
        <Intro />
        <Sections />
      </div>

      <Cards />
    </GridContainer>
  </Layout>
)

export default Home
