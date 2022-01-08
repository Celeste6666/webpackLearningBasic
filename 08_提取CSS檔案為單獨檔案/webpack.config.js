const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: 'production',
  entry: {
    aboutMe: './src/js/index.js',
  },
  output: {
    // 把 輸出後的 bundle 放在輸出資料夾中的 js 資料夾
    // 注意： path 會是所有輸出文件的所在位置
    path: `${__dirname}/build`,
    filename: 'js/bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // style-loader 的功用是將編譯後的 CSS 透過 style標籤放入 html 文件中
          // 用MiniCssExtractPlugin.loader 會將編譯後的 CSS 的樣式資源獨立成一個檔案
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 將CSS文件整合到js文件中
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 會被放置到輸出資料夾中
      // 對輸出的CSS 檔案進行重命名
      // [name] 代表入口文件屬性名(默認值是 main)
      filename: 'css/[name].css'
    })
  ]
}