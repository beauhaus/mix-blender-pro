import React from "react"
import "./header.scss"
import TopNavBtn from "./topnavbtn"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     file: allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "images" }
  //         relativeDirectory: { eq: "images_util" }
  //         name: { eq: "blendricon" }
  //       }
  //     ) {
  //       nodes {
  //         image: childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const blenderFavicon2 = data.file.nodes[0].image.fluid;
  return (
    <header className="header-wrapper">
      <TopNavBtn />
      {/* <img id="blender-fav2" alt="blender-mark" src={blenderFavicon2.base64} /> */}
    </header>
  )
}

export default Header
