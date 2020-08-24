import React, { useEffect, useState, createContext, memo } from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import useBGImage from "../components/functional/util/hooks/use-bg-img"
import BGTexture from "../components/presentational/util/bg-texture"
import PanelScrnContainer from "../components/presentational/panel-screen-container"
import BlendCtrlsContainer from "../components/presentational/blend-controls-container"
import ModeArticle from "../components/content/mode-article"

const StyledImgBackground = styled(BackgroundImage)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: linear-gradient(
    90deg,
    #97552e 0%,
    #a2563d 25%,
    #cc895f 75%,
    #9d5a2f 100%
  );

  background-size: contain;
  background-repeat: repeat-y;
  background-height: 100vh;
  background-position: top 0% center;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh auto;
  position: relative;
`
export const ModeContext = createContext()

const PanelPage = () => {
  const mixModesArray = useMdx()
  const bgImg = useBGImage()

  const [modesArray, setModesArray] = useState(mixModesArray)
  const [mixModeNum, setMixModeNum] = useState(0)
  const [mixMode, setMixMode] = useState("normal")

  useEffect(() => {
    setMixMode(mixModesArray[mixModeNum])
  }, [mixModeNum])

  // secures proper rehydration
  // const [hasMounted, setHasMounted] = useState(false)

  // useEffect(() => {
  //   setHasMounted(true)
  // }, [])
  // if (!hasMounted) {
  //   return null
  // }

  return (
    <ModeContext.Provider
      value={{
        mixMode,
        setMixModeNum,
        mixModeNum,
        modesArray,
      }}
    >
      <StyledImgBackground fluid={bgImg} className="index-wrapper">
        {console.log("panelpage ran")}
        {/* <BGTexture /> */}
        <PanelScrnContainer />
        <BlendCtrlsContainer />
        <ModeArticle />
      </StyledImgBackground>
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

export default memo(PanelPage)
