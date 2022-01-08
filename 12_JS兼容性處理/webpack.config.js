const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'js/index.js',
    clean: true,
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
                plugins: [
                  'postcss-preset-env',
                ],
              },
            },
          },
        ],
      },
      {
        // 匹配的檔案
        test: /\.m?js$/i,
        // 排除以下檔案
        exclude: /node_modules/,
        use: [
          // 下載 babel-loader @babel/core @babel/preset-env
          {
            loader: 'babel-loader',
            options: {
              // 開啟緩存，提升編譯速度
              // 在默認緩存目錄 node_modules/.cache/babel-loader 中緩存babel-loader執行結果
              cacheDirectory: true,
              // 指示 babel 使用怎麼樣的兼容性處理
              presets: [
                ['@babel/preset-env',
                  {
                    // 是否顯示詳細的兼容性處理狀態，預設 false
                    debug: true,
                    // 有需要處理兼容性的代碼，按需求下載 => corejs@3 --save
                    useBuiltIns: 'usage',
                    corejs: 3.8,
                    // 需要被兼容的瀏覽器版本
                    // 使用 defaults 的話，在 browserslist 要有配置
                    targets: '> 0.25%, not dead',
                  },
                ],
              ],
              plugins: [
                // 下載 @babel/plugin-transform-runtime -D
                // 下載 @babel/runtime --save
                // 不重複使用輔助性代碼，從@babel/plugin-transform-runtime引用，降低打包容量
                ['@babel/plugin-transform-runtime'],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    new ESLintWebpackPlugin({
      fix: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
