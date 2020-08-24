import React, { useState, useEffect } from "react"
import styled from "styled-components"

const NoiseBGWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflowx: hidden;
  position: absolute;
  top: 0;
  left: 0;
  svg {
    position: relative;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    .gradient-overlay {
      mix-blend-mode: overlay;
      opacity: 0.7;
    }
  }
`

const NoiseBG = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return (
    <NoiseBGWrap className="noise-bg-container">
      {console.log("noise ran")}
      <svg
        width="100%"
        className="bg-texture"
        viewBox="0 0 500 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="brushed-steel-filter"
            colorInterpolationFilters="sRGB"
            width="120%"
            height="120%"
          >
            <feTurbulence
              result="result0"
              seed="285"
              baseFrequency="0.00021 1"
              numOctaves="2"
              type="fractalNoise"
            />

            <feComposite
              result="result2"
              k1=".72"
              k2=".90"
              k3=".06"
              k4="-.05"
              operator="arithmetic"
              in="SourceGraphic"
            />
          </filter>
          <linearGradient
            id="reflection-grad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="500"
            x2="500"
            y2="500"
          >
            <stop offset=".2" stopColor="#000" stopOpacity="0.3" />
            <stop offset=".75" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="1" stopColor="#000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <rect
          id="textured-rect"
          y="0"
          x="0"
          width="100%"
          height="100%"
          fill="var(--bg-texture)"
          filter="url(#brushed-steel-filter)"
        />

        <rect
          className="gradient-overlay"
          width="500"
          height="1000"
          fill="url(#reflection-grad)"
        />
      </svg>
    </NoiseBGWrap>
  )
}

export default NoiseBG
