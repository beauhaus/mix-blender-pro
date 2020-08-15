module.exports = {
  siteMetadata: {
    title: "Mix-Blender-Pro",
    description: "A Web Appliance for learning css mix-blend-modes",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-remove-trailing-slashes`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "util-images",
        path: "util-images",
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/functional/layout.js"),
      },
    },
  ],
}
