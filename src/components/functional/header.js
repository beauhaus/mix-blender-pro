import React, { useContext } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PowerBtn from "./power-btn"
import Link from "gatsby-link"

const StyledHeader = styled.header`
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-width: 2200px;
  height: 12vh;
  z-index: 10;
  ${"" /* padding-top: 1vh; */}
  display: flex;
  justify-content: space-around;
  align-items: center;
  .place-holder {
    border-radius: 50%;
    outline: none;
    border: none;
    position: relative;
    width: 10vh;
    height: 10vh;
    background: #91a999;
    box-shadow: inset 0 2px 3px -1px rgba(255, 255, 255, 1),
      inset 0 -1px 3px -1px rgba(0, 0, 0, 1);
  }
`
const Header = () => {
  return (
    <>
      <Link to="/test-page"></Link>
      <StyledHeader className="header-wrapper">
        <span className="place-holder"></span>
        <span className="place-holder"></span>
        <PowerBtn />
      </StyledHeader>
    </>
  )
}

// objectFit="cover" objectPosition="50% 50%"

export default Header
