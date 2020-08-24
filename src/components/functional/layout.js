import React, { createContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Transition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import "./layout.scss"
import Header from "./header"
import useSiteMetadata from "./util/hooks/use-site-metadata"

import BGTexture from "../presentational/util/bg-texture"

export const NavContext = createContext()

const Layout = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
  // const [hasMounted, setHasMounted] = useState(false)

  // useEffect(() => {
  //   setHasMounted(true)
  // }, [])
  // if (!hasMounted) {
  //   return null
  // }

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
