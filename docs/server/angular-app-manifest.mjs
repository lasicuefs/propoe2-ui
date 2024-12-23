
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/new/rhythm"
  },
  {
    "renderMode": 2,
    "route": "/new/mives"
  },
  {
    "renderMode": 2,
    "route": "/new/weights"
  },
  {
    "renderMode": 2,
    "route": "/poem"
  }
],
  assets: {
    'index.csr.html': {size: 2259, hash: 'b80ee1b3d14b3138ac4c12595e902272ff635666ef08355bc472d96ab216d807', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: '37dd96b85755c0e84c7f3e09209f33a618b67ea630d346d3c82188f9a952d567', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/mives/index.html': {size: 9459, hash: '023c82244e729126b8b264946f01ce28a05050f53839e28e46aa997ec7b2fac0', text: () => import('./assets-chunks/new_mives_index_html.mjs').then(m => m.default)},
    'new/weights/index.html': {size: 11484, hash: 'ae469c46331d3792fb7395bbfc12708aab8359e4c6ad3e638168c8818b541f42', text: () => import('./assets-chunks/new_weights_index_html.mjs').then(m => m.default)},
    'new/rhythm/index.html': {size: 12588, hash: 'fe074897893e0d4c35639fd2e00ef333666c80e795aff7adb80391357145c7a3', text: () => import('./assets-chunks/new_rhythm_index_html.mjs').then(m => m.default)},
    'poem/index.html': {size: 11198, hash: '309bcce08669d043cc138498d9163d1e842d4bc9717c5773ef07367041195f8b', text: () => import('./assets-chunks/poem_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11217, hash: '0e9ea4720b88b3e1f44846e9fbcc573612c45ada5ee4db767603bc34907d0631', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KY7EDP7L.css': {size: 24777, hash: 'U9or4IKYhRE', text: () => import('./assets-chunks/styles-KY7EDP7L_css.mjs').then(m => m.default)}
  },
};
