import React, { memo } from "react"
import styled from "styled-components"
// import CycleModeBtn from "./cyclemodebtn";
// import FlipImageBtn from "./flipimagebtn";
// import FlipEffectsContainer from "./flipeffectscontainer";
import FlipBtnContainer from "./flip-btn-container"
import CycleBtnContainer from "../functional/cycle-btn-container"

const StyledBlendControls = styled.div`
  grid-row: 4;
  height: 100%;
  margin: 0 3vw;
  display: flex;
`

const BlendControls = () => {
  return (
    <StyledBlendControls className="blend-controls">
      {/* {console.log("blendCtrls ran")} */}
      <FlipBtnContainer />
      <CycleBtnContainer />
    </StyledBlendControls>
  )
}

export default memo(BlendControls)
