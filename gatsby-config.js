require("dotenv").config()

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  downloadLocal: true,
};

module.exports = {
  siteMetadata: {
    siteTitle: "Pinewax Records",
    siteTitleDefault: "Pinewax Records",
    siteUrl: "https://pinewaxrecords.com",
    hrefLang: "en",
    siteDescription:
      "Pinewax, a collectively-run record label based in Berlin",
    siteImage: "/default-og-image.jpg",
    twitter: "@pinewaxrecords",
    menu: [
      { name: "Latest", to: "/" },
      { name: "Releases", to: "/releases" },
      { name: "Artists", to: "/artists" },
      { name: "Radio", to: "/radio" },
      { name: "Store", to: "/products" },
      // { name: "Events", to: "/events" },
      // { name: "DJs", to: "/djs" },
    ],
    links: [
      { name: "Bandcamp", to: "https://pinewaxrecords.bandcamp.com/" },
      { name: "Instagram", to: "https://www.instagram.com/pinewaxrecords" },
    ]
  },

  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        failOnError: false
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/static/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `radio`,
        path: `${__dirname}/static/radio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      // This website relies on Contentful as main CMS. In some cases, content is rendered using the rich-text-react-renderer (https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer)
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-postcss",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
