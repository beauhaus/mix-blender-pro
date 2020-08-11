import React, { createContext } from "react"
import { Transition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import "./layout.scss"
// import NoiseBG from "../components/noisebg"
import Header from "./header"
// import useSiteMetadata from "../components/hooks/use-site-metadata"

export const NavContext = createContext()

const Layout = ({ children, location }) => {
  // const { title, description } = useSiteMetadata
  return (
    <NavContext.Provider
      value={{
        currentPath: location.pathname,
      }}
    >
      <Helmet>
        <html lang="en" />
        {/* <title>CSS Blendr</title>
        <meta name={title} content={description} /> */}
      </Helmet>
      {/* <NoiseBG /> */}
      <Header currentPath={location.pathname} />
      <TransitionGroup component={null}>
        <Transition
          key={location.pathname}
          timeout={{ enter: 1500, exit: 1500 }}
        >
          {status => (
            <div className={`page ${status}`}>
              {/* {console.log("status: ", status)} */}
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </NavContext.Provider>
  )
}

export default Layout
