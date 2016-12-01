const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './index.web',
  ],
  output: {
    path: path.join(__dirname, 'web/build'),
    filename: 'bundle.js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devServer: {
    hot: true,
    colors: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: 'web',
  },
}
