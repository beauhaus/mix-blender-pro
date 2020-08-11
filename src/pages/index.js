import React from "react"
import styled from "styled-components"
import "normalize.css"
import "../styles/index.scss"

import "typeface-nanum-pen-script"
import "typeface-warnes"
import "typeface-seaweed-script"

import BGTexture from "../components/presentational/bg-texture"
import LandingLogo from "../icon-components/landing-logo"
import TopNavBtn from "./../components/functional/topnavbtn"

const LandingTxtBox = styled.section`
  width: 100vw;
  height: 71vh;
  margin: 13vh auto;
  position: relative;
  display: flex;
  justify-content: center;
  div.title-container {
    align-self: flex-end;
    position: relative;
    h1 {
      font: normal 3rem "Warnes", -apple-system, Segoe UI, Roboto;
      position: relative;
      background: -webkit-linear-gradient(
        272deg,
        var(--active-blue) 40%,
        #fff 60%,
        #fff 65%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &::before {
        content: "Mix-Blender";
        position: absolute;
        text-shadow: 2px 2px 1px #000;
        color: red;
        z-index: -1;
        top: 0;
        left: 0;
      }
    }
    sub {
      position: absolute;
      bottom: 0;
      right: -16vw;
      letter-spacing: 1vw;
      font: normal 3.5rem "Seaweed Script", -apple-system, Segoe UI, Roboto;
      font-weight: bold;
      color: navy;
      transform: rotate(-7deg) translateY(0.5rem);
      z-index: 0;
    }
  }
  h2 {
    color: var(--heading-color-light);
    position: absolute;
    right: 5vw;
    top: 20vh;
    transform: rotate(-10deg);
    font: normal 4rem "Nanum Pen Script", -apple-system, Segoe UI, Roboto;
    i {
      color: var(--heading-color-light);
    }
  }
`
const IndexPage = () => {
  return (
    <>
      <BGTexture />
      <LandingLogo />
      <LandingTxtBox className="landing-txt-box">
        <h2>
          A Web Appliance <br /> for learning CSS
          <br />
          <i>mix-blend-mode!</i>
        </h2>
        <div className="title-container">
          <h1>Mix-Blender</h1>
          <sub>Pro</sub>
        </div>
      </LandingTxtBox>
      <TopNavBtn />
    </>
  )
}

export default IndexPage
