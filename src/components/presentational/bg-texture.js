import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const NoiseBGWrap = styled.svg`
  position: absolute;
  top: 0;
  left: -5vw;
  bottom: 0;
  width: 110vw;
  height: 100vh;
  overflow: hidden;

  image {
    height: 50%;
    filter: url(#bg-img-blur-filter);
  }
  #gradient-overlay {
    mix-blend-mode: soft-light;
    opacity: 1;
  }
`

const NoiseBG = () => {
  const data = useStaticQuery(graphql`
    {
      file: allFile(
        filter: {
          sourceInstanceName: { eq: "util-images" }
          name: { eq: "bgnoise" }
        }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(base64Width: 300) {
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
    <NoiseBGWrap
      className="bg-texture"
      width="100%"
      viewBox="0 0 500 1000"
      preserveAspectRatio="none"
    >
      <filter id="bg-img-blur-filter">
        <feGaussianBlur stdDeviation="35 0" colorInterpolationFilters="sRGB" />
      </filter>
      <image
        y="0"
        id="bg-img-a"
        xlinkHref={NoiseImg}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      />
      <image
        y="250"
        id="bg-img-b"
        xlinkHref={NoiseImg}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      />
      <image
        y="500"
        id="bg-img-c"
        xlinkHref={NoiseImg}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      />
      <image
        y="750"
        id="bg-img-d"
        xlinkHref={NoiseImg}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      />

      <radialGradient
        id="reflection-grad"
        cx="-6"
        cy="-8"
        r="780"
        gradientTransform="matrix(.4348 .9005 -.4308 .208 -6.8376 -.9329)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
        <stop offset="1" stopColor="#313d5c" stopOpacity="1" />
      </radialGradient>
      <rect
        id="gradient-overlay"
        x="0"
        y="0"
        height="100%"
        width="100%"
        fill="url(#reflection-grad)"
      />
    </NoiseBGWrap>
  )
}

export default NoiseBG
