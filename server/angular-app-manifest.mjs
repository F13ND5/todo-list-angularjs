
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://F13ND5.github.io/todo-list-angularjs"
  }
],
  assets: new Map([
['index.csr.html', {size: 552, hash: 'd47f1db72dffa8af1828c3f07d0a7b9132cda17c1b17893de2d0e2b8a6d4c761', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1065, hash: '123b6dfd0a6104f4c403daf9d2206115f90bff292be9fefac0e8de6a70a6cf3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 2335, hash: 'fd9847c1e60447d405a78abf45d3d681253f759a9221a9088c62c69a2520d3f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
