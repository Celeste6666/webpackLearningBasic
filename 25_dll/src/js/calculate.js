import _ from 'lodash';
export function plus(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(_.add(a, b)); }, 1000);
  });

  test.then((res) => {
    console.log(res);
    return res;
  });
}

export function multiple(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(_.multiply(a, b)); }, 1000);
  });

  test.then((res) => {
    console.log(res);
    return res;
  });
}
