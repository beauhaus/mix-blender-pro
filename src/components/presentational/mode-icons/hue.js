import React from "react"
import styled from "styled-components"

const HueWrapper = styled.g`
  .st11,
  .st2,
  .st4 {
  }
  .st2 {
    fill: none;
    stroke-width: 3;
    stroke: #ccc;
  }
  .st11,
  .st4 {
    stroke: #fff;
  }
  .st4 {
    fill: none;
  }
  .st11 {
    stroke-width: 2;
  }
  .st11,
  .st13 {
    fill: none;
  }
  .st13,
  .st14,
  .st15 {
    stroke: #000;
  }
  .st15 {
    fill: none;
    stroke-width: 2;
  }
  #mouth {
    stroke-width: 1.5;
  }
  text {
    fill: #fff;
    font-size: 3rem;
  }
`

const HueIcon = () => (
  <HueWrapper>
    <circle className="icon-bg" cx="150" cy="150" r="150" />
    <g id="straws_2_">
      <path
        d="M21.35 168.43l11.88 13.46 8.16 50.66M76.68 167.76l6.15 14.48-.99 50.98M147.8 170.65l-10.77 12.03-12.63 49.3M190.82 171.01l-8.98 12.28-11.4 49.48M210.82 170.55l4.58 13.23 5.07 50.46M280 172.8l-11.62 14.55-14.13 59"
        className="st2"
      />
    </g>
    <g id="blue_glass_1_">
      <path
        fill="#57b1d9"
        d="M90 200.17c-4.61.26-22.68-.25-24.46.94-1.2.8-16.63 29.76-7.38 42.07 6.48 8.63 19.91 5.46 19.89 5.56-.04.22-.08.47-.12.73.24-.01.49 0 .74.02-.04-.27-.08-.53-.12-.76-.02-.1 14.43 3.82 19.89-5.56 4.07-7 2.5-15.05-.26-22.86-2.59-5.15-5.71-18.31-8.18-20.14z"
      />
      <path
        id="stem_4_"
        d="M77.56 184.21c5.46-.05 28.1-1.33 18.49 3.17-17.95 8.42 13.7 36.04 2.32 55.6-5.59 9.62-20.4 5.6-20.38 5.7.85 4.58 1.69 20.42 2.53 20.44 7.85.23 14.92 1.27 14.92 1.6 0 .75-8 1.35-17.88 1.35h.35c-9.87 0-17.88-.61-17.88-1.35 0-.33 7.07-1.37 14.92-1.6.84-.02 1.68-15.87 2.53-20.44.02-.1-14.78 3.92-20.38-5.7-11.38-19.56 20.26-47.18 2.32-55.6-9.61-4.51 13.03-3.22 18.49-3.17h-.35z"
        className="st4"
      />
    </g>
    <g id="green_glass_1_">
      <path
        fill="#66d16d"
        d="M135.29 200.17c-4.61.26-22.68-.25-24.46.94-1.2.8-16.63 29.76-7.38 42.07 6.48 8.63 19.91 5.46 19.89 5.56-.04.22-.08.47-.12.73.24-.01.49 0 .74.02-.04-.27-.08-.53-.12-.76-.02-.1 14.43 3.82 19.89-5.56 4.07-7 2.5-15.05-.26-22.86-2.59-5.15-5.71-18.31-8.18-20.14z"
      />
      <path
        id="stem_3_"
        d="M122.85 184.21c5.46-.05 28.1-1.33 18.49 3.17-17.95 8.42 13.7 36.04 2.32 55.6-5.59 9.62-20.4 5.6-20.38 5.7.85 4.58 1.69 20.42 2.53 20.44 7.85.23 14.92 1.27 14.92 1.6 0 .75-8 1.35-17.88 1.35h.35c-9.87 0-17.88-.61-17.88-1.35 0-.33 7.07-1.37 14.92-1.6.84-.02 1.68-15.87 2.53-20.44.02-.1-14.78 3.92-20.38-5.7-11.38-19.56 20.26-47.18 2.32-55.6-9.61-4.51 13.03-3.22 18.49-3.17h-.35z"
        className="st4"
      />
    </g>
    <g id="yellow_glass_1_">
      <path
        fill="#eacf3f"
        d="M183.88 207.83c6 11.79 9.71 24.41 4.35 35.36-3.69 7.54-20.42 5.79-20.38 5.56.02-.1-14.43 3.82-19.89-5.56-4.46-7.66-.4-25.8 4.78-35.45 28.24 0 18.58 0 31.14.09z"
      />
      <path
        id="stem_2_"
        d="M168.19 184.21c5.46-.05 28.1-1.33 18.49 3.17-17.95 8.42 13.7 36.04 2.32 55.6-5.59 9.62-20.4 5.6-20.38 5.7.85 4.58 1.69 20.42 2.53 20.44 7.85.23 14.92 1.27 14.92 1.6 0 .75-8 1.35-17.88 1.35h.35c-9.87 0-17.88-.61-17.88-1.35 0-.33 7.07-1.37 14.92-1.6.84-.02 1.68-15.87 2.53-20.44.02-.1-14.78 3.92-20.38-5.7-11.38-19.56 20.26-47.18 2.32-55.6-9.61-4.51 13.03-3.22 18.49-3.17h-.35z"
        className="st4"
      />
    </g>
    <g id="orange_glass_1_">
      <path
        fill="#f7ab52"
        d="M201.07 198.9c-1.31 11.97-15.84 30.25-7.67 44.29 5.46 9.39 19.91 5.46 19.89 5.56-.04.22 14.92 3.82 20.38-5.56 8.16-14.03-5.17-32.48-7.67-44.28-8.26.02-16.78.01-24.93-.01z"
      />
      <path
        id="stem_1_"
        d="M213.54 184.21c5.46-.05 28.1-1.33 18.49 3.17-17.95 8.42 13.7 36.04 2.32 55.6-5.59 9.62-20.4 5.6-20.38 5.7.85 4.58 1.69 20.42 2.53 20.44 7.85.23 14.92 1.27 14.92 1.6 0 .75-8 1.35-17.88 1.35h.35c-9.87 0-17.88-.61-17.88-1.35 0-.33 7.07-1.37 14.92-1.6.84-.02 1.68-15.87 2.53-20.44.02-.1-14.78 3.92-20.38-5.7-11.38-19.56 20.26-47.18 2.32-55.6-9.61-4.51 13.03-3.22 18.49-3.17h-.35z"
        className="st4"
      />
    </g>
    <g id="purple_glass_1_">
      <path
        fill="#9b67c2"
        d="M44.61 197.36c-4.09-.01-20.31-.01-24.41 0-.86 4.18-3.21 9.92-5.47 16.12C15.46 217.32 36 247 39 249c4.08 2.72 16.46-3.78 17.06-12.23C57.49 223.9 45 211 44.61 197.36z"
      />
      <path
        d="M38.94 249.17C48 251 56 244 56 235c0-11-6-20-10-29-3-7 1.33-19.69 6-21-14.5-.5-21.5-.5-41 0 10.97 5.43 8.34 18.79 4.33 27.34"
        className="st4"
      />
    </g>
    <g id="red_glass_1_">
      <path
        fill="#f07d7d"
        d="M268.04 241.73c.05-.06.1-.13.15-.2.32-.4.67-.81 1.04-1.22.62-1.02 1.29-2 1.99-2.89.36-.46.77-.92 1.2-1.39.87-1.63 1.84-3.15 2.91-4.5.06-.07.13-.15.19-.22.97-2.53 2.2-4.93 3.64-7.01l-.01-2.89s-6.36-1.95-19.66 8.33c-6.2 4.79-15.35-.01-23.03-.04-.67 4.69-.26 9.29 2.19 13.5 5.46 9.39 19.91 5.46 19.89 5.56-.04.22-.08.47-.12.73.24-.01.49 0 .74.02-.04-.27-.08-.53-.12-.76 0-.03.89.2 2.31.4.58-.93 1.19-1.81 1.84-2.62 1.26-1.59 2.93-3.25 4.85-4.8z"
      />
      <path
        fill="#f07f7f"
        d="M148.27 107.49l-12.33-29.16s92.63 2.32 109.62 25.98c4.7 6.55 15.61 128.08 15.61 128.08l-4.1-.6S246 123.53 235.81 109c-2.77-3.96-16.83-8.44-16.83-8.44-24.73 5.8-48.64 9.12-70.71 6.93z"
      />
      <path
        d="M258.5 250.67c.09-.66.19-1.33.31-1.99-5.92 1.15-13.81 1.63-18.39-3.15C236 241 235 235 236 229c2-14 19-31 3-43l-1-1c7 0 32.5-.5 44.5-.5-7 7-6.18 28.37-2.48 37.95"
        className="st4"
      />
    </g>
    <g id="blender_1_">
      <g id="base_1_">
        <path
          d="M69.42 153.94c-11.94-26.16-22.34-52.99-31.19-80.5-.73-1.88.63-3.35 1.9-4.81 4.77-5.47 32.38 82.19 35.74 82.51 4.69.44-4.79 7.27-6.45 2.8z"
          className="st11"
        />
        <path
          d="M78.77 158.64c-13.13-29.9-24.93-60.37-35.42-91.41-1.79-4.68 8.91-9.33 10.74-4.66 0 0-3.21 8.56 13.03 48.53 16.82 45.98 28.24 41.03 19.24 48.23-2.42 1.42-6.64 2.08-7.59-.69z"
          className="st11"
        />
      </g>
      <g id="pitcher_1_">
        <path
          d="M142.72 6.69c-5.74 4.89-7.56 12.15-3.93 19.41.91 4.54-3.63 7.26-6.42 10.41 2.4-4.2 1.96-1.78 0 0 2.4-4.2 1.11-9.25.04-13.65-1.27-5.19-2.82-10.44-2.4-15.84M143 112.44c-4.59-10.39-28.93-62.54-23.23-68.02 1.48-.64 3.39.67 4.27 2.93 7.37 21.5 15.46 42.43 24.32 62.76 2.1 5.28-3.35 7.68-5.36 2.33z"
          className="st11"
        />
        <path
          d="M165.53 6.34c-15.19 11.11-29.25 25.08-42.38 41.4l16.03 39.65 9.19 22.73c18.89.73 53.53-1.63 68.58-6.44 4.46-1.43 19.51 12.84 13.86.95-5.06-8.9-29.4-70.48-39.26-98.29M152.34 98.83c11.82 2.28 44.42.41 56.02-3.59M208.63 95.92l-6.61-17.06M198.89 97.99l-3.26-8.39M190.59 98.13l-3.25-8.39M182.43 98.62l-2.65-6.82M174.13 98.76l-3.25-8.39M167.8 98.59l-2.11-5.45M159.5 98.73l-4.76-12.28M151.94 98.07l-3.25-8.39"
          className="st11"
        />
      </g>
      <path
        id="faceback_1_"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        d="M83.81 149.97c-3.67-11.32-40.56-85.11-28.68-89.56l26.9-7.9 30.73-2.76c2.85-1.24 6.1.21 7.27 3.22l21.68 55.94c1.17 3.01-.19 6.46-3.04 7.69l-22.73 21.02-24.85 15.56c-2.86 1.24-6.12-.2-7.28-3.21z"
      />
      <g id="blenderface_1_">
        <path
          d="M88.25 77.14c-15.3 5.55-10.03 19.7 5.18 13.9 15.3-5.56 10.03-19.71-5.18-13.9zM101.35 103.7c-15.3 5.55-10.03 19.7 5.18 13.9 15.3-5.55 10.03-19.7-5.18-13.9z"
          className="st13"
        />
        <path
          d="M93.59 89.4c-5.42 1.94-6.26-2.05-2.02-5.94 1.78-1.63 6.49-7.45 6.49-7.45s1.27 11.34-4.47 13.39zM107.83 116.96c-3.27 1.36-6.1-.7-3.59-4.42 1.31-2 9.3-10.04 9.3-10.04s-1.27 8.3-2.81 11.84c-.52 1.18-2.07 2.28-2.9 2.62z"
          className="st14"
        />
        <path
          d="M101.44 68.6c-.37.89-.74 1.78-1.1 2.67M108.46 75.87c-.87.49-1.75.98-2.62 1.48M107.81 86.97c-.86-.15-1.72-.29-2.58-.44M110.94 96.37c.21 1.08-.04 2.25-.67 3.15M119.35 101.59c-.84.56-1.68 1.12-2.52 1.69M119.92 113.69c-.82-.4-1.65-.8-2.47-1.19"
          className="st13"
        />
        <path
          d="M122.4 91.4c8.33 3.6 10.91 10.53 8.68 17.62M117.68 81.42c1.75-8.06-.94-14.88-8.56-18.09"
          className="st15"
        />
        <path
          fill="#c1272d"
          d="M71.84 94.02s9.3-9.58 10.43-2.29c1.03 6.66-8.37 15.61-8.37 15.61l-2.06-13.32z"
        />
        <path
          id="mouth"
          d="M72.98 102.42c-.04-3.27 3.06-6.12 5.53-8.47M77.24 90.6c-1.21-2.23-4.32-3.18-6.56-2.01M92.42 122.29c.98 2.34-.22 5.36-2.55 6.37"
          className="st13"
        />
        <path
          id="mouth"
          d="M73.05 91.98c-2.04 6.32-.78 12.87 2.37 18.19 3.14 5.32 8.04 9.53 13.36 13.11"
          className="st13"
        />
      </g>
    </g>
  </HueWrapper>
)

export default HueIcon
