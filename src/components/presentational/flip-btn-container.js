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
  box-shadow: inset -1vh -1vh 0.8vh 0.5vh #000, 1px 1px 3px 0 #555,
    inset 0.5vh 0.5vh 0.5vh 0.5vh #fff;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    border-radius: 18px;
    box-shadow: -0.6vh -0.4vh 0.8vh 0.3vh #000, 0.5vh 0.4vh 0.4vh 0.4vh #fff;
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
      inset 0px 0px 1px 1px rgba(0, 0, 0, 0.4),
      inset -5px -2px 5px 0 rgba(0, 0, 0, 1);
    background: linear-gradient(
      90deg,
      #4c4c24 5%,
      #51563e 10%,
      #5e6543 25%,
      #6c7750 50%,
      #6e7f5c 76%,
      #859a84 88%,
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
