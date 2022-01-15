// import _ from 'lodash';
// console.log('plus', _.add(3, 2));

// import plus from './calculate';
// console.log('plus', plus(3, 2));

// 動態分割代碼
// 會自動引入文件
import('./calculate')
  .then(({ plus }) => {
    // 透過解構賦值取得res中的plus
    // 記得參數要用() 
    console.log(plus)
    console.log('plus 文件加載成功！')
  })
  .catch(err=>{
    console.log(err)
  })