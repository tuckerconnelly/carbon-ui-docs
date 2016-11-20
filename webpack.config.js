const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './index.web',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devServer: {
    hot: true,
    colors: true,
    publicPath: '/assets',
    historyApiFallback: true,
    contentBase: 'web/build',
  },
}
