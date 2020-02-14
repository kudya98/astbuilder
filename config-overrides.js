const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override (config) {
  if (!config.plugins) {
    config.plugins = []
  }
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['javascript', 'json', 'xml', 'java', 'cpp', 'php']
    })
    // new BundleAnalyzerPlugin()
  )
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'worker-loader' }
  })
  config.optimization = {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            keep_fnames: false
          },
          sourceMap: true,
          mangle: false,
          maxLineLen: 1024
        }
      })
    ]
  }

  return config
}
