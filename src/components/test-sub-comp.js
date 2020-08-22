import React, { useContext } from "react"
import { TestContext } from "../pages/test-page"

const TestSub = () => {
  const { testState } = useContext(TestContext)
  return (
    <div className="test-sub">
      <h1>Test Sub</h1>
      <p>
        testState: {testState.mode}, num {testState.num}
      </p>
    </div>
  )
}

export default TestSub
