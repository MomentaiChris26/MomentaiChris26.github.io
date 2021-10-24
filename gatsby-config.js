module.exports = {
  siteMetadata: {
    title: "Chris Tri - Portfolio v2",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
