import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PowerBtn from "./power-btn"
import { Link } from "gatsby"

const StyledHeader = styled.header`
padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-width: 2200px;
  height: 12vh;
  z-index: 10;
  padding-top: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${"" /* background: rgba(234, 20, 120, 0.5); */}
  ${"" /* background-color: #000; */}
   ${"" /* mix-blend-mode: multiply; */}

  .home-icon {
    ${"" /* border: 1px solid #fff; */}
    width: 10vh;
    height: 10vh;
    ${"" /* mix-blend-mode: color-burn; */}
    img {
      ${"" /* mix-blend-mode: multiply; */}
    }
  }
  
`
// const HomeLink = styled.Link`
//   position: absolute;
//   top: 0;
//   left: 0;
//   mix-mode: multiply;
//   height: 10vh;
//   width: 10vh;

//   z-index: 20;
//   mix-blend-mode: color-burn;
// `
// const HomeLink = () => {
//   const data = useStaticQuery(graphql`
//     {
//       file: allFile(
//         filter: {
//           sourceInstanceName: { eq: "util-images" }
//           name: { eq: "appicon_512x512" }
//         }
//       ) {
//         nodes {
//           sharp: childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   `)
//   const appIcon = data.file.nodes[0].sharp.fluid

//   return (
//     <Link to="/" className="home-link" activeClassName="active-home">
//       <Img
//         fluid={appIcon}
//         alt="application icon of a blending of colors in swirl shape"
//       />
//     </Link>
//   )
// }
const Header = () => {
  return (
    <>
      {/* <HomeLink /> */}
      <StyledHeader className="header-wrapper">
        <PowerBtn />
      </StyledHeader>
    </>
  )
}

// objectFit="cover" objectPosition="50% 50%"

export default Header
