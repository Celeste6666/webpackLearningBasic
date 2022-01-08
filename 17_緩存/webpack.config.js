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
    // 資源再強制緩存的時候，瀏覽器不會再去訪問服務器
    // 所以此時可以透過更改資源名稱來讓瀏覽器知道我們更改了資源內容
    // 資源名稱變了，資源就會被重新加載
    /*
      可以透過給要輸出的資源幾種常見方法來快速更改名稱
      [fullhash]:構建的時候會生成唯一的 hash 值。
                問題是：所有在入口文件中引入的資源(js及css)都共享同一個hash值
                如果其中一個文件變了，重新打包後所有文件的 hash 值都會改變(所有打包的資源緩存都會失效)
      [chunkhash:10]：如果打包是來自同一個 chunk(在同一個入口文件中引入即為同一個 chunk)，那麼就會有同一個 hash 值
                  例如：css文件在index.js中引入，所以他們會是同一個 chunk
                  產生的問題同上：其中一個文件變了，重新打包後所有文件的 hash 值都會改變(所有打包的資源緩存都會失效)
      [contenthash:10]：根據文件內容生成 hash 值，所以不同文建會有不同 hash 值

    */
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
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
