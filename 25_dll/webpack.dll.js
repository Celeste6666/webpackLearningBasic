/* 
使用 dll 技術，對某些第三方的庫進行單獨打包。
dll 需要有自己的webpack配置文件

當運行 npx webpack 時，默認查找 webpack.config.js 配置文件
但此時我們要運行的是 webpack.dll.js 文件 => npx webpack --config webpack.dll.js
*/

const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    // 最終打包生成的 [name]: 要打包的第三方庫
    lodash: ['lodash']
  },
  output: {
    path: `${__dirname}/dll`,
    filename: '[name].js',
    // 打包的庫向外暴露出去的名字
    // 透過 fullhash 讓每次打包時是不同的名
    library: '[name]_[fullhash]'
  },
  plugins: [
    // 將第三方庫單獨打包(告訴 webpack 之後打包時不須打包該庫)
    // 用來創建出一個 manifest.json => 提供映射關係
    new webpack.DllPlugin({
      name: '[name]_[fullhash]', // name === output.library ，映射庫的暴露的名稱(使用的時候要用的名)
      path: `${__dirname}/dll/manifest.json`,
    })
  ],
};