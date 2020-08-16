import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledFlipBtnContainer = styled.button`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  width: 48vw;
  height: 100%;
  background: linear-gradient(135deg, #fff 0%, #fff 5%, #000 60%, #fff 90%);
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
      inset 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
    color: pink;
    background: brown;
  }
`

const FlipBtnContainer = props => {
  return (
    <StyledFlipBtnContainer className="FlipBtnContainer">
      <div>FlipBtnContainer</div>
    </StyledFlipBtnContainer>
  )
}

export default FlipBtnContainer
