import React from "react"
import styled from "styled-components"
import "normalize.css"
import "../styles/index.scss"

import "typeface-nanum-pen-script"
import "typeface-warnes"
import "typeface-seaweed-script"

import "typeface-oleo-script-swash-caps"
import BGTexture from "../components/presentational/bg-texture"
import LandingLogo from "../icon-components/landing-logo"

const LandingTxtBox = styled.section`
  width: 100vw;
  height: 71vh;
  margin: 13vh auto;
  ${"" /* border: 1px solid #fff; */}
  position: relative;
  display: flex;
  justify-content: center;

  h1 {
    text-shadow: 1px 1px 1px #000;
    align-self: flex-end;
    ${"" /* font: normal 4.5rem "Oleo Script Swash Caps", -apple-system, Segoe UI, Roboto; */}
    font: normal 3rem "Warnes", -apple-system, Segoe UI,
      Roboto;
    color: #dcdcdc;
    position: relative;

    &::after {
      content: "Pro";
      font-style: italic;
      text-shadow: 1px 1px 1px #000;
      letter-spacing: 1vw;
      ${"" /* font: normal 3rem "Oleo Script Swash Caps", -apple-system, Segoe UI,        Roboto; */}
      font: normal 3rem "Seaweed Script", -apple-system, Segoe UI,
      Roboto;
      margin-left: 3vw;
      font-weight: 100;
      color: var(--active-blue);
      color: var(--completed-blue);
    }
  }
  h2 {
    color: var(--heading-color);
    position: absolute;
    right: 5vw;
    top: 20vh;
    transform: rotate(-10deg);
    font: normal 4rem "Nanum Pen Script", -apple-system, Segoe UI, Roboto;
  }
`
const IndexPage = () => {
  return (
    <>
      <BGTexture />
      <LandingLogo />
      <div className="test-div"></div>
      <LandingTxtBox className="landing-txt-box">
        <h2>
          A Web Appliance <br /> for learning CSS
          <br />
          <i>mix-blend-mode!</i>
        </h2>
        <h1>Mix-Blender</h1>
      </LandingTxtBox>
    </>
  )
}

export default IndexPage
