import React from "react"
import styled from "styled-components"
const IncrementWrapper = styled.svg`
  position: relative;
  z-index: 4;
  .inc-lights {
    .inc-light-off {
      fill: var(--orange-dk);
      stroke: var(--ice-blue);
      stroke: #444;
      stroke-width: 0;
    }
    .inc-light-on {
      opacity: 0;
      fill: var(--yellow-lt);
      ${"" /* fill: #000; */}
      stroke-width: 1;

      stroke: #faa91f;

      -webkit-animation: fadeIn 800ms ease-in forwards;
      animation: fadeIn 800ms ease-in forwards;
    }
  }
  .glow-lights {
    opacity: 0;
    filter: url(#inc-blur-filter);
    fill: var(--yellow-lt);
    fill: #faa91f;
    fill: #fff;
    stroke-width: 3;
    stroke: var(--yellow-lt);

    stroke: #faa91f;
    -webkit-animation: fadeIn 300ms ease-in forwards;
    animation: fadeIn 300ms ease-in forwards;
  }
`
const Incrementor = ({ count }) => {
  const mixModeNum = count
  return (
    <IncrementWrapper
      className="incrementor-lights"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="26 26 348 348"
    >
      <filter id="inc-blur-filter" y="-5" x="-10" height="358" width="368">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <g className="inc-lights">
        <path
          className={mixModeNum > 0 ? `inc-light-on` : "inc-light-off"}
          d="M81.11 313.68c-8.93-9.33-16.74-19.7-23.24-30.82l12.26-6.42c5.76 9.88 12.66 19.13 20.53 27.48l-9.55 9.76z"
        />
        <path
          className={mixModeNum > 1 ? `inc-light-on` : "inc-light-off"}
          d="M51.76 271.38c-5.63-11.68-9.87-24.02-12.59-36.71l13.9-2.36c2.4 11.25 6.1 22.21 11.01 32.62l-12.32 6.45z"
        />
        <path
          className={mixModeNum > 2 ? `inc-light-on` : "inc-light-off"}
          d="M36.95 221.86c-.96-7.26-1.45-14.61-1.45-21.86 0-5.96.33-12.03.99-18.06l14.18 2.18c-.61 5.56-.92 11.16-.92 16.64 0 6.26.39 12.55 1.15 18.72l-13.95 2.38z"
        />
        <path
          className={mixModeNum > 3 ? `inc-light-on` : "inc-light-off"}
          d="M38.41 169.09c2.45-12.88 6.45-25.45 11.9-37.37l12.99 6.58c-4.81 10.53-8.39 21.62-10.65 32.98l-14.24-2.19z"
        />
        <path
          className={mixModeNum > 4 ? `inc-light-on` : "inc-light-off"}
          d="M56.17 120.12c6.38-11.46 14.13-22.15 23.07-31.81l10.41 10.41c-7.87 8.52-14.75 17.94-20.44 28.01l-13.04-6.61z"
        />
        <path
          className={mixModeNum > 5 ? `inc-light-on` : "inc-light-off"}
          d="M88.44 79.12c9.77-9.02 20.58-16.83 32.17-23.22l6.66 13.23c-10.2 5.67-19.76 12.54-28.4 20.42L88.44 79.12z"
        />
        <path
          className={mixModeNum > 6 ? `inc-light-on` : "inc-light-off"}
          d="M132.23 50.07c11.86-5.37 24.36-9.31 37.18-11.72L171.66 53c-11.29 2.17-22.31 5.64-32.76 10.31l-6.67-13.24z"
        />
        <path
          className={mixModeNum > 7 ? `inc-light-on` : "inc-light-off"}
          d="M219.23 51.46c-6.27-.79-12.65-1.19-18.98-1.19-5.2 0-10.49.28-15.74.82l-2.24-14.64c5.91-.63 11.87-.96 17.73-.96 7.19 0 14.47.48 21.66 1.42l-2.43 14.55z"
        />
        <path
          className={mixModeNum > 8 ? `inc-light-on` : "inc-light-off"}
          d="M264.77 64.77c-10.42-4.95-21.42-8.69-32.72-11.12l2.43-14.52c12.81 2.73 25.28 7.01 37.07 12.71l-6.78 12.93z"
        />
        <path
          className={mixModeNum > 9 ? `inc-light-on` : "inc-light-off"}
          d="M303.35 91.14c-8.24-7.75-17.35-14.57-27.1-20.29l6.76-12.9c11.05 6.47 21.34 14.24 30.62 23.1l-10.28 10.09z"
        />
        <path
          className={mixModeNum > 10 ? `inc-light-on` : "inc-light-off"}
          d="M331.99 127.96c-5.45-9.85-12.03-19.1-19.56-27.51l10.24-10.05c8.52 9.53 15.91 20.02 21.99 31.22l-12.67 6.34z"
        />
        <path
          className={mixModeNum > 11 ? `inc-light-on` : "inc-light-off"}
          d="M348.01 172.08c-2.16-11.19-5.59-22.12-10.22-32.49l12.61-6.31c5.22 11.74 9.04 24.09 11.37 36.72l-13.76 2.08z"
        />
        <path
          className={mixModeNum > 12 ? `inc-light-on` : "inc-light-off"}
          d="M349.65 219.02c.73-6.04 1.1-12.17 1.1-18.25 0-5.23-.28-10.56-.83-15.83l13.69-2.07c.59 5.7.89 11.46.89 17.13 0 7.07-.46 14.22-1.37 21.26l-13.48-2.24z"
        />
        <path
          className={mixModeNum > 13 ? `inc-light-on` : "inc-light-off"}
          d="M336.97 263.75c4.71-10.21 8.27-20.94 10.57-31.9l13.43 2.23c-2.6 12.34-6.64 24.39-12.03 35.84l-11.97-6.17z"
        />
        <path
          className={mixModeNum > 14 ? `inc-light-on` : "inc-light-off"}
          d="M311.09 302.57c7.64-8.32 14.35-17.49 19.93-27.26l11.92 6.14c-6.27 10.98-13.83 21.26-22.47 30.55l-9.38-9.43z"
        />
      </g>
      <g className="glow-lights">
        {mixModeNum > 0 && (
          <path d="M81.11 313.68c-8.93-9.33-16.74-19.7-23.24-30.82l12.26-6.42c5.76 9.88 12.66 19.13 20.53 27.48l-9.55 9.76z" />
        )}
        {mixModeNum > 1 && (
          <path d="M51.76 271.38c-5.63-11.68-9.87-24.02-12.59-36.71l13.9-2.36c2.4 11.25 6.1 22.21 11.01 32.62l-12.32 6.45z" />
        )}
        {mixModeNum > 2 && (
          <path d="M36.95 221.86c-.96-7.26-1.45-14.61-1.45-21.86 0-5.96.33-12.03.99-18.06l14.18 2.18c-.61 5.56-.92 11.16-.92 16.64 0 6.26.39 12.55 1.15 18.72l-13.95 2.38z" />
        )}
        {mixModeNum > 3 && (
          <path d="M38.41 169.09c2.45-12.88 6.45-25.45 11.9-37.37l12.99 6.58c-4.81 10.53-8.39 21.62-10.65 32.98l-14.24-2.19z" />
        )}
        {mixModeNum > 4 && (
          <path d="M56.17 120.12c6.38-11.46 14.13-22.15 23.07-31.81l10.41 10.41c-7.87 8.52-14.75 17.94-20.44 28.01l-13.04-6.61z" />
        )}
        {mixModeNum > 5 && (
          <path d="M88.44 79.12c9.77-9.02 20.58-16.83 32.17-23.22l6.66 13.23c-10.2 5.67-19.76 12.54-28.4 20.42L88.44 79.12z" />
        )}
        {mixModeNum > 6 && (
          <path d="M132.23 50.07c11.86-5.37 24.36-9.31 37.18-11.72L171.66 53c-11.29 2.17-22.31 5.64-32.76 10.31l-6.67-13.24z" />
        )}
        {mixModeNum > 7 && (
          <path d="M219.23 51.46c-6.27-.79-12.65-1.19-18.98-1.19-5.2 0-10.49.28-15.74.82l-2.24-14.64c5.91-.63 11.87-.96 17.73-.96 7.19 0 14.47.48 21.66 1.42l-2.43 14.55z" />
        )}
        {mixModeNum > 8 && (
          <path d="M264.77 64.77c-10.42-4.95-21.42-8.69-32.72-11.12l2.43-14.52c12.81 2.73 25.28 7.01 37.07 12.71l-6.78 12.93z" />
        )}
        {mixModeNum > 9 && (
          <path d="M303.35 91.14c-8.24-7.75-17.35-14.57-27.1-20.29l6.76-12.9c11.05 6.47 21.34 14.24 30.62 23.1l-10.28 10.09z" />
        )}
        {mixModeNum > 10 && (
          <path d="M331.99 127.96c-5.45-9.85-12.03-19.1-19.56-27.51l10.24-10.05c8.52 9.53 15.91 20.02 21.99 31.22l-12.67 6.34z" />
        )}
        {mixModeNum > 11 && (
          <path d="M348.01 172.08c-2.16-11.19-5.59-22.12-10.22-32.49l12.61-6.31c5.22 11.74 9.04 24.09 11.37 36.72l-13.76 2.08z" />
        )}
        {mixModeNum > 12 && (
          <path d="M349.65 219.02c.73-6.04 1.1-12.17 1.1-18.25 0-5.23-.28-10.56-.83-15.83l13.69-2.07c.59 5.7.89 11.46.89 17.13 0 7.07-.46 14.22-1.37 21.26l-13.48-2.24z" />
        )}
        {mixModeNum > 13 && (
          <path d="M336.97 263.75c4.71-10.21 8.27-20.94 10.57-31.9l13.43 2.23c-2.6 12.34-6.64 24.39-12.03 35.84l-11.97-6.17z" />
        )}
        {mixModeNum > 14 && (
          <path d="M311.09 302.57c7.64-8.32 14.35-17.49 19.93-27.26l11.92 6.14c-6.27 10.98-13.83 21.26-22.47 30.55l-9.38-9.43z" />
        )}
      </g>
    </IncrementWrapper>
  )
}

export default Incrementor
