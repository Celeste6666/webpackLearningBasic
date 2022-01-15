import '../css/main.css';
// node_modules
// import _ from 'lodash';
// console.log('index plus', _.add(3, 2));
// console.log('index multiple', _.multiply(2, 4));

// 分割自製代碼
// import { plus, multiple } from './calculate';
// console.log('index', plus(1, 2));
// console.log('index', multiple(1, 2));

// 動態分割代碼
// 會自動引入文件
// 方法一
// import('./calculate')
//   .then(res => {
//     console.log('index',res)
//     console.log('plus', res.plus)
//     console.log('multiple', res.multiple)
//     console.log('文件加載成功！')
//   })
//   .catch(err=>{
//     console.log(err)
//   })

// 方法二
const getMethods = async () => {
  const {plus, multiple} = await import(/* webpackChunkName: 'calculate' */'./calculate')
  console.log(plus)
  console.log(multiple)
}
getMethods();