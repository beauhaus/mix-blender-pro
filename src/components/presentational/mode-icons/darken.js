import React from "react"
import styled from "styled-components"

const DarkenWrapper = styled.g`
  .st1,
  .st3 {
    fill: #fff;
  }
  .st3,
  .st5 {
    stroke: #000;
  }
  #BG {
    fill: brown; /*TODO: delete?*/
  }
`

const DarkenIcon = () => (
  <DarkenWrapper>
    <circle className="icon-bg" cx="150" cy="150" r="150" />
    <path d="M274.72 119.48h5.34v74.91h-5.34z" className="st1" />
    <linearGradient
      id="lamp-grad"
      x1="27.2455"
      x2="66.2235"
      y1="80.4913"
      y2="51.0092"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#7ac943" />
      <stop offset="1" stopColor="#2a4418" />
    </linearGradient>
    <path
      fill="url(#lamp-grad)"
      d="M88.47 52.53l-28.6-22.19C43.9 42.32 29.41 58.42 19.27 75.72l11.5 27.58 57.7-50.77z"
    />
    <g id="face_1_">
      <path
        d="M100.07 206.64c-3.09 26.86 36.52 30.04 38.91 3.12 3.09-26.86-36.52-30.04-38.91-3.12z"
        className="st3"
      />
      <path
        d="M154.89 207.87c-3.09 26.86 36.52 30.04 38.91 3.12 3.09-26.86-36.53-30.04-38.91-3.12z"
        className="st3"
      />
      <path
        id="mouth_2_"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        d="M130.79 257.83c6.35-3.56 14.95-1.82 25.76 4.93"
      />
      <ellipse cx="121.46" cy="213.43" className="st5" rx="7.47" ry="10" />
      <ellipse cx="171.01" cy="206.93" className="st5" rx="8.91" ry="11.5" />
    </g>
    <g id="click">
      <path
        d="M186.25 114.88c.21 1.02.42 2.04.62 3.05-.6.04-1.42.3-2.44.81s-1.88 1.12-2.59 1.83c-1.54 1.55-2.13 3.23-1.83 5.01.3 1.78 1.45 3.4 3.37 4.93 1.91 1.53 3.73 2.27 5.53 2.22 1.8-.04 3.43-.81 5-2.31 1.22-1.17 2.01-2.77 2.39-4.83 1.13.39 2.24.79 3.35 1.21-.65 2.25-2.06 4.36-4.17 6.39-2.04 1.97-4.31 2.98-6.97 3.1-2.65.11-5.21-.81-7.79-2.79-2.63-2.02-4.2-4.32-4.52-7.04-.32-2.71.73-5.44 3.32-8.07.83-.84 1.94-1.62 3.32-2.29 1.39-.68 2.53-1.08 3.41-1.22z"
        className="st1"
      />
      <path
        d="M199.91 120.89c-5.62-5.61-11.84-10.91-18.63-15.78 1.07-.96 2.16-1.9 3.27-2.84 6.55 4.89 12.55 10.16 17.99 15.72.8.82 1.68 1.25 2.67 1.32.99.07 1.92-.22 2.82-.87.75.83 1.49 1.67 2.22 2.52-4.07 2.92-7.31 2.93-10.34-.07z"
        className="st1"
      />
      <path
        d="M215.34 117.06c-3.82-4.67-7.99-9.19-12.5-13.52-.9.62-1.79 1.25-2.67 1.89-.8-.75-1.61-1.49-2.43-2.22 2.04-1.49 4.13-2.95 6.27-4.36 5.38 5.13 10.29 10.52 14.71 16.11-1.15.68-2.27 1.38-3.38 2.1zm-19.3-22.77c.63-.44 1.35-.66 2.17-.64.81.01 1.48.25 1.98.7.51.46.73 1 .64 1.62-.09.62-.44 1.14-1.06 1.57-.61.42-1.3.62-2.1.61-.79-.01-1.45-.24-1.97-.68-.52-.44-.76-.97-.69-1.59.06-.62.4-1.15 1.03-1.59z"
        className="st1"
      />
      <path
        d="M228.03 87.76c-.07 1.04-.15 2.07-.22 3.11-.68-.13-1.66-.09-2.94.12-1.28.22-2.42.58-3.42 1.07-2.17 1.09-3.34 2.56-3.56 4.35-.22 1.79.56 3.66 2.23 5.65 1.66 1.98 3.48 3.18 5.51 3.62 2.03.44 4.11.16 6.32-.86 1.72-.79 3.09-2.1 4.12-3.98 1.15.69 2.29 1.39 3.42 2.1-1.38 1.98-3.6 3.6-6.58 4.97-2.9 1.33-5.78 1.68-8.8 1.08-3.03-.61-5.61-2.17-7.87-4.75-2.3-2.63-3.31-5.27-2.82-7.98.49-2.7 2.49-5.06 6.14-6.92 1.17-.59 2.62-1.04 4.35-1.33 1.73-.28 3.11-.36 4.12-.25z"
        className="st1"
      />
      <path
        d="M259.8 98.18c-4.33-2.7-8.83-5.23-13.5-7.58-.58 1.42-1.15 2.84-1.71 4.26 1.41 2.14 2.77 4.3 4.06 6.48-1.37.45-2.73.91-4.07 1.39-5.47-8.86-11.96-17.44-19.44-25.58 1.46-.64 2.93-1.26 4.41-1.86 4.58 5.16 8.77 10.48 12.57 15.93 1.04-3.98 2.11-7.95 3.22-11.91 1.77-.56 3.56-1.09 5.37-1.59-1.07 3.23-2.11 6.47-3.12 9.71 5.9 2.94 11.55 6.18 16.94 9.67-1.59.35-3.17.7-4.73 1.08z"
        className="st1"
      />
      <path
        d="M270.89 90.02c1-.17 2.02-.02 3.02.45 1 .47 1.7 1.11 2.08 1.92.39.81.35 1.55-.09 2.23-.44.68-1.15 1.09-2.14 1.23-.99.15-1.96 0-2.94-.46-.97-.45-1.66-1.07-2.06-1.86-.4-.79-.4-1.53.01-2.22.4-.68 1.11-1.12 2.12-1.29zm-.31-2.06l-1.74.3c-4.71-6.22-8.21-10.41-9.8-12.85-1.68-2.55-3.44-5.07-5.27-7.57 1.94-.48 3.89-.94 5.87-1.37 1.79 2.55 3.5 5.12 5.14 7.71 1.51 2.42 3.61 7.01 5.8 13.78z"
        className="st1"
      />
    </g>
    <path
      d="M258 158h23v8h-23z"
      className="st1"
      transform="rotate(-45 269.49943028 162.00393598)"
    />
  </DarkenWrapper>
)

export default DarkenIcon
