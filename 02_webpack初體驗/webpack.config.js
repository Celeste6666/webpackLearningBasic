// path 是 Node.js 的一個方法
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // __dirname 為 Node.js 的一個變量，代表當前文件的絕對路徑
    // 透過 path.resolve() 在當前目錄下創建一個 build 資料夾
    path: path.resolve(__dirname, 'build'),
    //filename為小寫
    filename: 'built.js'
  },
  module: {
    rules: [
      // 各項loader詳細配置
    ],
  },
  plugins: [
    // 各項plugins詳細配置
  ],
  mode: 'development'
}