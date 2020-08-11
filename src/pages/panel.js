import React, { useState, createContext, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BGTexture from "../components/presentational/bg-textureA"
const PanelPage = () => {
  return (
    <div>
      <BGTexture />
      <h1>TITLE</h1>
    </div>
  )
}

export default PanelPage
