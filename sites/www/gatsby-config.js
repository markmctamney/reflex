require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description:
      "A collection of themes and plugins to help you build Gatsby sites faster.",
    siteUrl: process.env.SITE_URL || "https://reflexjs.org",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-doc`,
    `@reflexjs/gatsby-theme-tutorial`,
    `@reflexjs/gatsby-theme-styleguide`,
    `@reflexjs/gatsby-theme-post`,
    {
      resolve: `@reflexjs/gatsby-theme-library`,
      options: {
        blockCategories: [
          {
            name: "Header",
          },
          {
            name: "Hero",
          },
          {
            name: "Features",
          },
          {
            name: "Call To Action",
          },
          {
            name: "Forms",
          },
          {
            name: "Pricing",
          },
          {
            name: "Team",
          },
          {
            name: "Testimonials",
          },
          {
            name: "Cards",
          },
          {
            name: "Footer",
          },
          {
            name: "Posts",
            display: "grid",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflex`,
        short_name: `Reflex`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
