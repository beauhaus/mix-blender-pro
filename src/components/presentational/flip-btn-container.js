import React, { useContext } from "react"
import styled from "styled-components"

const StyledFlipBtnContainer = styled.button`
  border-radius: 24px;
  outline: none;
  border: none;
  position: relative;
  width: 48vw;
  height: 20vh;
  background: linear-gradient(150deg, #fff 45%, #000 55%);

  display: grid;
  place-items: center;
  &::before {
    content: "";
    border-radius: 20px;
    box-shadow: 0 2px 2px 1px #fff, inset 0 2px 2px 1px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 92%;
    height: 90%;
    ${"" /* background: lightgreen; */}
  }
  & > div {
    ${"" /* display: none; */}
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    margin: 0;
    border: 1px solid #000;
    width: 92%;
    height: 88%;
    border-radius: 18px;
    background: linear-gradient(
      90deg,
      #000 0%,
      #3a3d2c 9%,
      #5e6543 20%,
      #6e7f5c 66%,
      #859a84 85%,
      #f3f1f1 100%
    );
    filter: grayscale(50%);
  }
`

const FlipBtnContainer = props => {
  return (
    <StyledFlipBtnContainer className="flip-btn-container">
      <div className="screen">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="scrn-line-grid"
          width="100%"
          height="100%"
          viewBox="0 0 300 300"
          overflow="hidden"
          preserveAspectRatio="none"
        >
          <filter id="arrow-glow-blur">
            <feGaussianBlur stdDeviation="6"></feGaussianBlur>
          </filter>
          <g className="lines">
            <path d="M37.5 0v300" className="st1" />
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
            <path d="M0 258.5h300" className="st1" />
          </g>
        </svg>
      </div>
    </StyledFlipBtnContainer>
  )
}

export default FlipBtnContainer

/*

 <svg
        xmlns="http://www.w3.org/2000/svg"
        className="scrn-line-grid"
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        overflow="hidden"
        preserveAspectRatio="none"
      >
        <filter id="arrow-glow-blur">
          <feGaussianBlur stdDeviation="6"></feGaussianBlur>
        </filter>
        <g className="lines">
          <path d="M37.5 0v300" className="st1" />
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
          <path d="M0 258.5h300" className="st1" />
        </g>
        <path
          className={addImageMode ? "arrows-second-task" : "flip-arrows"}
          ref={(elem) => (flipArrows = elem)}
          d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
        />

        <path
          filter="url(#arrow-glow-blur)"
          id="arrow-glow"
          ref={(elem) => (arrowGlow = elem)}
          d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
        />

        <linearGradient
          id="vert-grad"
          x1="0"
          x2="300"
          y1="150"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            ref={(elem) => (secondaryTrimRight = elem)}
            stopColor="#fbb03b"
          />
          <stop offset=".1" stopColor="#fbb03b" stopOpacity="0" />
          <stop offset=".9" stopColor="#fbb03b" stopOpacity="0" />
          <stop
            offset="1"
            ref={(elem) => (secondaryTrimLeft = elem)}
            stopColor="#fbb03b"
          />
        </linearGradient>
        <linearGradient
          id="horiz-grad"
          x1="150"
          x2="150"
          y1="300"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            ref={(elem) => (secondaryTrimBot = elem)}
            stopColor="#fbb03b"
          />
          <stop offset=".1" stopColor="#fbb03b" stopOpacity="0" />
          <stop offset=".9" stopColor="#fbb03b" stopOpacity="0" />
          <stop
            offset="1"
            ref={(elem) => (secondaryTrimTop = elem)}
            stopColor="#fbb03b"
          />
        </linearGradient>
        {addImageMode && (
          <g className="secondary-gradient">
            <rect
              rx="30"
              ry="30"
              x="8"
              y="8"
              fill="url(#vert-grad)"
              width="284"
              height="284"
            />
            <rect
              rx="30"
              ry="30"
              x="8"
              y="8"
              fill="url(#horiz-grad)"
              width="284"
              height="284"
            />
          </g>
        )}
      </svg>

      */
