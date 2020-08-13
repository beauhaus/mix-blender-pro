import React from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"
import BGTexture from "../components/presentational/util/bg-texture"
import PanelScrnContainer from "../components/presentational/panel-screen-container"
import BlendCtrlsContainer from "../components/presentational/blend-controls-container"
import ModeArticle from "../components/content/mode-article"

const StyledBlenderPage = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh auto;
  position: relative;
`
const BlenderPage = () => {
  return (
    <StyledBlenderPage>
      <BGTexture />
      <PanelScrnContainer />
      <BlendCtrlsContainer />
      <ModeArticle />
    </StyledBlenderPage>
  )
}

export default BlenderPage
