const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.jsx',
    output: {
      filename: 'index.[hash].js',
      path: path.resolve(__dirname, 'review_build')
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /.(js|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      })
    ],
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 9000,
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

  isProduction && config.plugins.push(new webpack.HotModuleReplacementPlugin());

  return config;
}