import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledFlipLines = styled.svg`
  fillopacity: 1;
`

const FlipLines = props => {
  return <StyledFlipLines className="FlipLines"></StyledFlipLines>
}

export default FlipLines
