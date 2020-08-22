import React, { useState, createContext, useEffect } from "react"
import styled from "styled-components"
import TestSub from "../components/test-sub-comp"
// import {AppContext} from '../pages/application'

export const TestContext = createContext()

const StyledTestPage = styled.div`
  background: whitesmoke;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  .test-sub {
    width: 75vw;
    height: 75vh;
    border: 2px solid #888;
    box-shadow: 2px 2px 2px 0 #000;
    background: wheat;
    h1 {
      margin: 20vh auto;
    }
  }
`

const TestPage = props => {
  const [testState, setTestState] = useState(0)
  useEffect(() => {
    setTestState({
      mode: "normal",
      num: 15,
    })
  }, [])
  return (
    <TestContext.Provider value={{ testState }}>
      <StyledTestPage className="TestPage">
        <TestSub />
      </StyledTestPage>
    </TestContext.Provider>
  )
}

export default TestPage
