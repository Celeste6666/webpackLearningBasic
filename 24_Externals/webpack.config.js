const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'js/index.js',
    clean: true,
  },
  module: {
    rules: [
      // 處理 JS
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          'thread-loader', // 透過開啟進程來加快任務處理
          // 耗時的 loader
          {
            loader: 'babel-loader?cacheDirectory=true',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  externals: {
    // 忽略的庫名: npm 包名
    // 拒絕指定的庫被打包進來
    // 必須在src/index.html中透過外部連結(CDN)引入
    lodash: {
      root: '_',
    }
  },
};
