// lodash 必須先透過 npm 下載套件
import _ from 'lodash';

// webpack 可以理解 JS 及 JSON，但不能處理 CSS 或 IMG 資源

import data from './data.json';
import './index.css';

console.log('我是測試 js 檔')

console.log('使用lodash', _.join(['Hello', 'webpack'], ' '))

console.log('測試json是否能夠被 webpack 理解', data)