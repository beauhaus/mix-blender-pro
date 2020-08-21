import React, { useContext } from "react"
import styled from "styled-components"
import FlipArrows from "../functional/flip-arrows"
import FlipBtn from "../functional/flip-btn"

const StyledFlipBtnContainer = styled.div`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  background: linear-gradient(135deg, #fff 40%, #000 60%);

  display: grid;
  place-items: center;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
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

const FlipBtnContainer = () => {
  return (
    <StyledFlipBtnContainer>
      <FlipBtn />
    </StyledFlipBtnContainer>
  )
}

export default FlipBtnContainer
