export function plus(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(a + b); }, 1000);
  });

  test.then((res) => console.log(res));
}

export function muliple(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => { resolve(a * b); }, 1000);
  });

  test.then((res) => console.log(res));
}
