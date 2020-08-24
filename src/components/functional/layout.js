import React, { createContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Transition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import "./layout.scss"
import Header from "./header"
import useSiteMetadata from "./util/hooks/use-site-metadata"

import BGTexture from "../presentational/util/bg-texture"

export const NavContext = createContext()

// const StyledImgBackground = styled(BackgroundImage)`
//   width: 100vw;
//   background-size: cover;
//   background-height: 100vh;
//   background-position: top 50% center;
// `
const Layout = ({ children, location }) => {
  // useEffect(() => {
  //   if (location.pathname === "/") setFromLanding(true)
  // }, [])
  const { title, description } = useSiteMetadata()
  // const [hasMounted, setHasMounted] = useState(false)

  // useEffect(() => {
  //   setHasMounted(true)
  // }, [])
  // if (!hasMounted) {
  //   return null
  // }

  // <StyledImgBackground
  //             fluid={file.nodes[0].sharp.fluid}
  //             className={`layout-wrapper page ${status}`}
  //           >
  // const { file } = useStaticQuery(graphql`
  //   query {
  //     file: allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "util-images" }
  //         name: { eq: "bg-orange2" }
  //       }
  //     ) {
  //       nodes {
  //         sharp: childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log("data: ", file.nodes[0].sharp.fluid)

  return (
    <NavContext.Provider
      value={{
        currentPath: location.pathname,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={title} content={description} />
      </Helmet>
      <Header currentPath={location.pathname} />
      <TransitionGroup component={null}>
        <Transition
          key={location.pathname}
          timeout={{ enter: 1500, exit: 1500 }}
        >
          {status => (
            <div
              className={`layout-wrapper page ${status}`}
              bgimage={"bgImage"}
            >
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </NavContext.Provider>
  )
}

export default Layout
