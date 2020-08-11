import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const NoiseBGWrap = styled.div`
  width: 100vw;
  height: 100vh;
  height: auto;
  overflowx: hidden;
  position: fixed;
  top: 0;
  left: 0;
  svg {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    opacity: 1;

    .gradient-overlay {
      mix-blend-mode: screen;
      opacity: 0.4;
    }
    #top {
      mix-blend-mode: soft-light;
    }
    rect {
      filter: url(#a);
    }
  }
`

const NoiseBG = () => {
  const data = useStaticQuery(graphql`
    {
      file: allFile(
        filter: {
          sourceInstanceName: { eq: "util-images" }
          name: { eq: "orange-overlay-noise" }
        }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(base64Width: 400) {
                base64
              }
            }
          }
        }
      }
    }
  `)

  const NoiseImg = data.file.edges[0].node.sharp.fluid.base64

  return (
    <NoiseBGWrap className="noise-bg-container">
      <svg
        width="100%"
        className="bg-texture"
        viewBox="0 0 500 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="a"
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
        </defs>

        <rect
          y="0"
          x="0"
          width="100%"
          height="100%"
          fill="var(--bg-texture)"
          filter="url(#a)"
        />
        <rect
          id="top"
          y="0"
          x="0"
          width="100%"
          height="100%"
          fill="#cd9240"
          filter="url(#a)"
        />

        <linearGradient
          id="reflection-grad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="500"
          x2="500"
          y2="500"
        >
          <stop offset="0" stopColor="#000" />
          <stop offset=".3" stopColor="#fff" stopOpacity="0.2" />
          <stop offset=".8" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0.5" />
        </linearGradient>
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
