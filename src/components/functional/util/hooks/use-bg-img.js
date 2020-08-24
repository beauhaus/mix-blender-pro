import { graphql, useStaticQuery } from "gatsby"

const useBgImage = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file: allFile(
        filter: {
          sourceInstanceName: { eq: "util-images" }
          name: { eq: "bg-orange2" }
        }
      ) {
        nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return file.nodes[0].sharp.fluid
}

export default useBgImage
