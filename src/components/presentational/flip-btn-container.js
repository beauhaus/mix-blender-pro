import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import FlipArrows from "../functional/flip-arrows"
// import FlipBtn from "../functional/flip-btn"

const StyledFlipBtnContainer = styled.div`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  background: linear-gradient(135deg, #fff 40%, #000 60%);

  display: grid;
  place-items: center;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.5);
  width: 48vw;
  height: 20vh;

  &::before {
    content: "";
    border-radius: 20px;
    box-shadow: -3px -3px 2px 0 #000, 3px 3px 2px 0px #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 94%;
    height: 92%;
  }
`

const StyledFlipBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 94%;
    height: 92%;
    border-radius: 18px;
    background: linear-gradient(
      90deg,
      #000 0%,
      #3a3d2c 9%,
      #5e6543 20%,
      #6e7f5c 66%,
      #859a84 85%,
      #f3f1f1 100%
    );
    box-shadow: inset 0 0 3px 1px #000;
    filter: grayscale(30%);
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .lines {
            fill:none;
            stroke:#7FB0E4;
            stroke-width:1;
            mix-blend-mode: overlay;
            overflow: hidden;
         }
`

const StyledArrows = styled.g`
  .flip-arrows {
    fill: #e5b385;
    ${"" /* fill: #ebe4a8; */}
    fill: #863838;
    fill: #8eb3b3;
    fill: var(--idle-blue);
  }
  #arrow-glow {
    fill: var(--active-blue);
    stroke: var(--active-blue);
    mix-blend-mode: screen;
  }
  .arrows-second-task {
    stroke: var(--active-blue);
    stroke-width: 2;
    fill: #000;
  }
`

const FlipBtnContainer = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return (
    <StyledFlipBtnContainer>
      {/* <FlipBtn /> */}
      <StyledFlipBtn className="flip-btn">
        <FlipLinedGrid />
        {console.log("FBC Ran")}
      </StyledFlipBtn>
    </StyledFlipBtnContainer>
  )
}

const FlipLinedGrid = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="scrn-line-grid"
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    overflow="hidden"
    preserveAspectRatio="none"
  >
    {/* <FlipArrows /> */}
    <StyledArrows>
      {console.log("arrows ran")}
      <filter id="arrow-glow-blur">
        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
      </filter>

      <path
        // className={addImageMode ? "arrows-second-task" : "flip-arrows"}
        className={false ? "arrows-second-task" : "flip-arrows"}
        // ref={elem => (flipArrows = elem)}
        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
      />

      <path
        filter="url(#arrow-glow-blur)"
        id="arrow-glow"
        // ref={elem => (arrowGlow = elem)}
        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
      />
    </StyledArrows>
    <g className="lines">
      <path d="M37.5 0v300" className="st1" />
      <path d="M74.5 0v300" className="st1" />
      <path d="M111.5 0v300" className="st1" />
      <path d="M148.5 0v300" className="st1" />
      <path d="M185.5 0v300" className="st1" />
      <path d="M222.5 0v300" className="st1" />
      <path d="M259.5 0v300" className="st1" />
      <path d="M0 36.5h300" className="st1" />
      <path d="M0 73.5h300" className="st1" />
      <path d="M0 110.5h300" className="st1" />
      <path d="M0 147.5h300" className="st1" />
      <path d="M0 184.5h300" className="st1" />
      <path d="M0 221.5h300" className="st1" />
      <path d="M0 258.5h300" className="st1" />
    </g>
  </svg>
)
export default FlipBtnContainer
