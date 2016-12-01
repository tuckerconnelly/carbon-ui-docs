const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './index.web',
  ],
  output: {
    path: path.join(__dirname, 'web/build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['', '.js', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: false,
    }),

    // Optimize

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
        unused: false,
      },
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200,
    }),
    
    // HTML
    new HtmlWebpackPlugin({
      template: 'web/index.prod.ejs',
    }),
  ],
}
