import React, { useState, createContext, useEffect } from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"
import BGTexture from "../components/presentational/bg-texture"

const StyledPanel = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
`
const PanelPage = () => {
  return (
    <StyledPanel>
      <BGTexture />
      <h1>TITLE</h1>
    </StyledPanel>
  )
}

export default PanelPage
