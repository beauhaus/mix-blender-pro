import React from "react"
import styled from "styled-components"
import "normalize.css"

import "typeface-rajdhani"
import BGTexture from "../bgtexture"
import LandingLogo from "../icon-components/landing-logo"

const StyledIdxPage = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: 80vh;
  position: absolute;
  overflow: hidden;
  background: #555;
  h1 {
    font: normal 4.5rem "Typeface Rajdhani", -apple-system, Segoe UI, Roboto;
  }
`

const IndexPage = () => {
  return (
    <StyledIdxPage className="landing-main">
      <BGTexture />
      <LandingLogo />
      <h2 className="landing-subheading">
        A Web Appliance <br /> for learning
        <br />
        CSS <i>mix-blend-mode</i>
      </h2>
      <h1>CSS Blendr</h1>
    </StyledIdxPage>
  )
}

export default IndexPage
