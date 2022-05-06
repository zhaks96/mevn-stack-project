const webpack = require('webpack');

const host = 'http://localhost:4000'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: () => ({
    plugins: [ new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/), ],
    devServer:{
      allowedHosts: [
        host,
      ],
      proxy: {
        '/api/*':{
          target: host
        }
      }
    }
  })
}
