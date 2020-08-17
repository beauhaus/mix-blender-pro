import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledCycleBtnContainer = styled.div`
  width: 48vw;

  border: 1px solid fuchsia;
  margin: auto;
  display: grid;

  span {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 48vw;
    height: 100%;
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
