// import _ from 'lodash';
// console.log('multiple', _.multiply(2, 4));

// import multiple from './calculate';
// console.log('multiple', multiple(2, 4));

// 動態分割代碼
// 會自動引入文件
import('./calculate')
  .then(({ multiple }) => {
    // 透過解構賦值取得res中的multiple
    // 記得參數要用() 
    console.log(multiple)
    console.log('multiple 文件加載成功！')
  })
  .catch(err=>{
    console.log(err)
  })