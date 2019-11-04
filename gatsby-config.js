module.exports = {
  siteMetadata: {
    title: `React Multiple Select Dropdown`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: 'https://reactmultipleselectdropdown.netlify.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-playground`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: "one0vzq65gze",
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: "9rXOJigUY3sge8Cj8X0zUPosu4cdTEHD2mg14QEICDw",
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/open-book.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
