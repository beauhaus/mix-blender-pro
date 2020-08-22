import React from "react"
import styled from "styled-components"

const StyledScrnContainer = styled.div`
  background: linear-gradient(45deg, #bcbcbc 0%, #8d8d8d 100%);
  grid-row: 2;
  border-radius: 10px;
  position: relative;
  margin: 0 3vw;
  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    border-radius: 12px;
    box-shadow: 3px 3px 5px 0 #fff, -3px -3px 5px 0 #444,
      inset 1px 1px 2px 0 #000, inset -1px -1px 2px 0 #fff;
  }
`

const PanelScrnContainer = () => {
  return (
    <StyledScrnContainer className="panel-scrn-container">
      <h1 className="title">panel</h1>
    </StyledScrnContainer>
  )
}

export default PanelScrnContainer
