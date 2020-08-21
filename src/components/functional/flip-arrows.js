import React from "react"
import styled from "styled-components"

const StyledArrows = styled.g`
  .flip-arrows {
    fill: #e5b385;
    ${"" /* fill: #ebe4a8; */}
    fill: #863838;
    fill: #8eb3b3;
    fill: var(--idle-blue);
  }
  #arrow-glow {
    fill: var(--active-blue);
    stroke: var(--active-blue);
    mix-blend-mode: screen;
  }
  .arrows-second-task {
    stroke: var(--active-blue);
    stroke-width: 2;
    fill: #000;
  }
`

const FlipArrows = () => {
  return (
    <StyledArrows>
      <filter id="arrow-glow-blur">
        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
      </filter>

      <path
        // className={addImageMode ? "arrows-second-task" : "flip-arrows"}
        className={false ? "arrows-second-task" : "flip-arrows"}
        // ref={elem => (flipArrows = elem)}
        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
      />

      <path
        filter="url(#arrow-glow-blur)"
        id="arrow-glow"
        // ref={elem => (arrowGlow = elem)}
        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"
      />
    </StyledArrows>
  )
}

export default FlipArrows
