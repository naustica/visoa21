var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: ['./src/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  watch: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/media/favicon_oa.svg',
      inject: false,
      minify: false
    }),
  ]
}
