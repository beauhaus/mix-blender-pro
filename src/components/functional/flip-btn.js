import React, { useContext } from "react"
import styled from "styled-components"
import FlipLinesArrows from "./flip-lines-arrows"

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

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .lines {
    fill: none;
    stroke: #7fb0e4;
    stroke-width: 1;
    mix-blend-mode: overlay;
    overflow: hidden;
  }
`

const FlipBtn = () => {
  return (
    <StyledFlipBtn className="flip-btn">
      <FlipLinesArrows />
    </StyledFlipBtn>
  )
}

export default FlipBtn

/*


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

*/
