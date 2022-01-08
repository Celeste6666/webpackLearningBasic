export default  function plus(a, b) {
  const test = new Promise((resolve) => {
    setTimeout(() => {resolve(a + b + c)}, 1000)
  })

  test.then((res) => console.log(res))
}
