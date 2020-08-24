import React, { useContext } from "react"
import styled from "styled-components"
import { ModeContext } from "../pages/panel"

const StyledTapModeBtn = styled.button`
  grid-row: 1/-1;
  grid-column: 1/-1;
  background: transparent;
  position: relative;
  z-index: 2;
  color: transparent;
`

const TapModeBtn = props => {
  // Local State?
  // IMPORTANT CONTEXT IS CREATED ON THUMB AND CAN BE IMPORTED BY BIG TOE????? --leaving the parents out of it.
  const { addImageMode, setTapMode, tapMode } = useContext(ModeContext)

  const tapModeBtnHandler = () => {
    setTapMode(!tapMode)
  }
  return (
    <>
      {!addImageMode && (
        <StyledTapModeBtn onClick={tapModeBtnHandler} className="tap-mode-btn">
          tapmode
        </StyledTapModeBtn>
      )}
    </>
  )
}

export default TapModeBtn
