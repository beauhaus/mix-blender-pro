# mix-blender-pro

<img src="https://github.com/beauhaus/mix-blender-pro/blob/master/readme-images/scrn1.png?raw=true" alt="readme test image"
	title="readme test image" width="20%" />

First functioning prototype of CSS Blendr (3 weeks)

---

"@mdx-js/mdx": "^1.6.1"

"@mdx-js/react": "^1.6.1"

"axios": "^0.19.2"

"dexie": "^3.0.1"

"dot-prop": "^5.2.0"

"gatsby": "^2.3.25"

"gatsby-background-image": "^1.1.1"

"gatsby-image": "^2.4.5"

"gatsby-plugin-layout": "^1.0.14"

"gatsby-plugin-manifest": "^2.4.9"

"gatsby-plugin-mdx": "^1.2.4"

"gatsby-plugin-netlify": "^2.3.11"

"gatsby-plugin-react-helmet": "^3.3.0"

"gatsby-plugin-sharp": "^2.6.10"

"gatsby-source-filesystem": "^2.3.0"

"gatsby-transformer-sharp": "^2.5.4"

"gsap": "^3.2.6"

"react": "^16.8.6"

"react-dom": "^16.8.6"

"react-helmet": "^6.0.0"

"react-remove-scroll": "^2.3.0"

"react-scroll": "^1.8.0"

"react-slider": "^1.0.8"

"react-transition-group": "^4.0.0"

"typeface-fugaz-one": "0.0.72"

"typeface-iceland": "0.0.72"

"typeface-rajdhani": "0.0.72"

---


for future ref  getting _withWebP

 const data = useStaticQuery(graphql`
  {
  file: allFile(filter: {sourceInstanceName: {eq: "util-images"}, name: {eq: "bgnoise"}}) {
    nodes {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
}
`)
