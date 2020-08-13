import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledArticleBG = styled.svg`
  width: 100vw;
  height: 100vh;
  grid-row: 1/-1;
  grid-column: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const ArticleBG = props => {
  return (
    <StyledArticleBG
      viewBox="0 0 300 600"
      className="article-bg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
    >
      <radialGradient
        id="grad"
        cx="300"
        cy="600"
        r="943.825"
        gradientTransform="matrix(-.1409 .99 -.5472 -.0779 670.614 349.727)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fceec3" />
        <stop offset=".216" stopColor="#f7e7b2" />
        <stop offset=".407" stopColor="#f6e3a9" />
        <stop offset=".67" stopColor="#f9d786" />
        <stop offset="1" stopColor="#e7aa3c" />
      </radialGradient>
      <defs>
        <filter id="roughpaper">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.44"
            result="noise"
            numOctaves="2"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor="#fff"
            surfaceScale="2.5"
            result="light"
          >
            <feDistantLight azimuth="150" elevation="150" />
          </feDiffuseLighting>

          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
        <filter id="blend">
          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
        <symbol id="rect-temp">
          <rect width="110%" height="110%" />
        </symbol>
      </defs>
      <use xlinkHref="#rect-temp" filter="url(#roughpaper)" />
      <use
        className="card"
        xlinkHref="#rect-temp"
        width="100%"
        height="100%"
        filter="url(#blend)"
        fill="url(#grad)"
        fillOpacity="0.4"
      />
      <defs>
        <g id="spiral" className="spiral-units">
          <rect
            id="hole"
            width="6"
            height="17"
            x="15"
            y="-1"
            fill="#bcbcbc"
            stroke="#777"
            strokeWidth=".4"
          />
          {/* <rect id="shadow" width="1" height="4.5" x="6" y="-.2" fill="red" /> */}
          <linearGradient
            id="spiral-grad"
            x1="0"
            x2="5"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#441e0f" />
            <stop offset=".1135" stopColor="#523325" />
            <stop offset=".4554" stopColor="#93786b" />
            <stop offset=".55" stopColor="#93786b" />
            <stop offset=".8606" stopColor="#461f0d" />
            <stop offset="1" stopColor="#341b0d" />
          </linearGradient>
          <rect width="16" height="16" fill="url(#spiral-grad)" />
        </g>
      </defs>
      <use xlinkHref="#spiral" x="0" y="30" />
      <use xlinkHref="#spiral" x="0" y="70" />
      <use xlinkHref="#spiral" x="0" y="110" />
      <use xlinkHref="#spiral" x="0" y="150" />
      <use xlinkHref="#spiral" x="0" y="190" />
      <use xlinkHref="#spiral" x="0" y="230" />
      <use xlinkHref="#spiral" x="0" y="270" />
      <use xlinkHref="#spiral" x="0" y="310" />
      <use xlinkHref="#spiral" x="0" y="350" />
      <use xlinkHref="#spiral" x="0" y="390" />
      <use xlinkHref="#spiral" x="0" y="430" />
      <use xlinkHref="#spiral" x="0" y="470" />
    </StyledArticleBG>
  )
}

export default ArticleBG
