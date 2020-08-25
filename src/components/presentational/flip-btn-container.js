import React, { useState, useEffect } from "react"
import styled from "styled-components"
import FlipBtn from "../functional/flip-btn"
// import Flip from "./flip-btn-lines"

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
      <FlipBtn />
    </StyledFlipBtnContainer>
  )
}

// const FlipLinedGrid = () => (

// )
export default FlipBtnContainer

/*

      <StyledFlipBtn className="flip-btn">
        {console.log("FBC Ran")}
        <FlipLinesArrows />
      </StyledFlipBtn>

      */

//  FlipLinesArrows
