module.exports = {
  siteMetadata: {
    name: `Benjamin Read`,
    title: `How We're Using WordPress as a Headless CMS`,
    date: `April 14, 2018`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-bugherd`,
      options: {
        key: `l2a8wvantlla2jdji5x2za`,
  
        // whether to include the snippet in production. Defaults to false
        showInProduction: true
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`]
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `slides`,
    //     path: `${__dirname}/src/pages/`
    //   }
    // },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
        precision: 8
      }
    },
    `gatsby-plugin-styled-components`,
/*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
          * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
          * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
          */
        baseUrl: "wcldn2018talk.wpengine.com/",
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        hostingWPCOM: false,
        useACF: true,
        // Search and Replace Urls across WordPress content
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://wcldn2018talk.wpengine.com",
        //   replacementUrl: "https://wpheadless.indigotree.co.uk",
        // },
      },
    }, 
  ]
};
