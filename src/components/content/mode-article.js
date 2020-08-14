import React, { useContext } from "react"
import styled from "styled-components"
import "typeface-special-elite"

// import { AppContext } from "../pages/application";
// import { animateScroll } from "react-scroll";
// import useModes from "./hooks/use-modes";

import ArticleBG from "../presentational/util/bg-article-texture"
const StyledModeArticle = styled.article`
  grid-row: 6;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  display: grid;
  background: transparent;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: 70vh 10vh;
  position: relative;
  section {
    margin: 5vh auto;
    grid-column: 2;
    grid-row: 1;
    font-size: 2rem;
    text-align: left;
    h1 {
      font-family: "Lucida Bright", serif;
      font-size: 3rem;
    }
    p {
      font-family: "Lucida Bright";
      font-weight: lighter;
      margin: 3vh auto;
      font-size: 1.8rem;
      text-align: left;
    }
  }

  .return-to-top-btn {
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    width: 45vw;
    height: 10vh;
    border: 1px solid lemonchiffon;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  }
  .temp-btn {
    width: 25vw;
    height: 8vh;
    grid-column: 2;
    grid-row: 2;
    background: whitesmoke;
    border: 1px solid lemonchiffon;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  }
`

const ModeArticle = props => {
  // const { mixMode } = useContext(AppContext)
  // const modes = useModes()

  // const [thisMode] = modes.filter(mode => mode.title === mixMode)
  // console.log("TM: ", thisMode)
  return (
    // <StyledModeArticle id={`${mixMode}-article`} className="mode-article">
    <StyledModeArticle id={`mixmode-article`} className="mode-article">
      <ArticleBG />
      {/* <h2>ModeTitle{thisMode.title}</h2> */}
      <section className="text-container">
        <h1>ModeTitle</h1>
        <p>
          Mode excerpt Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates animi incidunt quam cupiditate voluptate natus nisi vero
          debitis ipsam libero itaque impedit nostrum, commodi, adipisci
          asperiores quos praesentium quidem. Asperiores?
        </p>
        {/* <p>{thisMode.excerpt}</p> */}
      </section>
      <button className="temp-btn" onClick={() => console.log("CLICK!")}>
        TempBtn
      </button>
      {/* <button
        className="return-to-top-btn"
        onClick={() =>
          animateScroll.scrollToTop({
            duration: 1000,
            smooth: "easeInOutQuint",
          })
        }
      >
        &uarr;
      </button> */}
    </StyledModeArticle>
  )
}

export default ModeArticle
