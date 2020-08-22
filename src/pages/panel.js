import React, { useEffect, useState, createContext } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// import { navigate } from "gatsby"
import BGTexture from "../components/presentational/util/bg-texture"
import PanelScrnContainer from "../components/presentational/panel-screen-container"
import BlendCtrlsContainer from "../components/presentational/blend-controls-container"
import ModeArticle from "../components/content/mode-article"

// import { NavContext } from "../components/functional/layout"

const StyledPanelPage = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh auto;
  position: relative;
`
export const ModeContext = createContext()

const PanelPage = () => {
  const mixModesArray = useMdx()

  const [mixModeNum, setMixModeNum] = useState(0)
  const [mixMode, setMixMode] = useState("normal")

  useEffect(() => {
    setMixMode(mixModesArray[mixModeNum])
  }, [mixModeNum])

  // secures proper rehydration
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <ModeContext.Provider
      value={{
        mixMode,
        setMixModeNum,
        mixModeNum,
      }}
    >
      <StyledPanelPage>
        {console.log("MMNum:", mixModeNum)}
        <BGTexture />
        <PanelScrnContainer />
        <BlendCtrlsContainer />
        <ModeArticle />
      </StyledPanelPage>
    </ModeContext.Provider>
  )
}
const useMdx = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___display_order }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `)
  const mixModesArray = data.allMdx.nodes.map(item => item.frontmatter.title)
  return mixModesArray
}
// const test = useMdx()
// console.log("arr: ", test)
export default PanelPage
// const modeObjTemp = [
//   { num: 0, name: "Normal" },
//   { num: 1, name: "Multiply" },
//   { num: 2, name: "Screen" },
//   { num: 3, name: "Overlay" },
//   { num: 4, name: "Lighten" },
//   { num: 5, name: "Darken" },
//   { num: 6, name: "Color" },
//   { num: 7, name: "ColorDodge" },
//   { num: 8, name: "ColorBurn" },
//   { num: 9, name: "Difference" },
//   { num: 10, name: "Exclusion" },
//   { num: 11, name: "Luminosity" },
//   { num: 12, name: "Hue" },
//   { num: 13, name: "Saturation" },
//   { num: 14, name: "SoftLight" },
//   { num: 15, name: "HardLight" },
// ]
