import React, { useContext } from "react"
import styled from "styled-components"
// import {AppContext} from '../pages/application'

const StyledTestPage = styled.div`
  svg {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`

const TestPage = props => {
  return (
    <StyledTestPage className="TestPage">
      <svg
        class="svg2"
        viewBox="0 0 600 1200"
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
          <stop offset="0" stop-color="#fceec3" />
          <stop offset=".216" stop-color="#f7e7b2" />
          <stop offset=".407" stop-color="#f6e3a9" />
          <stop offset=".67" stop-color="#f9d786" />
          <stop offset="1" stop-color="#e7aa3c" />
        </radialGradient>
        <defs>
          <filter id="roughpaper">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.34"
              result="noise"
              numOctaves="1"
            />
            <feDiffuseLighting
              in="noise"
              lighting-color="#fff"
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
          class="card"
          xlinkHref="#rect-temp"
          width="100%"
          height="100%"
          filter="url(#blend)"
          fill="url(#grad)"
          fillOpacity="0.4"
        />
      </svg>
    </StyledTestPage>
  )
}

export default TestPage
