import React from "react"
import styled from "styled-components"

const LandingLogoWrapper = styled.svg`
  position: absolute;
  width: 115%;
  top: 0;
  left: -50%;
  mix-blend-mode: luminosity;

  .st3 {
    fill: none;
    stroke: #444;
  }
  .st4 {
    fill: #444;
  }
  .st5 {
    fill: none;
    stroke: #000;
    stroke-width: 2;
  }
  .st7 {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
  }
  .st7 {
    stroke: #fff;
    stroke-width: 2;
  }
  .st12,
  .st8,
  .st9 {
    fill: #1c86ff;
    stroke: #000;
    stroke-width: 0.5;
  }
  .st12,
  .st9 {
    fill: #888;
  }
  .st12 {
    fill: none;
    stroke: #9c6600;
    stroke-width: 5;
  }
`

const LandingLogo = () => (
  <LandingLogoWrapper
    xmlns="http://www.w3.org/2fff/svg"
    className="landing-logo"
    viewBox="0 0 350 350"
  >
    <filter id="swirl-blur">
      <feGaussianBlur stdDeviation="4"></feGaussianBlur>
    </filter>
    <g filter="url(#swirl-blur)" opacity=".7">
      <path
        fill="#f1f700"
        d="M123.81 182.27l91.52 4.59-3.43-19.04-91.52-4.59z"
      />
      <path
        fill="#07faff"
        d="M105.29 146.16l115.32 3.39-4.08-23.01-118.09-3.92z"
      />
      <path
        fill="#e100e2"
        d="M87.73 106.64l138.14-1.95-5.74-26.51-137.92.36z"
      />
      <path
        fill="#ffde00"
        d="M214.13 187.68l-66.46 23.48c-5.77 2.04-12.16-.62-14.2-5.91-2.04-5.29 1.02-11.29 6.79-13.32l66.46-23.48c5.77-2.04 12.16.62 14.2 5.91 2.04 5.29-1.01 11.28-6.79 13.32z"
      />
      <path
        fill="#2ef700"
        d="M220.61 149.55l-90.94 32.14c-6.73 2.38-14.19-.72-16.56-6.89-2.38-6.17 1.19-13.17 7.92-15.55l90.94-32.14c6.73-2.38 14.19.72 16.56 6.89 2.38 6.18-1.19 13.17-7.92 15.55z"
      />
      <path
        fill="#0003ff"
        d="M225.87 104.69l-115.43 40.77c-7.7 2.72-16.21-.83-18.93-7.88-2.72-7.05 1.36-15.05 9.05-17.77l115.43-40.77c7.7-2.72 16.21.83 18.93 7.88 2.72 7.06-1.36 15.05-9.05 17.77z"
      />
      <path
        fill="#f00026"
        d="M237.44 56.02L98.12 105.49c-10.32 3.66-21.41-.2-24.66-8.58S76 78.68 86.31 75.01l139.32-49.47c10.32-3.66 21.41.2 24.66 8.58s-2.54 18.23-12.85 21.9z"
      />
    </g>

    <path
      id="arm_7_"
      fill="none"
      stroke="#fff"
      strokeWidth="5"
      d="M249.45 248.45c15.11 3.4 36.29 4.04 36.44 13.92.15 9.88-16.2 22.16-23.25 29.3 3.12 3.36 8.59 3.52 8.59 3.52"
    />
    <g id="face_17_">
      <path
        id="faceback_22_"
        fill="#ccc"
        stroke="#fff"
        strokeWidth="1"
        d="M260.03 296.54l-133.41 22.57c-6.59-37.15-7.38-72.97.44-106.81l97.41-16.48c20.35 31.44 31.85 65.11 35.56 100.72z"
      />
      <path
        d="M157.42 263.37c1.05 15.86 21.77 14.26 20.35-1.58-1.04-15.86-21.77-14.25-20.35 1.58zM197.63 257.3c1.05 15.86 21.77 14.26 20.35-1.58-1.04-15.86-21.77-14.25-20.35 1.58z"
        className="st3"
      />
      <path
        d="M172.94 264.3c.61 6.59-9.76 7.4-10.17.79-.22-2.81-6.48-9.58-6.48-9.58s16.44 5.98 16.65 8.79zM212.88 255.46c.61 6.59-9.76 7.4-10.17.79-.22-2.81 3.22-14.21 3.22-14.21s6.73 10.61 6.95 13.42z"
        className="st4"
      />
      <path
        id="mouth_12_"
        d="M167.2 285.53s16.8 4.47 31.84-2.15c24.29-10.68 25.17-24.24 27.37-23.42 11.46 21.58-17.49 36.41-38.97 32.38-7.45-1.34-20.24-6.81-20.24-6.81z"
        className="st5"
      />
      <g id="lashes_x26_brows_1_">
        <path
          fill="none"
          strokeWidth="3"
          stroke="#000"
          d="M151.59 248.75c1.04.82 2.07 1.65 3.11 2.47M163.88 242.21c.32 1.34.64 2.69.96 4.03M178.31 247.29c-.52 1.08-1.04 2.17-1.55 3.25M191.94 246.7c1.51.14 2.96.9 3.92 2.08M202.03 237.55c.42 1.32.85 2.65 1.27 3.97M218.27 241.39l-2.52 2.82M160.4 227.4c-15.09.31-19.72 9.24-19.36 19.6M195.43 221.9c11.76-4.95 20.79-.18 25.48 9.02"
        />
      </g>
    </g>
    <g id="handle">
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        d="M235.02 140.4c2.74-18.86 4.28-37.35 2.18-52.06.3-3.63 5.5-10.5 8.98-8.84 2.63 1.25 5.56 6.18 5.25 9.81 2.6 12.57.72 27.56-3.67 43.91-.3 3.63-13.04 10.81-12.74 7.18z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        d="M231.73 151.86c5.11-26.52 7.86-52.62 3.6-73.61.55-5.12 10.57-14.47 17.38-11.85 5.13 1.97 10.35 8.49 11.24 14.25 4 18.84.86 39.15-7.49 61.99-.53 5.12-25.27 14.34-24.73 9.22z"
      />
    </g>
    <g id="top_17_">
      <path
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        d="M181.23 23.26l-71.1 37.86c-3.01 1.6-40.57 21.67-38.9 24.79 0 0-7 11.03 17.61-2.08l125.79-63.77c3.01-1.6 4.11-5.47 2.44-8.6-1.67-3.11-32.84 10.2-35.84 11.8zM109.96 46.79l46.22-24.91c3.9-2.09 8.81-.61 10.9 3.3.95 1.78.28 3.99-1.49 4.95l-58.98 31.06c-2.12-.69-2.95-5.72-2.95-5.72-.16-4.97 2.4-6.59 6.3-8.68z"
      />
    </g>
    <path
      id="bowl"
      fill="rgba(255,255,255,0.3)"
      stroke="#fff"
      strokeWidth="2"
      d="M125.89 202.16l95.29-16.12c13.6-32.07 18.09-69.86 13.49-113.37L67.36 97.75h.02s-1.06.18.13.77c4.12 2.03 17.42 9.13 18.33 14.41 4.14 24.12 32.86 93.06 40.05 89.23z"
    />
    <path
      id="mid_1_"
      fill="#fff"
      stroke="#fff"
      strokeWidth="2"
      d="M223.33 187.3l-97.99 16.58c-2.17.37-3.64 2.44-3.28 4.61l.1.58c.37 2.17 2.44 3.64 4.61 3.28l97.99-16.58c2.17-.37 3.64-2.44 3.28-4.61l-.1-.58c-.37-2.17-2.44-3.64-4.61-3.28z"
    />
    <g id="base_22_">
      <path
        stroke="#fff"
        d="M260.03 296.54l-133.41 22.57c-2.33.39-3.91 2.62-3.52 4.95.39 2.33 2.62 3.91 5.31 5.64l133.41-22.57c1.97-2.51 3.55-4.74 3.16-7.07-.4-2.33-2.62-3.91-4.95-3.52z"
        className="st7"
      />
      <path
        stroke="#fff"
        d="M255.76 308.15l-121.29 20.52c-2.17.37-3.64 2.44-3.28 4.61l.1.58c.37 2.17 2.44 3.64 4.61 3.28l121.29-20.52c2.17-.37 3.64-2.44 3.28-4.61l-.1-.58c-.37-2.17-2.44-3.64-4.61-3.28z"
        className="st7"
      />
    </g>
  </LandingLogoWrapper>
)

export default LandingLogo
