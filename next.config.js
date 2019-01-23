const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
})


module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    return config
  }
})