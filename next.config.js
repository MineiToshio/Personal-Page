const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        urlPattern: /.*\.(?:png|jpg|svg|otf|ttf|woff)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      }
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'global'
          }
        }
      ]
    })
    return config
  }
}

module.exports = withOffline(nextConfig)