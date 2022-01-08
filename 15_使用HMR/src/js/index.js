import '../scss/index.scss';
import print from './print';

const add = (a, b) => a + b;

const testPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('成功運行 Promise');
    resolve(add(2, 5));
  }, 1000);
});

testPromise.then((res) => {
  console.log('res', res);
});

// 一旦在全局 module 變量上有 hot 屬性 => 開啟 HMR 功能
if (module.hot) {
  // module.hot.accept('監聽的文件', callback)
  // 在開啟 HMR 時，就會監聽指定文件，並在監聽文件發生變化時執行 callback
  module.hot.accept('./print.js', () => {
    print();
  });
}
