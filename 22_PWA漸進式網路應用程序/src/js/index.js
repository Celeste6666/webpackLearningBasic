import '../css/main.css';

console.log('index文件初始化')

import(
  './calculate'
).then(({plus,multiple}) => { 
  plus(2,4)
  multiple(2,4)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', ()=>{
    navigator.serviceWorker
    .register('/service-worker.js')
    .then(registration => {
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      )

      console.log(
        'ServiceWorker registration: ',
        registration
      )
    })
    .catch(err => {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}
