import React, { useEffect, useContext } from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "gatsby"
import BGTexture from "../components/presentational/util/bg-texture"
import PanelScrnContainer from "../components/presentational/panel-screen-container"
import BlendCtrlsContainer from "../components/presentational/blend-controls-container"
import ModeArticle from "../components/content/mode-article"

import { NavContext } from "../components/functional/layout"

const StyledPanelPage = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh auto;
  position: relative;
`

const PanelPage = () => {
  const { fromLanding } = useContext(NavContext)
  console.log("PanelPage: ", fromLanding)

  useEffect(() => {
    if (!fromLanding) {
      navigate("/")
    }
  }, [])

  return (
    <StyledPanelPage>
      {/* {console.log("FL(p): ", fromLanding)} */}
      <BGTexture />
      <PanelScrnContainer />
      <BlendCtrlsContainer />
      <ModeArticle />
    </StyledPanelPage>
  )
}

export default PanelPage
