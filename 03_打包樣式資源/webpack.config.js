const {
  resolve
} = require('path')

module.exports = {
  // webpack 配置

  //入口文件
  entry: './src/index.js',
  output: {
    path: resolve(__dirname,'build'),
    // 輸出文件名
    //filename為小寫
    filename: 'built.js'
  },
  //loader的配置
  //主要用來將非js文件編譯成 webpack 能理解的內容，像是將.css編譯成.js
  //每個不同類型的文件都有自己的loader，像是 Sass 有自己的 loader ，Less也有自己的loader，並且針對不同類型的檔案都要有自己的配置(rule)
  module: {
    rules: [
      // 各個loader的詳細配置內容
      {
        //匹配文件有哪些
        //用正規表達式
        //處理以.css結尾的文件
        //npm i style-loader css-loader -D
        test: /\.(css|sass|scss)$/i,
        //使用那些loader處理
        use: [
          //use陣列執行順序從右到左(從下到上)依次執行
          //創建style標籤，把'css-loader'編譯出來的js中的樣式資料加到<head>中
          'style-loader',
          //將css文件變成common.js模組(裡面是字串)
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  //plugins的配置
  //主要用來壓縮或打包優化
  plugins: [
    // 各個plugins的詳細配置內容
  ],
  //模式(開發或生產模式)
  //測試用開發模式
  mode: 'development'
  //mode: 'production'
}
