import React, { useContext, useState, useEffect } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { NavContext } from "./layout"

import PwrBtnIcon from "../presentational/icon-components/power-btn-icon"
const StyledTopNav = styled.button`
  border-radius: 24%;
  outline: none;
  border: none;
  ${"" /* position: absolute;
  right: 5vw;
  top: 1.5vh; */}
  position: relative;
  width: 10vh;
  height: 10vh;
  background: linear-gradient(150deg, #fff 45%, #000 55%);
  ${"" /*   0.4vh 0.4vh 4px 0 rgba(0, 0, 0, 0.5), inset 0.4vh 0.4vh 0.5vh 0 #fff; */}
  display: grid;
  place-items: center;
  ${"" /* outline: 1px solid yellow; */}

  a {
    position: absolute;
    background: linear-gradient(
      180deg,
      var(--btn-4) 0%,
      var(--btn-4) 30%,
      var(--btn-5) 60%,
      var(--btn-4) 80%,
      var(--btn-2) 100%
    );
    z-index: 3;
    top: 1vh;
    left: 1vh;
    width: 8vh;
    height: 8vh;
    border-radius: 22%;
    box-shadow: inset 0px 0px 6px 1px rgba(0, 0, 0, 0.4),
      inset 0px 0px 0.5px 0.5px rgba(0, 0, 0, 0.4);
    color: transparent;
  }

  &.blender-on a {
    border-radius: 22%;

    &::before {
      content: "";
      border-radius: 22%;
      background-image: radial-gradient(
        var(--btn-5-on) 0%,
        var(--btn-5-on) 30%,
        var(--btn-4-on) 30%,
        var(--btn-3-on) 80%
      );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.4);
    }
    &::after {
      content: "";
      border-radius: 40%;
      width: 8vh;
      height: 8vh;
      background: transparent;
      filter: blur(8px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      box-shadow: 0px 0 2px 10px var(--btn-3-on);
    }
  }

  &.blender-on .pwr-btn-icon path {
    fill: #888;
    fill-opacity: 0.5;
    stroke: none;
  }
`

const PowerBtn = () => {
  const { currentPath, fromLanding, setFromLanding } = useContext(NavContext)
  const isHome = currentPath === "/"

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <StyledTopNav
      name={!isHome ? "blender-on" : "blender-off"}
      className={!isHome ? "top-nav-btn blender-on" : "top-nav-btn blender-off"}
    >
      <Link to={!isHome ? "/" : "/panel"}>
        <PwrBtnIcon />
      </Link>
    </StyledTopNav>
  )
}

export default PowerBtn
