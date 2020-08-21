import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

import NormalIcon from "../../presentational/mode-icons/normal"
import MultiplyIcon from "../../presentational/mode-icons/multiply"
import ScreenIcon from "../../presentational/mode-icons/screen"
// import LightenIcon from '../../presentational/mode-icons/lighten'
// import DarkenIcon from '../../presentational/mode-icons/darken'
// import OverlayIcon from '../../presentational/mode-icons/overlay'
// import SoftLightIcon from '../../presentational/mode-icons/soft-light';
// import ExclusionIcon from '../../presentational/mode-icons/exclusion'
// import DifferenceIcon from '../../presentational/mode-icons/difference'
// import ColorIcon from '../../presentational/mode-icons/color'
// import HardLightIcon from '../../presentational/mode-icons/hard-light';
// import LuminosityIcon from '../../presentational/mode-icons/luminosity';
// import ColorBurnIcon from '../../presentational/mode-icons/color-burn';
// import ColorDodgeIcon from '../../presentational/mode-icons/color-dodge';
// import SaturationIcon from '../../presentational/mode-icons/saturation';
// import HueIcon from '../../presentational/mode-icons/hue';

const ModeIconsGroup = styled.svg`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 1;
  overflow: visible;
  width: 80%;
  height: 80%;

  g {
    .icon-bg {
      fill: var(--mode-icon-bg);
    }
  }
`
const ModeIcons = () => {
  // const { mixModeNum } = useContext(AppContext)
  let mixModeNum = 0 //TODO: deprecate

  const renderIcon = param => {
    switch (param) {
      case 0:
        return <NormalIcon />
      case 1:
        return <MultiplyIcon />
      case 2:
        return <ScreenIcon />
      // case 3:
      //   return <OverlayIcon />
      // case 4:
      //   return <LightenIcon />
      // case 5:
      //   return <DarkenIcon />
      // case 6:
      //   return <ColorIcon />
      // case 7:
      //   return <ColorDodgeIcon />
      // case 8:
      //   return <ColorBurnIcon />
      // case 9:
      //   return <DifferenceIcon />
      // case 10:
      //   return <ExclusionIcon />
      // case 11:
      //   return <LuminosityIcon />
      // case 12:
      //   return <HueIcon />
      // case 13:
      //   return <SaturationIcon />
      // case 14:
      //   return <SoftLightIcon />
      // case 15:
      //   return <HardLightIcon />
      default:
        break
    }
  }

  return (
    <ModeIconsGroup xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      {renderIcon(mixModeNum)}
      <radialGradient
        id="btn-shine"
        cx="25"
        cy="25"
        r="212"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" stopOpacity=".5" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="btn-shadow"
        cx="50"
        cy="50"
        r="212"
        gradientTransform="rotate(180 150 150)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopOpacity=".6" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
      <g className="btn-cover">
        <circle
          id="btn-shine"
          cx="150"
          cy="150"
          r="150"
          fill="url(#btn-shine)"
        />
        <circle
          id="btn-shadow"
          cx="150"
          cy="150"
          r="150"
          fill="url(#btn-shadow)"
        />
      </g>
    </ModeIconsGroup>
  )
}

export default ModeIcons
