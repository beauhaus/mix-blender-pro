import React from "react"
import styled from "styled-components"
const IncrementWrapper = styled.svg`
  position: relative;
  ${"" /* width: 1 */}
  ${"" /* height: 1 */}
  z-index: 4;
  ${"" /* mix-blend-mode: hard-light; */}
  opacity: 0.8;
  .st2 {
    fill: #ffc59b;
  }
  .st3 {
    fill: #e6e6e6;
  }
  .st4 {
    fill: #7fffc6;
  }
  .st5 {
    fill: #f0dc71;
  }
`
const Incrementor = () => {
  return (
    <IncrementWrapper
      className="incrementor-lights"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="26 26 348 348"
      //   preserveAspectRatio="none"
    >
      <path
        d="M311.09 302.57c7.64-8.32 14.35-17.49 19.93-27.26l11.92 6.14c-6.27 10.98-13.83 21.26-22.47 30.55l-9.38-9.43z"
        className="st2"
      />
      <path
        d="M331.21 275.97l11.04 5.68c-6.12 10.63-13.44 20.59-21.79 29.62l-8.68-8.72c7.42-8.13 13.96-17.06 19.43-26.58m-.39-1.32c-5.73 10.1-12.59 19.47-20.43 27.94l10.09 10.14c8.9-9.51 16.69-20.07 23.15-31.47l-12.81-6.61z"
        className="st3"
      />
      <path
        d="M336.97 263.75c4.71-10.21 8.27-20.94 10.57-31.9l13.43 2.23c-2.6 12.34-6.64 24.39-12.03 35.84l-11.97-6.17z"
        className="st2"
      />
      <path
        d="M347.92 232.42l12.44 2.07c-2.56 11.96-6.48 23.64-11.66 34.75l-11.08-5.71c4.56-9.97 8.03-20.43 10.3-31.11m-.78-1.14c-2.36 11.43-6.03 22.38-10.83 32.7l12.85 6.62c5.51-11.63 9.71-24 12.39-36.93l-14.41-2.39z"
        className="st3"
      />
      <path
        d="M349.65 219.02c.73-6.04 1.1-12.17 1.1-18.25 0-5.23-.28-10.56-.83-15.83l13.69-2.07c.59 5.7.89 11.46.89 17.13 0 7.07-.46 14.22-1.37 21.26l-13.48-2.24z"
        className="st2"
      />
      <path
        d="M363.17 183.45c.55 5.51.83 11.08.83 16.55 0 6.87-.44 13.83-1.3 20.68l-12.5-2.08c.7-5.91 1.05-11.9 1.05-17.84 0-5.09-.26-10.27-.79-15.41l12.71-1.9m.88-1.15l-14.68 2.22c.58 5.34.88 10.76.88 16.26 0 6.32-.4 12.55-1.15 18.66l14.46 2.4c.94-7.15 1.44-14.44 1.44-21.84 0-5.98-.33-11.88-.95-17.7z"
        className="st3"
      />
      <path
        d="M348.01 172.08c-2.16-11.19-5.59-22.12-10.22-32.49l12.61-6.31c5.22 11.74 9.04 24.09 11.37 36.72l-13.76 2.08z"
        className="st2"
      />
      <path
        d="M350.16 133.96c5.02 11.4 8.73 23.38 11.03 35.63l-12.78 1.93c-2.14-10.91-5.49-21.56-9.97-31.69l11.72-5.87m.48-1.36l-13.51 6.76c4.72 10.51 8.26 21.66 10.47 33.29l14.75-2.23c-2.39-13.22-6.36-25.9-11.71-37.82z"
        className="st3"
      />
      <path
        d="M331.99 127.96c-5.45-9.85-12.03-19.1-19.56-27.51l10.24-10.05c8.52 9.53 15.91 20.02 21.99 31.22l-12.67 6.34z"
        className="st2"
      />
      <path
        d="M322.64 91.13c8.23 9.27 15.4 19.44 21.33 30.28l-11.78 5.89c-5.35-9.59-11.76-18.6-19.07-26.82l9.52-9.35m.05-1.45l-10.95 10.75c7.71 8.56 14.45 18.02 20.04 28.19l13.56-6.78c-6.27-11.63-13.89-22.42-22.65-32.16z"
        className="st3"
      />
      <path
        d="M303.35 91.14c-8.24-7.75-17.35-14.57-27.1-20.29l6.76-12.9c11.05 6.47 21.34 14.24 30.62 23.1l-10.28 10.09z"
        className="st4"
      />
      <path
        d="M283.21 58.65c10.69 6.31 20.68 13.84 29.7 22.41l-9.56 9.38c-8.06-7.53-16.94-14.18-26.43-19.78l6.29-12.01m-.4-1.39l-7.22 13.78c10.06 5.85 19.37 12.84 27.77 20.79l10.99-10.78c-9.5-9.12-20.08-17.13-31.54-23.79z"
        className="st3"
      />
      <path
        d="M264.77 64.77c-10.42-4.95-21.42-8.69-32.72-11.12l2.43-14.52c12.81 2.73 25.28 7.01 37.07 12.71l-6.78 12.93z"
        className="st4"
      />
      <path
        d="M234.88 39.72c12.42 2.69 24.52 6.84 35.98 12.34l-6.31 12.05c-10.18-4.8-20.91-8.44-31.93-10.85l2.26-13.54m-.82-1.19l-2.59 15.51c11.74 2.48 22.97 6.34 33.52 11.39l7.24-13.81c-11.99-5.85-24.78-10.28-38.17-13.09z"
        className="st3"
      />
      <path
        d="M219.23 51.46c-6.27-.79-12.65-1.19-18.98-1.19-5.2 0-10.49.28-15.74.82l-2.24-14.64c5.91-.63 11.87-.96 17.73-.96 7.19 0 14.47.48 21.66 1.42l-2.43 14.55z"
        className="st4"
      />
      <path
        d="M200 36c7 0 14.08.45 21.08 1.35l-2.27 13.55c-6.14-.75-12.38-1.13-18.56-1.13-5.06 0-10.21.26-15.31.78l-2.09-13.65c5.73-.6 11.49-.9 17.15-.9m0-1c-6.19 0-12.29.35-18.3 1.02l2.39 15.63c5.31-.57 10.7-.87 16.16-.87 6.57 0 13.04.43 19.39 1.25l2.59-15.52C214.96 35.52 207.54 35 200 35z"
        className="st3"
      />
      <g>
        <path
          d="M132.23 50.07c11.86-5.37 24.36-9.31 37.18-11.72L171.66 53c-11.29 2.17-22.31 5.64-32.76 10.31l-6.67-13.24z"
          className="st4"
        />
        <path
          d="M169 38.94l2.09 13.66c-11.01 2.15-21.75 5.53-31.96 10.06l-6.22-12.34c11.53-5.18 23.66-9.01 36.09-11.38m.83-1.18c-13.4 2.48-26.23 6.57-38.28 12.07l7.12 14.13c10.59-4.77 21.83-8.34 33.56-10.56l-2.4-15.64z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M88.44 79.12c9.77-9.02 20.58-16.83 32.17-23.22l6.66 13.23c-10.2 5.67-19.76 12.54-28.4 20.42L88.44 79.12z"
          className="st4"
        />
        <path
          d="M120.4 56.59l6.21 12.34c-9.94 5.57-19.26 12.27-27.72 19.93l-9.72-9.72c9.51-8.73 20-16.31 31.23-22.55m.42-1.38c-12.02 6.59-23.13 14.64-33.1 23.9l11.13 11.13c8.79-8.07 18.55-15.1 29.08-20.91l-7.11-14.12z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M56.17 120.12c6.38-11.46 14.13-22.15 23.07-31.81l10.41 10.41c-7.87 8.52-14.75 17.94-20.44 28.01l-13.04-6.61z"
          className="st5"
        />
        <path
          d="M79.26 89.03l9.7 9.7c-7.65 8.34-14.36 17.53-19.95 27.33l-12.15-6.15c6.23-11.1 13.76-21.48 22.4-30.88m-.03-1.44c-9.19 9.87-17.18 20.85-23.75 32.74l13.92 7.05c5.84-10.39 12.88-20.01 20.94-28.68L79.23 87.59z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M38.41 169.09c2.45-12.88 6.45-25.45 11.9-37.37l12.99 6.58c-4.81 10.53-8.39 21.62-10.65 32.98l-14.24-2.19z"
          className="st5"
        />
        <path
          d="M50.55 132.4l12.1 6.13c-4.66 10.29-8.15 21.1-10.39 32.18L39 168.67c2.42-12.49 6.3-24.68 11.55-36.27m-.48-1.36c-5.58 12.1-9.73 24.99-12.25 38.46l15.22 2.34c2.31-11.81 6-23.13 10.91-33.77l-13.88-7.03z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M36.95 221.86c-.96-7.26-1.45-14.61-1.45-21.86 0-5.96.33-12.03.99-18.06l14.18 2.18c-.61 5.56-.92 11.16-.92 16.64 0 6.26.39 12.55 1.15 18.72l-13.95 2.38z"
          className="st5"
        />
        <path
          d="M36.93 182.52l13.19 2.03c-.58 5.42-.87 10.87-.87 16.22 0 6.11.37 12.27 1.1 18.31l-12.97 2.2C36.46 214.21 36 207.06 36 200c0-5.77.31-11.64.93-17.48m-.88-1.15C35.37 187.49 35 193.7 35 200c0 7.61.53 15.1 1.52 22.44l14.93-2.53c-.8-6.26-1.21-12.65-1.21-19.13 0-5.77.34-11.46.97-17.06l-15.16-2.35z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M51.76 271.38c-5.63-11.68-9.87-24.02-12.59-36.71l13.9-2.36c2.4 11.25 6.1 22.21 11.01 32.62l-12.32 6.45z"
          className="st5"
        />
        <path
          d="M52.68 232.88c2.38 10.96 5.99 21.66 10.74 31.82l-11.44 5.99c-5.43-11.35-9.54-23.32-12.22-35.62l12.92-2.19m.78-1.14l-14.89 2.53c2.8 13.26 7.19 25.93 12.96 37.8l13.2-6.92c-5-10.52-8.82-21.72-11.27-33.41z"
          className="st3"
        />
      </g>
      <g>
        <path
          d="M81.11 313.68c-8.93-9.33-16.74-19.7-23.24-30.82l12.26-6.42c5.76 9.88 12.66 19.13 20.53 27.48l-9.55 9.76z"
          className="st5"
        />
        <path
          d="M69.94 277.1c5.65 9.63 12.38 18.64 20.03 26.81l-8.85 9.05c-8.63-9.08-16.21-19.13-22.55-29.9l11.37-5.96m.38-1.33l-13.15 6.89c6.69 11.54 14.74 22.19 23.93 31.74l10.24-10.48c-8.05-8.5-15.12-17.95-21.02-28.15z"
          className="st3"
        />
      </g>
    </IncrementWrapper>
  )
}

export default Incrementor

/*
<svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 400 400">
  <defs/>
  <style>
    .st1{fill:#ffc59b}.st2{fill:#e6e6e6}.st3{fill:#7fffc6}.st4{fill:#f0dc71}
  </style>
  <path fill="#72b583" d="M0 0h400v400H0z"/>
  <path d="M311.09 302.57c7.64-8.32 14.35-17.49 19.93-27.26l16.9 8.71c-6.51 11.53-14.39 22.3-23.42 32.03l-13.41-13.48z" className="st1"/>
  <path d="M331.21 275.97l16.02 8.25c-6.36 11.17-14 21.63-22.74 31.1l-12.71-12.77c7.42-8.13 13.96-17.06 19.43-26.58m-.39-1.32c-5.73 10.1-12.59 19.47-20.43 27.94l14.12 14.19c9.29-9.95 17.39-21 24.1-32.96l-17.79-9.17z" className="st2"/>
  <path d="M336.97 263.75c4.71-10.21 8.27-20.94 10.57-31.9l18.76 3.12c-2.65 12.91-6.82 25.52-12.42 37.5l-16.91-8.72z" className="st1"/>
  <path d="M347.92 232.42l17.78 2.95c-2.61 12.53-6.66 24.77-12.06 36.41l-16.02-8.25c4.56-9.97 8.03-20.43 10.3-31.11m-.78-1.14c-2.36 11.43-6.03 22.38-10.83 32.7l17.8 9.17c5.72-12.15 10.06-25.07 12.78-38.59l-19.75-3.28z" className="st2"/>
  <path d="M349.65 219.02c.73-6.04 1.1-12.17 1.1-18.25 0-5.23-.28-10.56-.83-15.83l18.8-2.84c.68 6.24 1.03 12.52 1.03 18.67 0 7.13-.45 14.31-1.34 21.37l-18.76-3.12z" className="st1"/>
  <path d="M368.28 182.67c.64 6.04.97 12.13.97 18.1 0 6.93-.43 13.92-1.27 20.79l-17.78-2.95c.7-5.91 1.05-11.9 1.05-17.84 0-5.09-.26-10.27-.79-15.41l17.82-2.69m.88-1.14l-19.79 2.99c.58 5.34.88 10.76.88 16.26 0 6.32-.4 12.55-1.15 18.66l19.75 3.28c.93-7.18 1.41-14.51 1.41-21.94-.01-6.51-.39-12.93-1.1-19.25z" className="st2"/>
  <path d="M348.01 172.08c-2.16-11.19-5.59-22.12-10.22-32.49l17.01-8.51c5.5 12.17 9.54 25.01 12.01 38.16l-18.8 2.84z" className="st1"/>
  <path d="M354.56 131.76c5.3 11.84 9.22 24.3 11.67 37.07l-17.82 2.69c-2.14-10.91-5.49-21.56-9.97-31.69l16.12-8.07m.48-1.36l-17.9 8.96c4.72 10.51 8.26 21.66 10.47 33.29l19.79-2.99c-2.54-13.74-6.73-26.9-12.36-39.26z" className="st2"/>
  <path d="M331.99 127.96c-5.45-9.85-12.03-19.1-19.56-27.51l13.58-13.32c8.9 9.84 16.63 20.71 22.99 32.32l-17.01 8.51z" className="st1"/>
  <path d="M325.98 87.85c8.61 9.58 16.12 20.13 22.33 31.38l-16.12 8.07c-5.35-9.59-11.76-18.6-19.07-26.82l12.86-12.63m.05-1.45l-14.29 14.02c7.71 8.56 14.45 18.02 20.04 28.19l17.91-8.96c-6.55-12.03-14.51-23.19-23.66-33.25z" className="st2"/>
  <path d="M303.35 91.14c-8.24-7.75-17.35-14.57-27.1-20.29L285.08 54c11.48 6.65 22.19 14.67 31.84 23.83l-13.57 13.31z" className="st3"/>
  <path d="M285.28 54.69c11.13 6.49 21.52 14.27 30.92 23.14l-12.86 12.62c-8.06-7.53-16.94-14.18-26.43-19.78l8.37-15.98m-.4-1.39l-9.29 17.74c10.06 5.85 19.37 12.84 27.77 20.79l14.29-14.02c-9.87-9.41-20.86-17.66-32.77-24.51z" className="st2"/>
  <path d="M264.77 64.77c-10.42-4.95-21.42-8.69-32.72-11.12l3.14-18.77c13.26 2.78 26.18 7.17 38.41 13.04l-8.83 16.85z" className="st3"/>
  <path d="M235.59 35.48c12.88 2.74 25.42 7 37.32 12.67l-8.36 15.96c-10.18-4.8-20.91-8.44-31.93-10.85l2.97-17.78m-.82-1.2l-3.3 19.75c11.74 2.48 22.97 6.34 33.52 11.39l9.29-17.73c-12.41-6-25.65-10.55-39.51-13.41z" className="st2"/>
  <path d="M219.23 51.46c-6.27-.79-12.65-1.19-18.98-1.19-5.2 0-10.49.28-15.74.82l-2.88-18.8c6.21-.68 12.47-1.02 18.61-1.02 7.35 0 14.78.48 22.11 1.44l-3.12 18.75z" className="st3"/>
  <path d="M200.25 31.77c7.15 0 14.39.46 21.53 1.37l-2.97 17.76c-6.14-.75-12.38-1.13-18.56-1.13-5.06 0-10.21.26-15.31.78l-2.73-17.81c6.03-.64 12.09-.97 18.04-.97m0-1c-6.49 0-12.89.38-19.19 1.08l3.03 19.78c5.31-.57 10.7-.87 16.16-.87 6.57 0 13.04.43 19.39 1.25l3.3-19.73c-7.42-.99-15-1.51-22.69-1.51z" className="st2"/>
  <g>
    <path d="M130.34 46.32c12.26-5.56 25.19-9.63 38.43-12.12l2.88 18.8c-11.29 2.17-22.31 5.64-32.76 10.31l-8.55-16.99z" className="st3"/>
    <path d="M168.36 34.79l2.73 17.81c-11.01 2.15-21.75 5.53-31.96 10.06l-8.11-16.09c11.93-5.37 24.48-9.33 37.34-11.78m.83-1.18c-13.84 2.55-27.09 6.78-39.53 12.47l9.01 17.88c10.59-4.77 21.83-8.34 33.56-10.56l-3.04-19.79z" className="st2"/>
  </g>
  <g>
    <path d="M85.43 76.1c10.11-9.32 21.3-17.38 33.29-23.96l8.56 16.99c-10.21 5.67-19.76 12.54-28.4 20.42L85.43 76.1z" className="st3"/>
    <path d="M118.5 52.83l8.11 16.1c-9.94 5.57-19.26 12.27-27.72 19.93L86.15 76.12c9.85-9.03 20.73-16.86 32.35-23.29m.43-1.38c-12.43 6.79-23.92 15.08-34.22 24.64l14.15 14.15c8.79-8.07 18.55-15.1 29.08-20.91l-9.01-17.88z" className="st2"/>
  </g>
  <g>
    <path d="M52.24 118.13c6.63-11.85 14.69-22.9 23.97-32.86l13.44 13.44c-7.87 8.52-14.75 17.94-20.44 28.01l-16.97-8.59z" className="st4"/>
    <path d="M76.22 85.99l12.74 12.74c-7.65 8.34-14.36 17.53-19.95 27.33l-16.08-8.14c6.48-11.5 14.31-22.23 23.29-31.93m-.02-1.44c-9.53 10.17-17.83 21.51-24.65 33.79l17.86 9.05c5.84-10.39 12.88-20.01 20.94-28.68L76.2 84.55z" className="st2"/>
  </g>
  <g>
    <path d="M33.85 168.39c2.58-13.34 6.78-26.35 12.48-38.68l16.96 8.59c-4.81 10.53-8.39 21.62-10.65 32.98l-18.79-2.89z" className="st4"/>
    <path d="M46.57 130.39l16.07 8.14c-4.66 10.29-8.15 21.1-10.39 32.18l-17.81-2.74c2.55-12.95 6.63-25.58 12.13-37.58m-.47-1.36c-5.83 12.51-10.18 25.84-12.83 39.77l19.78 3.05c2.31-11.81 6-23.13 10.91-33.77l-17.86-9.05z" className="st2"/>
  </g>
  <g>
    <path d="M32.16 222.67c-.94-7.25-1.41-14.62-1.41-21.9 0-6.46.38-13.03 1.13-19.54l18.8 2.89c-.61 5.56-.92 11.16-.92 16.64 0 6.26.39 12.55 1.15 18.72l-18.75 3.19z" className="st4"/>
    <path d="M32.31 181.81l17.81 2.74c-.58 5.42-.87 10.87-.87 16.22 0 6.11.37 12.27 1.1 18.31l-17.76 3.01c-.89-7.07-1.34-14.23-1.34-21.32 0-6.27.36-12.64 1.06-18.96m-.87-1.15c-.78 6.6-1.19 13.31-1.19 20.11 0 7.62.51 15.12 1.48 22.48l19.73-3.35c-.8-6.26-1.21-12.65-1.21-19.13 0-5.77.34-11.46.97-17.06l-19.78-3.05z" className="st2"/>
  </g>
  <g>
    <path d="M47.22 273.76c-5.82-12.18-10.16-25.05-12.92-38.26l18.76-3.18c2.4 11.25 6.1 22.21 11.01 32.62l-16.85 8.82z" className="st4"/>
    <path d="M52.68 232.88c2.38 10.96 5.99 21.66 10.74 31.82l-15.97 8.37c-5.62-11.85-9.83-24.35-12.55-37.17l17.78-3.02m.78-1.14l-19.74 3.35c2.83 13.8 7.33 26.99 13.28 39.35l17.74-9.29c-5.01-10.52-8.83-21.72-11.28-33.41z" className="st2"/>
  </g>
  <g>
    <path d="M77.36 317.51c-9.27-9.76-17.37-20.6-24.08-32.25l16.85-8.83c5.76 9.88 12.66 19.13 20.53 27.48l-13.3 13.6z" className="st4"/>
    <path d="M69.94 277.1c5.65 9.63 12.38 18.64 20.03 26.81l-12.6 12.88c-8.98-9.51-16.84-20.04-23.39-31.33l15.96-8.36m.38-1.33l-17.73 9.29c6.9 12.06 15.23 23.19 24.77 33.17l13.99-14.31c-8.06-8.5-15.13-17.95-21.03-28.15z" className="st2"/>
  </g>
</svg>
*/
