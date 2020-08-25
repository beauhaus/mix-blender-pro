import React, { useContext } from "react"
import styled from "styled-components"

const StyledFlipLines = styled.g`
  fillopacity: 1;
`

const FlipLines = props => {
  return (
    <StyledFlipLines className="flip-btn-lines">
      {/* <path d="M37.5 0v300" className="st1" />
      <path d="M74.5 0v300" className="st1" />
      <path d="M111.5 0v300" className="st1" />
      <path d="M148.5 0v300" className="st1" />
      <path d="M185.5 0v300" className="st1" />
      <path d="M222.5 0v300" className="st1" />
      <path d="M259.5 0v300" className="st1" />
      <path d="M0 36.5h300" className="st1" />
      <path d="M0 73.5h300" className="st1" />
      <path d="M0 110.5h300" className="st1" />
      <path d="M0 147.5h300" className="st1" />
      <path d="M0 184.5h300" className="st1" />
      <path d="M0 221.5h300" className="st1" />
      <path d="M0 258.5h300" className="st1" /> */}
    </StyledFlipLines>
  )
}

export default FlipLines
