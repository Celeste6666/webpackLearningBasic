const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'built.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  // 用來自動編譯、打開瀏覽器並刷新
  // 只會在內存中編譯打包，並不會輸出
  // 透過指令 npx webpack serve 來運行
  devServer: {
    // 要監控的資料夾，與輸出的資料夾路徑相同
    static: './build',
    // 使用 gzip 壓縮代碼
    compress: true,
    // 自動打開默認瀏覽器
    // 第一次運行時會自動打開瀏覽器
    // 之後更改 html 檔以外的檔案才會即時更新
    open: true,
    client: {
      // 編譯出現錯誤或警告時，警告或錯誤訊息是否會覆蓋全屏顯示
      overlay: {
        // 預設皆為 true
        errors: true,
        warnings: false,
      },
    },
    // 使用的本地伺服器端口號
    port: '5000',
  }
}