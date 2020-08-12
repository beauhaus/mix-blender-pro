import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import PowerBtn from "./power-btn"

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-width: 2200px;
  height: 12vh;
  z-index: 10;
  padding-top: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(234, 20, 120, 0.5);
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <PowerBtn />
    </StyledHeader>
  )
}

export default Header
