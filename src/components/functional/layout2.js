import React from "react"
import styled from "styled-components"

import Header from "./header2"

const StyledLayout = styled.main`
  mix-blend-mode: normal;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  )
}

export default Layout
