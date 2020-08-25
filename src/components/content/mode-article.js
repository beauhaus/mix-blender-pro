import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import "typeface-gruppo"
import "typeface-special-elite"
import ArticleBG from "../presentational/util/bg-article-texture"

// import { AppContext } from "../pages/application";
// import { animateScroll } from "react-scroll";
// import useModes from "./hooks/use-modes";

const StyledModeArticle = styled.article`
  grid-row: 6;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background: transparent;
  display: grid;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: 70vh 10vh;
  position: relative;
  section {
    margin: 0 auto;
    ${"" /* padding: 12vh auto; */}
    grid-column: 2;
    grid-row: 1;
    text-align: right;
    h1 {
      margin: 1rem;
      font-family: "Gruppo", serif;
      font-size: 4rem;
    }
    p {
      font-family: "Open Sans", sans-serif;
      font-weight: 100;
      margin: 1vh auto;
      font-size: 2rem;
      color: #111;
      text-align: left;
      span {
        font-weight: 600;
      }
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

  // secures proper rehydration
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return (
    // <StyledModeArticle id={`${mixMode}-article`} className="mode-article">
    <StyledModeArticle id={`mixmode-article`} className="mode-article">
      <ArticleBG />
      {/* <h2>ModeTitle{thisMode.title}</h2> */}
      <section className="text-container">
        <h1>color-burn</h1>
        <p>
          <span>Mode excerpt Lorem ipsum dolor</span> sit amet consectetur
          adipisicing elit. Voluptates animi incidunt quam cupiditate voluptate
          natus nisi vero debitis ipsam libero itaque impedit nostrum, commodi,
          adipisci asperiores quos praesentium quidem. Asperiores?
        </p>
        <p>
          <span>Voluptates animi incidunt quam cupiditate voluptate </span>
          natus nisi vero debitis ipsam libero itaque impedit nostrum, commodi,
          adipisci asperiores quos praesentium quidem. Asperiores?
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
