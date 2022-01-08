const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'js/bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ],
  // // 優化選項
  // optimization: {
  //   // 在開發模式中啟用，預設為 false (只有在生產環境中啟用)
  //   minimize: true,
  //   // 壓縮優化 CSS 代碼
  //   minimizer: [
  //     new TerserWebpackPlugin(),
  //     new CssMinimizerPlugin()
  //   ]
  // }
}