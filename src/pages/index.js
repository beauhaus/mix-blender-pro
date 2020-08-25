import React, { useState, useEffect, createContext } from "react"
import useBGImage from "../components/functional/util/hooks/use-bg-img"
import Landing from "../components/content/landing-txt"
import LandingLogo from "../components/presentational/icon-components/landing-logo"
import "normalize.css"
import "../styles/index.scss"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

const StyledImgBackground = styled(BackgroundImage)`
  width: 100vw;
  min-height: 100vh;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-height: 100vh;
  background-color: linear-gradient(
    270deg,
    #000 0%,
    #000 25%,
    #000 75%,
    #000 100%
  );
  background-position: top center;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 13vh 70vh 17vh;
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
