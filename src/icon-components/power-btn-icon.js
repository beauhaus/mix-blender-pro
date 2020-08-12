import React from "react"
import styled from "styled-components"

const StyedPowerIcon = styled.svg`
  position: relative;
  z-index: 5;
  path {
    fill: transparent;
    stroke-width: 1;
    stroke: #000;
  }
`
const PowerBtnIcon = () => {
  return (
    <StyedPowerIcon
      className="pwr-btn-icon"
      width="100%"
      viewBox="-12.5 -12.5 125 125"
    >
      <path d="M73.93 29.62c-.42-2.37-2.7-3.97-5.07-3.56L29.61 33c-2.37.42-3.97 2.7-3.55 5.08.35 2.02 2.05 3.46 4.01 3.6v.01l13.47 2.43-10.78 1.9c-2.11.37-3.53 2.4-3.15 4.51.32 1.81 1.86 3.11 3.62 3.2l12 2.75-9.03 1.6c-1.84.33-3.08 2.1-2.76 3.95.27 1.53 1.53 2.63 3 2.78l9.18 2.32-5.99 1.06c-1.58.28-2.64 1.8-2.37 3.39h0c.28 1.58 1.8 2.65 3.38 2.37l18.19-3.22c1.58-.28 2.64-1.8 2.37-3.39-.2-1.11-1.01-1.96-2.02-2.27v-.01l-.15-.04c-.03-.01-.06-.02-.09-.02l-9.36-2.37 12.69-2.24c1.84-.33 3.08-2.1 2.76-3.95-.28-1.62-1.68-2.77-3.26-2.81l-11.76-2.75 15.7-2.77c2.11-.37 3.53-2.4 3.15-4.51-.31-1.73-1.73-2.99-3.4-3.18v-.02l-13.07-2.53 17.99-3.18c2.37-.41 3.97-2.69 3.55-5.07z" />
    </StyedPowerIcon>
  )
}

export default PowerBtnIcon