const withPlugins = require('next-compose-plugins')
const withManifest = require('next-manifest')
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');

const nextConfig = {
  webpack: (config, { defaultLoaders, isServer, buildId, dev }) => {
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          },
        },
        {
          urlPattern: /.*\.(?:png|jpg|svg|otf|ttf|woff)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'static-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions,
        }),
      );
    }

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

const manifestConfig = {
  manifest: {
    short_name: "Toshi",
    name: "Toshio Minei",
    icons: {
      src: "./static/img/favicon/favicon512.png",
      cache: true
    },
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#1abc9c",
    background_color: "#ffffff",
    related_applications: [],
    prefer_related_applications: false
  }
}

module.exports = withPlugins([
  [withManifest, manifestConfig]
], nextConfig)