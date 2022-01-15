const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'js/index-[contenthash:10].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 觀察緩存
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
        test: /\.(png|jpg|jpeg|gif)$/i,
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
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:10].css',
    }),
    new ESLintPlugin({
      fix: true,
    }),
  ],
  optimization: {
    /*
    在開發模式中打開會看到註釋為 => unused harmony export multiple
    代表未被引用的程式碼
    而這些代碼就是在生產模式中被刪除的
    (生產模式即使沒有設置usedExports也會自動篩選未被引用的代碼並刪除)

    在 package.json 中設置 sideEffects 屬性可以告訴 webpack 哪些代碼是有副作用的(就是如果執行 tree shaking 是會發生錯誤的)
    自己認為設置 sideEffects 屬性的原因：可以更快速地跳過某些模塊不去執行 tree shaking
    如果所有程式碼執行 tree shaking 都沒有任何問題值可以設置為 false

    但像是 .css 或一些比較特別的.js 等文件在輸出的時候
    (也是透過 export/import)，
    可能會產生一些錯誤導致無法被正確導入，
    這時候就可以透過 [...] 排除他們
    "sideEffects": ["*.css", "./src/js/index.js"]
    */
    usedExports: true,
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
