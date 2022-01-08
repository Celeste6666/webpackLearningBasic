// 先下載 npm i express ，用來建立伺服器
const express = require('express');

const app = express();

app.use(express.static('build', { maxAge: 1000 * 3600 }));

app.listen(3000);

// 透過 node server.js 啟用服務器
// localhost:3000 訪問
