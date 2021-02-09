const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
})
