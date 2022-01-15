export function plus(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(a + b); }, 1000);
  });

  test.then((res) => {
    console.log('plus', res);
    return res;
  });
}

export function multiple(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(a * b); }, 1000);
  });

  test.then((res) => {
    console.log('multiple', res);
    return res;
  });
}
