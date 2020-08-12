import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledCycleBtnContainer = styled.div`
  width: 48vw;
  height: 100%;
  margin: auto;
  display: grid;

  span {
    border-radius: 50%;
    width: 35vw;
    height: 35vw;
    margin: auto;
    background: brown;
  }
`

const CycleBtnContainer = props => {
  return (
    <StyledCycleBtnContainer className="cycle-btn-container">
      <span></span>
    </StyledCycleBtnContainer>
  )
}

export default CycleBtnContainer
