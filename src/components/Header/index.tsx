import React from "react"
import Nav from "@/components/Nav"
import { Wrapper } from "@/components/Header/styles"

const Header: React.FC = () => {
  return (
    <Wrapper
      animate={{ translateY: "0%" }}
      initial={{ translateY: "-200%" }}
      transition={{ type: "spring", mass: 0.3, stiffness: 40 }}
    >
      <Nav />
    </Wrapper>
  )
}

export default Header
