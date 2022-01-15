import '../css/main.css';

console.log('index文件初始化')
// 懶加載
// 在有需要時才加載，例如按下按鈕後才去加載某資源並執行
document.querySelector('button')
  .addEventListener('click', async (e) => {
  const {plus,multiple} = await import(
    /* webpackChunkName: 'calculate' */
    './calculate'
  );
  console.log('calculate 模塊是等按下按鈕才加載');
  plus(2,4)
  multiple(2,4)
})