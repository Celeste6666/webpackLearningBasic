const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  externals: {
    lodash: {
      root: '_',
    }
  },
  
  // 配置模块如何解析
  resolve: {
    // 模塊路徑別名
    alias: {
      // @ 就是 ${__dirname}/src/ 的縮寫
      // 在引用時可以用 @ 取代 ./src
      // 缺點是無法提供路徑提示
      '@': `${__dirname}/src/`,
      '$css': `${__dirname}/src/css`,
    },
    // 可以省略文件的副檔名
    // 當有多個相同文件名，副檔名不同的檔案，
    // webpack 以解析匹配到的第一個副檔名為主，不會再往後匹配
    // 如有 index.js index.css => 都省略為 index
    // webpack 匹配 .js 有找到檔案就不會往後再嘗試匹配，所以找到 index.css 前就會停下尋找
    extensions: ['.js', '.json', '.css'],
    // 如果 webpack.config.js 放置的位置與 /node_modules/ 放置位置不同
    // 可以透過 modules 來告訴 webpack 解析模塊時要去搜尋的目錄位於何處，減少搜尋時間
    modules: [
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ],
  },
};
