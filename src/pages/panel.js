import React from "react"
import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"
import BGTexture from "../components/presentational/bg-texture"
// import BlenderScreen from "../components"
const StyledBlenderPage = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh 100vh;
`
const BlenderPage = () => {
  return (
    <StyledBlenderPage>
      <BGTexture />
      {/* <Viewer/> */}
    </StyledBlenderPage>
  )
}

export default BlenderPage