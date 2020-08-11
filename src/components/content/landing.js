import React from "react"
import styled from "styled-components"

const StyledLanding = styled.section`
  width: 100vw;
  height: 71vh;
  margin: 13vh auto;
  position: relative;
  display: flex;
  justify-content: center;
  div.title-container {
    align-self: flex-end;
    position: relative;
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
    h1 {
      font: normal 2.5rem "Warnes", -apple-system, Segoe UI, Roboto;
      position: relative;
      background: -webkit-linear-gradient(
        272deg,
        var(--active-blue) 40%,
        #fff 50%,
        #aaa 65%,
        #fff 70%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &::before {
        content: "Mix-Blender";
        position: absolute;
        text-shadow: 2px 2px 1px #000;
        z-index: -1;
        top: 0;
        left: 0;
      }
    }
    span {
      letter-spacing: 1vw;
      font: normal 3rem "Seaweed Script", -apple-system, Segoe UI, Roboto;
      font-weight: bold;
      color: lemonchiffon;
      text-shadow: 1px 1px 2px #000;
      transform: rotate(-7deg) translateY(-0.2rem);
      margin-left: 2vw;
      z-index: 0;
    }
  }
  h2 {
    color: var(--heading-color-light);
    position: absolute;
    right: 5vw;
    top: 20vh;
    transform: rotate(-10deg);
    font: normal 3.5rem "Nanum Pen Script", -apple-system, Segoe UI, Roboto;
    i {
      color: lemonchiffon;
    }
  }
`

const Landing = () => {
  return (
    <StyledLanding className="landing-text">
      <h2>
        A Web Appliance <br /> for learning CSS
        <br />
        <i>mix-blend-mode!</i>
      </h2>
      <div className="title-container">
        <h1>Mix-Blender</h1>
        <span>Pro</span>
      </div>
    </StyledLanding>
  )
}

export default Landing
