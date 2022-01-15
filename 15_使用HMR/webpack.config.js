// 處理 HTML 自動加載
const HtmlWebpackPlugin = require('html-webpack-plugin');
// CSS 文件輸出
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// CSS 壓縮
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 處理 ESLint
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      // 處理SCSS文件
      {
        test: /\.s?[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
          'sass-loader',
        ],
      },
      // 處理圖片資源
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'assets/[hash:5][ext][query]',
        },
      },
      // 處理 HTML 中的圖片資源連結
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      // 處理 js 語法兼容性
      {
        test: /\.m?js$/i,
        // 記得排除node_momdules
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            // 設置 babel.config.js 放配置
          },
        ],
      },
    ],
  },
  plugins: [
    // 處理HTML
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
    }),
    // 處理CSS
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // 處理JS
    new ESLintWebpackPlugin({
      fix: true,
      // 配置寫在 .eslintrc.js
    }),
  ],
  // 優化處理
  optimization: {
    minimize: true,
    minimizer: [
      // 展開內置其他優化選項
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    // 默認開啟監聽(watch)
    static: './build',
    // static: {
    //   directory: path.join(__dirname, 'build'),
    //   watch: {
    // // 忽略某些文件(不需要監聽)
    //     ignored: /node_modules/,
    //   },
    // },
    open: true,
    compress: true,
    client: {
      // 啟動瀏覽器日誌
      logging: 'none',
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    // 開啟 HMR
    // css 本身就有HMR功能
    // js 文件也沒有 HMR 功能 => 透過修改 js 代碼來支持 HMR 功能(參考print.js)
    // html 也沒有 HMR 功能也沒有熱更新(如果想要有熱更新功能可以在 entry 中加入 HTML 文件)
    // html 只有一個文件，所以一旦變化就一定要重新加載，無需做 HMR
    hot: true,
    // 代理服務器
    // 為了解決瀏覽器與伺服器之間的跨域問題(CORS)
    proxy: {},
  },
};
