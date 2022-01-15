const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'index-[contenthash:5].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
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
          }
        ]
      },
      {
        test: /(jpg|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/[hash:5][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 快速建立一個簡單的PWA設置
    new WorkboxWebpackPlugin.GenerateSW({
      skipWaiting: true, // 強制等待中的 Service Worker 被激活
      clientsClaim: true, // Service Worker 被激活後使其立即獲得頁面控制權
    })
  ]
};
