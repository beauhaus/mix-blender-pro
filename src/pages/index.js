import React, { useState, useEffect, createContext } from "react"
import useBGImage from "../components/functional/util/hooks/use-bg-img"
import Landing from "../components/content/landing-txt"
import LandingLogo from "../components/presentational/icon-components/landing-logo"
import "normalize.css"
import "../styles/index.scss"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// import BGTexture from "../components/presentational/util/bg-texture"
// import PowerBtn from "../components/functional/power-btn"

const StyledImgBackground = styled(BackgroundImage)`
  width: 100vw;
  min-height: 100vh;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-height: 100vh;
  background-color: linear-gradient(
    90deg,
    #97552e 0%,
    #a2563d 25%,
    #cc895f 75%,
    #9d5a2f 100%
  );
  background-position: top center;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 13vh 70vh 17vh;
  svg {
    grid-column: 1;
    grid-row: 2;
  }
  section {
    grid-column: 1;
    grid-row: 2;
  }
`
export const AppContext = createContext()

const IndexPage = props => {
  const bgImg = useBGImage()

  return (
    <StyledImgBackground fluid={bgImg} className="index-wrapper">
      <LandingLogo />
      <Landing />
    </StyledImgBackground>
  )
}

export default IndexPage
