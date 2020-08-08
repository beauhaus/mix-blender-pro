import React from "react"
import styled from "styled-components"

const StyledBGTexture = styled.div`
  background: purple;
  width: 100vw;
  height: 100vw;
`

const BGTexture = ({ children, location }) => {
  return (
    <StyledBGTexture className="bg-texture">
      <h1>THis is a texture</h1>
    </StyledBGTexture>
  )
}

export default BGTexture
