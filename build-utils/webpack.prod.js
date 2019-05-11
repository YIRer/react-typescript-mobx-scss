const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: `${commonPaths.appEntry}/index.tsx`
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: './'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
};
