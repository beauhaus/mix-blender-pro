module.exports = {
  siteMetadata: {
    title: "Mix-Blender-Pro",
    description: "A Web Appliance for learning css mix-blend-modes",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "modes",
        path: "modes",
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/functional/layout.js"),
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/functional/layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mix-Blender-pro",
        short_name: "Mix Blender",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
