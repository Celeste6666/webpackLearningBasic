const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    // multiple: './src/js/multiple.js',
    // plus: './src/js/plus.js',
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'js/[name]-[contenthash:10].js',
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
  // optimization: {
  //   // 可以將 node_modules 中的代碼另外打包成一個 chunk
  //   // 分析多入口文件 chunk 中有沒有公共文件，如果有就會單獨 chunk
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 10,
  //   },
  // },
};
