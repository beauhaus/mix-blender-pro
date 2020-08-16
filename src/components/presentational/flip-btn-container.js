import React, { useContext } from "react"
import styled from "styled-components"

const StyledFlipBtnContainer = styled.button`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  width: 48vw;
  height: 100%;

  background: linear-gradient(135deg, #000 0%, #fff 25%, #000 70%, #fff 90%);
  box-shadow: inset -7px -7px 8px 0px #000, 1px 1px 3px 0 #000,
    inset 4px 4px 6px 0px #fff;
  display: grid;
  place-items: center;
  &::before {
    content: "";
    border-radius: 18px;
    box-shadow: 6px 5px 4px 0px #fff;
    position: absolute;
    z-index: 1;
    top: 7.2%;
    left: 6%;
    width: 88%;
    height: 85%;
  }
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    margin: 0;
    ${"" /* border: 1px solid #fff; */}
    width: 90%;
    height: 86%;
    border-radius: 18px;
    box-shadow: 0 -2px 2px 0px #000, inset -2px -2px 7px 0px #000,
      -2px 0 6px 0px rgba(0, 0, 0, 1);
    background: linear-gradient(
      90deg,
      #000 0%,
      #3a3d2c 9%,
      #5e6543 20%,
      #6e7f5c 66%,
      #859a84 85%,
      #f3f1f1 100%
    );
    filter: grayscale(50%);
  }
`

const FlipBtnContainer = props => {
  return (
    <StyledFlipBtnContainer className="FlipBtnContainer">
      <div></div>
    </StyledFlipBtnContainer>
  )
}

export default FlipBtnContainer
