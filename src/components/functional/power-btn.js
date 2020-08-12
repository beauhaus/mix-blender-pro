import React, { useContext } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { NavContext } from "./layout"
import PwrBtnIcon from "../../icon-components/power-btn-icon"
const StyledTopNav = styled.button`
  border-radius: 25%;
  outline: none;
  border: none;
  position: relative;

  position: absolute; /*TODO: temp */
  right: 5vw;
  top: 1.5vh;

  width: 10vh;
  height: 10vh;
  background: fuchsia;
  background: linear-gradient(135deg, #fff 0%, #000 30%);

  box-shadow: inset 0.3rem 0.3rem 0.2rem 0 #fff,
    inset -0.4rem -0.4rem 0.2rem 0 #000, 0.1rem 0.1rem 0.2rem 0 #000;
  display: grid;
  place-items: center;
  &::before {
    content: "";
    border-radius: inherit;
    background: #000;
    box-shadow: -0.2rem -0.2rem 0.2rem 0 #000, 0.2rem 0.2rem 0.3rem 0 #fff;
    top: 5%;
    left: 5%;
    position: absolute;
    z-index: 1;
    width: 90%;
    height: 90%;
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
    width: 9vh;
    height: 9vh;
    top: 0.6vh;
    left: 0.55vh;
    border-radius: 22%;
    box-shadow: inset 0px 0px 6px 2px rgba(0, 0, 0, 0.4),
      inset 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
    color: transparent;
  }
  &.blender-on a {
    &::before {
      content: "";
      border-radius: 30%;
      width: 8.8vh;
      height: 8.8vh;
      background-image: radial-gradient(
        var(--btn-6-on) 0%,
        var(--btn-5-on) 30%,
        var(--btn-4-on) 30%,
        var(--btn-3-on) 80%
      );
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 22%;
      box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.4);
    }
    &::after {
      content: "";
      border-radius: 30%;
      width: 8.8vh;
      height: 8.5vh;
      background: transparent;
      filter: blur(5px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      box-shadow: 0 0 8px 5px var(--btn-3-on);
    }
  }
  &.blender-on .pwr-btn-icon path {
    fill: #4d4d4d;
    fill-opacity: 0.5;
    stroke: none;
  }
`

const PowerBtn = () => {
  const { currentPath } = useContext(NavContext)
  const isHome = currentPath === "/"

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
