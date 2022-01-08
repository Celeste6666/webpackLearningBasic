// 使用 eslint-webpack-plugin 時，一定要配置 .eslintrc.js 文件
// 否則會報錯誤：No ESLint configuration found in ...\11_JS語法檢查ESlint\src\js

module.exports = {
  // 告訴eslint找當前配置檔案不能往父級查詢
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 設定 parser options 可以幫助 ESLint 決定什麼是解析錯誤
  // 預設的 ESLint 並沒有支援所有最新的 ES6 語法，因此若有需要可以加上 `{ "parserOptions": { "ecmaVersion": 6 } }` 的設定。
  parserOptions: {
    // 指定要使用哪一版本的 ECMAScript 語法， 3, 5 (default), 6, 7, 8, 9, 10 or 11
    ecmaVersion: 6,
    // 設成 `script` (default) 或 `module`（如果你使用的是 ECMAScript modules）
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
  },
};
