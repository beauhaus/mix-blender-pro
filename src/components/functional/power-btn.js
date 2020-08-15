import React, { useContext, useState, useEffect } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { NavContext } from "./layout"

import PwrBtnIcon from "../presentational/icon-components/power-btn-icon"
const StyledTopNav = styled.button`
  border-radius: 25%;
  outline: none;
  border: none;
  position: absolute; /*TODO: temp */
  right: 5vw;
  top: 1.5vh;
  width: 10vh;
  height: 10vh;
  background: linear-gradient(135deg, #fff 10%, #fff 40%, #000 60%, #fff 90%);
  box-shadow: inset -0.4vh -0.4vh 0.1vh 0 #000, 0 0 7px 2px #888,
    inset 0.4vh 0.4vh 0.1vh 0 #fff;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    border-radius: inherit;
    box-shadow: -0.2vh -0.2vh 0.3vh 0.2vh #000, 0.2vh 0.2vh 0.3vh 0.2vh #fff;
    position: absolute;
    z-index: 1;
    top: 7.2%;
    left: 7.2%;
    width: 85%;
    height: 85%;
  }

  &::after {
    ${"" /* content: "";
    border-radius: inherit;
    background: olive;
    box-shadow: -0.2vh -0.2vh 0.3vh 0.2vh #000, 0.2vh 0.2vh 0.3vh 0.2vh #fff;
    position: absolute;
    z-index: 1;
    top: 7.2%;
    left: 7.2%;
    width: 85%;
    height: 85%; */}
  }
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
    top: 7.2%;
    left: 7.2%;
    width: 85%;
    height: 85%;
    border-radius: 22%;
    box-shadow: inset 0px 0px 6px 2px rgba(0, 0, 0, 0.4),
      inset 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
    color: transparent;
  }
  &.blender-on a {
    &::before {
      content: "";

      background-image: radial-gradient(
        var(--btn-6-on) 0%,
        var(--btn-5-on) 30%,
        var(--btn-4-on) 30%,
        var(--btn-3-on) 80%
      );
      position: absolute;
      top: 1%;
      left: 1%;
      width: 98%;
      height: 98%;
      border-radius: 22%;
      box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.4);
    }
    &::after {
      content: "";
      border-radius: 30%;
      width: 8.8vh;
      height: 8.5vh;
      background: transparent;
      filter: blur(8px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      ${"" /* box-shadow: 0 0 8px 5px var(--btn-3-on); */}
      box-shadow: 0px 0 4px 8px var(--btn-3-on);
    }
  }
  &.blender-on .pwr-btn-icon path {
    fill: #4d4d4d;
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
