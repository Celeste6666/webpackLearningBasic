const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/bundle.js',
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 使用 postcss 來處理CSS 兼容性問題
          // post-preset-env 協助webpack精確到瀏覽器版本的並加載CSS的配置
          /*
          在 css-loader 和 style-loader 之前使用它，
          但是在其他预处理器（例如：sass|less|stylus-loader）之后使用
          */
         // 使用物件形式才可以修改配置
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // 協助 postcss 找到 package.json 裡的 browserslist 裡的配置
                  // 並通過配置加載指定的CSS兼容性樣式
                  // browserslist 的配置 可參考https://github.com/browserslist/browserslist#packagejson
                  // "browserslist": {  => 分為開發及生產環境去做不同配置
                  //   "development": [
                  //     "last 1 chrome version",
                  //     "last 1 firefox version",
                  //     "last 1 safari version"
                  //   ],
                  //   "production": [
                  //     ">0.2%", => 地球上99.8%的人使用的瀏覽器
                  //     "not dead" => 不要處理不再被使用的瀏覽器
                  //   ]
                  // }
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
      filename: 'css/[name].css'
    })
  ],
  // devServer: {
  //   static: './dist',
  //   compress: true,
  //   open: true,
  //   port: 5000
  // }
}