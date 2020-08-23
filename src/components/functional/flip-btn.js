import React, { useContext } from "react"
import styled from "styled-components"
import FlipArrows from "./flip-arrows"

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

// const FlipLinedGrid = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="scrn-line-grid"
//     width="100%"
//     height="100%"
//     viewBox="0 0 300 300"
//     overflow="hidden"
//     preserveAspectRatio="none"
//   >
//     <FlipArrows />
//     <g className="lines">
//       <path d="M37.5 0v300" className="st1" />
//       <path d="M74.5 0v300" className="st1" />
//       <path d="M111.5 0v300" className="st1" />
//       <path d="M148.5 0v300" className="st1" />
//       <path d="M185.5 0v300" className="st1" />
//       <path d="M222.5 0v300" className="st1" />
//       <path d="M259.5 0v300" className="st1" />
//       <path d="M0 36.5h300" className="st1" />
//       <path d="M0 73.5h300" className="st1" />
//       <path d="M0 110.5h300" className="st1" />
//       <path d="M0 147.5h300" className="st1" />
//       <path d="M0 184.5h300" className="st1" />
//       <path d="M0 221.5h300" className="st1" />
//       <path d="M0 258.5h300" className="st1" />
//     </g>
//   </svg>
// )

const FlipBtn = () => {
  return (
    <StyledFlipBtn className="flip-btn">
      <FlipLinedGrid />
    </StyledFlipBtn>
  )
}

export default FlipBtn
