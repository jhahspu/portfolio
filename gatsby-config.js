module.exports = {
  siteMetadata: {
    title: `Jhahspu`,
    description: `Hey there :] I'm Jhahspu. I code stuff for the web, desktop and mobile.`,
    author: `@jhahspu`,
    contact: "jhahspu@gmail.com",
    keywords:
      "full stack developer, frontend developer, portfolio, personal website",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "content/projects",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jhahspu's Portfolio`,
        short_name: `JP`,
        start_url: `/`,
        background_color: `#e6e7e9`,
        theme_color: `#e6e7e9`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
