import React, { useState, useContext } from "react"
import styled from "styled-components"
import { ModeContext } from "../../pages/panel"

import IncrementorLights from "../presentational/incrementor-lights"
import ModeIcons from "./util/mode-icons-manager"

const StyledCycleBtnContainer = styled.div`
  height: 20vh;
  margin: auto;
  display: grid;
  place-items: center;
  position: relative;
  overflow: visible;
  .cycle-mode-btn {
    border-radius: 50%;
    width: 22.5vh;
    height: 22.5vh;
    background: linear-gradient(45deg, #000 20%, #fff 50%, #000 80%);
    box-shadow: inset 2px 2px 4px 0 #eee, inset -2px -2px 5px 0 #444,
      1px 1px 1px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      content: "";
      border-radius: 50%;
      background: transparent;
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
    &:hover {
      ${"" /* outline: 2px solid blue; */}
      ${"" /* box-shadow: inset 0 0 5px 2px red; */}
    }
    &:active {
      &::before {
        content: "";
        border-radius: 50%;
        background: transparent;
        z-index: 12;
        position: absolute;
        margin: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 82%;
        height: 82%;
        box-shadow: inset 0 0 10px 0 #fecf67, -1px -1px 2px 0 #fff,
          1px 1px 2px 0 #fff;
      }
    }
  }
`

// onTouchStart

const CycleBtnContainer = props => {
  const {
    setMixMode,
    mixMode,
    modesArray,
    setMixModeNum,
    mixModeNum,
  } = useContext(ModeContext)

  const modeSelectHandler = () => {
    setMixModeNum((mixModeNum + 1) % 16)
  }
  return (
    <StyledCycleBtnContainer className="cycle-btn-container">
      <button
        className="cycle-mode-btn"
        aria-label="mode-cycler"
        onClick={modeSelectHandler}
      >
        <IncrementorLights mixModeNum={mixModeNum} />
        <ModeIcons />
      </button>
    </StyledCycleBtnContainer>
  )
}

export default CycleBtnContainer
