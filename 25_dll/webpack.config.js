const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output:{
    path: `${__dirname}/build`,
    filename: 'index_bundle.js',
    clean: true,
  },
  plugins: [
    // 告訴 webpack 哪些包不參與打包，且引入的名要改變
    new webpack.DllReferencePlugin({
      manifest: `${__dirname}/dll/manifest.json`,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 將某個文件單獨打包，並自動在 html 資源中引入
    new AddAssetHtmlPlugin([
      {
        filepath: `${__dirname}/dll/lodash.js`,
        // 在輸出到 HMTL 資源時，lodash.js的前綴 => ./lodash.js
        // 一定要加，否則在 HMTL 資源引入時會變成 auto/lodash.js(出錯)
        publicPath: './'
      }
    ])
  ]
}