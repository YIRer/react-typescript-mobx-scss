const commonPaths = require('./common-paths');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  output: {
    path: commonPaths.outputPath
  },
  resolve: {
    alias: {
      'components': commonPaths.appEntry + '/components',
      'stores': commonPaths.appEntry + '/stores',
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ]
};

module.exports = config;
