import React, { createContext } from "react"
import { Transition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import "./layout.scss"
import Header from "./header"
import useSiteMetadata from "./util/hooks/use-site-metadata"

export const NavContext = createContext()

const Layout = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
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
          {status => <div className={`page ${status}`}>{children}</div>}
        </Transition>
      </TransitionGroup>
    </NavContext.Provider>
  )
}

export default Layout
