
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
    'index.csr.html': {size: 2323, hash: '8c2e187bc5e020c1075b4e418cb25fee9c5c8920bdb5cc10e00c3bf90bd45fce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1169, hash: '7635b234aae7045456d4829a2d6abce43d546c729eda98d52a1c071b5291bfdb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/rhythm/index.html': {size: 4368, hash: 'ec26790a46f6a5921fdf04b341ecfde7bb81cd6873546db982a54e4ade20c203', text: () => import('./assets-chunks/new_rhythm_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2729, hash: 'ecd58727e0d19c007d563dbad28aeb150133c0270c4466ea6472dc12c93f5fd8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'new/mives/index.html': {size: 1925, hash: '1363b136fb127068a612d43b2ac65ecf58f24a098a569fd321391aebd4838a41', text: () => import('./assets-chunks/new_mives_index_html.mjs').then(m => m.default)},
    'poem/index.html': {size: 3831, hash: 'fd5a1b90d5d3818a7704c05f9f16df1a8877bd3bcd4d269ea89be419aec27241', text: () => import('./assets-chunks/poem_index_html.mjs').then(m => m.default)},
    'new/weights/index.html': {size: 3235, hash: 'fdea3f228006555e4c3af215b49bb5eb559659482ac5bfc7dd4ab12fc669369b', text: () => import('./assets-chunks/new_weights_index_html.mjs').then(m => m.default)},
    'styles-KY7EDP7L.css': {size: 24777, hash: 'U9or4IKYhRE', text: () => import('./assets-chunks/styles-KY7EDP7L_css.mjs').then(m => m.default)}
  },
};
