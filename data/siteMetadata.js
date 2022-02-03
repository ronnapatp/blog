const siteMetadata = {
  title: 'Ronnapat Blog',
  author: 'Ronnapat Srivoravilai',
  headerTitle: 'RonnapatBlog',
  description: 'Ronnapat Srivoravilai Blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.ronnapat.com',
  siteRepo: 'https://github.com/ronnapatp/blog',
  siteLogo: '/static/images/logo.png',
  email: 'me@ronnapat.com',
  github: 'https://github.com/ronnapatp',
  twitter: 'https://twitter.com/ronnapatp',
  facebook: 'https://facebook.com/pieronnapatp',
  youtube: 'https://youtube.com/channel/UCkfQXz1KN3epnBzSCwh9VLg',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'blog.ronnapat.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-YFPY7KW0YY', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
