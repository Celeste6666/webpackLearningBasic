const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    // 使用模版字符串也可以創建出輸出資料夾
    path: `${__dirname}/build`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        // 處理 HTML 標籤中 src 屬性值所有的檔案
        loader: 'html-loader',
      },
      {
        // webpack 5 有內置處理圖片的模塊
        // 匹配到圖片資源
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          /*
          透過 dataUrlCondition 設定以圖片大小選擇
          使用哪個資源模組(asset-resource/asset-inline)，預設是 8kb
          */
          dataUrlCondition: {
            maxSize: 80 * 1024 // 80kb
          },
        },
        generator: {
          filename: 'images/[hash:5][ext][query]'
        },
        // asset/resource：所有圖片資源都會被發送到輸出資料夾'./build' 中
        // 類似 file-loader
        // type: 'asset/resource',
        // 透過 generator.filename 設定圖片被發送到輸出資料夾後的命名方式
        // 在名稱前加入 'images/' 代表在輸出資料夾'./build'內再新增一個資料夾'./build/images'，並把這些圖片放入這個資料夾內
        // generator: {
        //   filename: 'images/[hash:5][ext][query]'
        // },
        // asset/inline：圖片會用 base64 處理
        // 類似 url-loader
        // 優點：減少請求數量(減輕伺服器壓力)
        // 缺點：圖片體積變大(文件請求速度慢)
        // type: 'asset/inline',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // ejs 語法會與 html-loader 發生衝突，所以在此不使用
      // title: '使用內置loader打包圖片資源！'
    })
  ],
  mode: 'development',
}