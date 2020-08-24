import React, { createContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { Transition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import "./layout.scss"
import Header from "./header"
import useSiteMetadata from "./util/hooks/use-site-metadata"
import BGTexture from "../presentational/util/bg-texture"
export const NavContext = createContext()

const StyledImgBackground = styled(BackgroundImage)`
  width: 100vw;
  background-size: cover;
  background-height: 100vh;
  background-position: top 50% center;
`
const Layout = ({ children, location }) => {
  const [fromLanding, setFromLanding] = useState(false)

  useEffect(() => {
    if (location.pathname === "/") setFromLanding(true)
  }, [])
  const { title, description } = useSiteMetadata()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  const { file } = useStaticQuery(graphql`
    query {
      file: allFile(
        filter: {
          sourceInstanceName: { eq: "util-images" }
          name: { eq: "bg-orange2" }
        }
      ) {
        nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log("data: ", file.nodes[0].sharp.fluid)

  return (
    <NavContext.Provider
      value={{
        currentPath: location.pathname,
        fromLanding,
        setFromLanding,
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
            <StyledImgBackground
              fluid={file.nodes[0].sharp.fluid}
              className={`layout-wrapper page ${status}`}
            >
              {/* <div className={`layout-wrapper page ${status}`}> */}
              {/* <BGTexture /> */}
              {console.log("layout ran")}
              {children}
              {/* </div> */}
            </StyledImgBackground>
          )}
        </Transition>
      </TransitionGroup>
    </NavContext.Provider>
  )
}

{
  /* <StyledImgBackground
fluid={file.nodes[0].sharp.fluid}
className={`layout-wrapper page ${status}`}
>
</StyledImgBackground> */
}
export default Layout
