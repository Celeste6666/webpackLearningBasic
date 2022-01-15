import '../css/main.css';

console.log('index文件初始化')
// 預獲取
// 未來可能會用到的資源，讓瀏覽器在有空閒時提前加載該模塊
// 正常加載是併行加載(同一時間加載多個文件)
document.querySelector('button')
  .addEventListener('click', async (e) => {
  const {plus,multiple} = await import(
    // 內聯注釋(Magic Comments) => /* ... */ 
    /* webpackChunkName: 'calculate' */
    /* webpackPrefetch: true */
    './calculate'
  );
  console.log('預先載入calculate 模塊');
  plus(2,4)
  multiple(2,4)
})