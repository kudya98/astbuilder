const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override (config) {
  if (!config.plugins) {
    config.plugins = []
  }
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['javascript', 'json', 'xml']
    })
    // new BundleAnalyzerPlugin()
  )
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'worker-loader' }
  })

  return config
}
