import React, { useContext } from "react"
import styled from "styled-components"
import IncrementorLights from "../functional/incrementor-lights"

const StyledCycleBtnContainer = styled.div`
  height: 20vh;
  ${"" /* border: 1px solid fuchsia; */}
  margin: auto;
  display: grid;
  place-items: center;
  position: relative;
  overflow: visible;
  .cycle-btn {
    border-radius: 50%;
    width: 22.5vh;
    height: 22.5vh;
    background-image: conic-gradient(
      #fff,
      #fff,
      #000,
      #fff,
      #000,
      #fff,
      #000,
      #000,
      #fff
    );
    box-shadow: inset 2px 2px 4px 0 #eee, inset -2px -2px 5px 0 #444;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      ${"" /* display: none; */}
      content: "";
      border-radius: 50%;
      background: #000;
      z-index: 2;
      position: absolute;
      margin: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 82%;
      height: 82%;
      box-shadow: -1px -1px 2px 0 #fff, 1px 1px 2px 0 #fff;
    }
  }
`

const CycleBtnContainer = props => {
  return (
    <StyledCycleBtnContainer className="cycle-btn-container">
      <div className="cycle-btn"></div>
      <IncrementorLights />
    </StyledCycleBtnContainer>
  )
}

export default CycleBtnContainer
