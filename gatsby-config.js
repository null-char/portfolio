module.exports = {
  siteMetadata: {
    title: `Null Char | Freelance Web Developer`,
    description: `Need a digital presence? Or maybe a complex web app? I'm a fullstack developer and I love what I do. If you have something you wish to be made, feel free to shoot me a message!`,
    author: `@null-char`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intro`,
        path: `${__dirname}/src/content/intro/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/content/sections/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `null-char-portfolio`,
        short_name: `Null Char Portfolio`,
        start_url: `/`,
        background_color: `#00080A`,
        theme_color: `#0EDEFF`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
        },
        extensions: ["ts", "js", "tsx", "yaml"],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-yaml`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}