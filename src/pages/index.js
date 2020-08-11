import React from "react"
import styled from "styled-components"
import "normalize.css"
import "../styles/index.scss"
import Landing from "../components/content/landing"

import "typeface-nanum-pen-script"
import "typeface-warnes"
import "typeface-seaweed-script"

import BGTexture from "../components/presentational/bg-texture"
import LandingLogo from "../icon-components/landing-logo"
import TopNavBtn from "./../components/functional/topnavbtn"

const IdxWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  position: relative;
`

const IndexPage = () => {
  return (
    <IdxWrapper>
      <BGTexture />
      <LandingLogo />
      <Landing />
      <TopNavBtn />
    </IdxWrapper>
  )
}

export default IndexPage
