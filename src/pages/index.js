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

  background-size: contain;
  background-repeat: repeat-y;
  background-height: 100vh;
  background-color: linear-gradient(
    90deg,
    #97552e 0%,
    #a2563d 25%,
    #cc895f 75%,
    #9d5a2f 100%
  );
  background-position: top 0% center;
  position: absolute;
  top: 0;
  left: 0;
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
