const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'review_build')
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: ['babel-loader']
        },
        {
          test: /.s?css$/,
          use: [
            !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /.(png|jpg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'images',
                limit: 8192
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      })
    ],
    devServer: {
      port: 9000,
      hot: true
    },
    watch: !isProduction,
    devtool: !isProduction ? 'eval-source-map' : false
  }

  isProduction && (
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    )
  )

  return config;
}