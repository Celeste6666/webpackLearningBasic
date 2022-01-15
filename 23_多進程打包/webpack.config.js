const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

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
      // 處理CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
    new ESLintWebpackPlugin({
      fix: true,
    }),
  ],
};
