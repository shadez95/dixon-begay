module.exports = {
  siteMetadata: {
    title: 'Dixon Begay',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125871420-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Any additional create only fields (optional)
        // Set below to low number if traffic is too high
        // sampleRate: 5,
        // Set below to low number if traffic is too high
        // siteSpeedSampleRate: 10,
        cookieDomain: 'dixonbegay.com',
      },
    },
  ],
};
