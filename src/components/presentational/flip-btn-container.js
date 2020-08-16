import React, { useContext } from "react"
import styled from "styled-components"

const StyledFlipBtnContainer = styled.button`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  width: 48vw;
  height: 100%;
  background: linear-gradient(135deg, #fff 0%, #fff 5%, #000 60%, #fff 90%);
  background: #fff;
  box-shadow: inset -7px -7px 8px 0px #000, 1px 1px 3px 0 #555,
    inset 8px 8px 8px 0px #fff;
  display: grid;
  place-items: center;
  &::before {
    content: "";
    border-radius: 18px;
    box-shadow: -2px -2px 6px 2px #000, 6px 5px 4px 0px #fff;
    position: absolute;
    z-index: 1;
    top: 7.2%;
    left: 6%;
    width: 88%;
    height: 85%;
  }
  & > div {
    position: relative;
    z-index: 3;
    margin: 7.2%;
    width: 90%;
    height: 85%;
    border-radius: 18px;
    box-shadow: inset 0px 0px 6px 2px rgba(0, 0, 0, 0.4),
      inset -3px -2px 4px 1px rgba(0, 0, 0, 0.8);
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
