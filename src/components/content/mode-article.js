import React, { useContext } from "react"
import styled from "styled-components"
// import { AppContext } from "../pages/application";
// import { animateScroll } from "react-scroll";
// import useModes from "./hooks/use-modes";

const StyledModeArticle = styled.article`
  grid-row: 6;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  display: grid;
  background: lemonchiffon;
  grid-template-columns: 45vw 45vw;
  grid-template-rows: 70vh 10vh;
  position: relative;

  p {
    grid-column: 1/-1;
    grid-row: 1;
    font-size: 3rem;
  }

  .return-to-top-btn {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
    width: 45vw;
    height: 10vh;
    border: 1px solid lemonchiffon;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  }
  .temp-btn {
    width: 45vw;
    height: 10vh;
    border: 1px solid brown;
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
      {/* <h2>ModeTitle{thisMode.title}</h2> */}
      <h2>ModeTitle</h2>
      <p>
        Mode excerpt Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates animi incidunt quam cupiditate voluptate natus nisi vero
        debitis ipsam libero itaque impedit nostrum, commodi, adipisci
        asperiores quos praesentium quidem. Asperiores?
      </p>
      {/* <p>{thisMode.excerpt}</p> */}

      <button className="temp-btn">TempBtn</button>
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
