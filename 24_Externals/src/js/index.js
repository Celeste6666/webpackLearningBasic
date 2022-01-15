// 透過 externals設定 _ 作為lodash變成全局變量
// import _ from 'lodash';
import {plus,multiple} from './calculate';

console.log('index plus', _.add(3, 2));
console.log('index multiple', _.multiply(2, 4));

console.log('calculate plus', plus(5, 2));
console.log('calculate multiple',multiple(6, 4));