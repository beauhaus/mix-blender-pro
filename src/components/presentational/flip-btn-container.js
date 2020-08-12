import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledFlipBtnContainer = styled.div`
  position: relative;
  width: 48vw;
  height: 100%;
  margin: auto;
  display: grid;
  border-radius: 22px;
  overflow: hidden;
  background: linear-gradient(90deg, #2c3021 0%, #545d49 50%, #5f6b57 100%);
`

const FlipBtnContainer = props => {
  return (
    <StyledFlipBtnContainer className="FlipBtnContainer">
      <span>FlipBtnContainer</span>
    </StyledFlipBtnContainer>
  )
}

export default FlipBtnContainer
