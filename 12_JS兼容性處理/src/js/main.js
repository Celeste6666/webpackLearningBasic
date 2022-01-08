import '../css/main.css';

const add = (x, y) => x + y;
add(2, 4);

const testPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('成功運行');
  }, 1000);
});

testPromise.then((res) => {
  console.log(res);
});
