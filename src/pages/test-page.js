import React, { useState, createContext, useEffect } from "react"
import styled from "styled-components"
import TestSub from "../components/test-sub-comp"
// import {AppContext} from '../pages/application'
import BGTexture from "../components/presentational/util/bg-texture"

export const TestContext = createContext()

const StyledTestPage = styled.div`
  background: whitesmoke;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 199vh;
  
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
        <BGTexture />
      </StyledTestPage>
    </TestContext.Provider>
  )
}

export default TestPage
