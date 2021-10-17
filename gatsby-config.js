require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Pinewax Records",
    siteTitleDefault: "Pinewax Records",
    siteUrl: "https://pinewaxrecords.com",
    hrefLang: "en",
    siteDescription:
      "Pinewax Records, a collectively-run record label based in Berlin",
    siteImage: "/default-og-image.jpg",
    twitter: "@pinewaxrecords",
    menu: [
      { name: "Store", to: "/products" },
      { name: "Artists", to: "/artists" },
      { name: "Radio", to: "/radio" },
      { name: "Events", to: "/events" },
      { name: "DJs", to: "/djs" },
    ],
    links: {
      facebook: "https://www.facebook.com/pinewaxrecords",
      instagram: "https://www.instagram.com/pinewaxrecords",
      twitter: "https://twitter.com/pinewaxrecords",
      youtube: "https://www.youtube.com/c/Pinewaxrecords"
    },
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
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
