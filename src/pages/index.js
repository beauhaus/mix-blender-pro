import React, { useState, useEffect, createContext } from "react"
import styled from "styled-components"
import "normalize.css"
import "../styles/index.scss"

import Landing from "../components/content/landing-txt"
import BGTexture from "../components/presentational/util/bg-texture"
import LandingLogo from "../components/presentational/icon-components/landing-logo"
// import PowerBtn from "../components/functional/power-btn"
const IdxWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  position: relative;
`
export const AppContext = createContext()

const IndexPage = () => {
  return (
    <IdxWrapper className="index-wrapper">
      {/* <BGTexture /> */}
      {/* <LandingLogo />
      <Landing /> */}
    </IdxWrapper>
  )
}

export default IndexPage
