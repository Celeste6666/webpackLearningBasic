import '../css/main.css';

function plus(...arg) {
  return arg.reduce((a, c) => a + c, 0);
}

console.log(plus(1, 2, 3));
