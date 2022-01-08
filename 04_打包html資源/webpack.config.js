const { resolve } = require('path');
/*
loader：1.下載 2.使用(配置配置loader)
plugins：1.下載 2.引用require() 3.使用
*/

// HtmlWebpackPlugin是一個構建函數
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path: resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  // 各個plugins的詳細配置內容
  plugins: [
    // 透過 new 建構後使用
    //目的是在出口文件所在資料夾(dist)中創建一個空的index.html 並在該文件中直接加入打包好的 .js檔(所有資源整合的檔案)
    //透過在 template 屬性中加入原本寫好的 html 文件
    new HtmlWebpackPlugin({
      // 複製自製的 HTML ，並自動引入打包好的資源
      template: './src/index.html',
      // 輸出後的 HTML 檔案名
      filename: 'about.html',
      // title 標籤內容
      title: '我是打包好的自製 HTML 資源！'
    })
  ]
}