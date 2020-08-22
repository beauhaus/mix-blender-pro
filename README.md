# mix-blender-pro

<img src="https://github.com/beauhaus/mix-blender-pro/blob/master/readme-images/scrn1.png?raw=true" alt="readme test image"
	title="readme test image" width="20%" />

First functioning prototype of CSS Blendr (3 weeks)

---

npm i @mdx-js/mdx @mdx-js/react gatsby-plugin-mdx

"@mdx-js/mdx": "^1.6.1"

"@mdx-js/react": "^1.6.1"

"axios": "^0.19.2"

"dexie": "^3.0.1"

"dot-prop": "^5.2.0"

"gatsby-background-image": "^1.1.1" \*NOT USED

"gatsby-plugin-manifest": "^2.4.9"

"gatsby-plugin-mdx": "^1.2.4"

"gsap": "^3.2.6"

"react-remove-scroll": "^2.3.0"

"react-scroll": "^1.8.0"

"react-slider": "^1.0.8"

"typeface-fugaz-one": "0.0.72"

"typeface-iceland": "0.0.72"

---

for future ref getting \_withWebP

const data = useStaticQuery(graphql`{ file: allFile(filter: {sourceInstanceName: {eq: "util-images"}, name: {eq: "bgnoise"}}) { nodes { sharp: childImageSharp { fluid { ...GatsbyImageSharpFluid_withWebp } } } } }`)

/_Context Notes _/

MixMode Context
effects 4 things:

main img display
article
btn icon
Mode label
