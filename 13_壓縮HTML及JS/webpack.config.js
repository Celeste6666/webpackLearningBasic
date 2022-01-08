const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  // 生產模式下自動壓縮 HTML(有使用 HtmlWebpackPlugin) 及 JS
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: [
          {
            // 使用緩存
            loader: 'babel-loader?cacheDirectory=true',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    new ESLintWebpackPlugin({
      context: `${__dirname}/src`,
      fix: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'minify.html',
      // 生產模式下預設為 true，開發模式預設為false
      // minify: true,
      // 值為 true 預設的配置
      minify: {
      // 移除空格
        collapseWhitespace: true,

        // 維持自閉合標籤後的 / 如： <img src="..." />
        keepClosingSlash: true,

        // 移除註解
        removeComments: true,

        // 移除多餘的屬性(Remove attributes when value matches default.)
        removeRedundantAttributes: true,

        // 移除 type="text/javascript" from script tags.
        removeScriptTypeAttributes: true,

        // 移除 type="text/css" from style and link tags.
        removeStyleLinkTypeAttributes: true,

        // 用 <!DOCTYPE html> 取代 doctype
        useShortDoctype: true,
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
