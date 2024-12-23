
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
    'index.csr.html': {size: 2123, hash: '463fc84874357651ca89edde5ef19e28025b10e2368995be4c60d88673109c31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'f79067d8de1b6b2e3e097200f6bbb2b463af31004a3721bbffc29101f24a5f20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/rhythm/index.html': {size: 12452, hash: 'b6b57d97944ab2d8190ba788757858275d8297cb0f1fec4161ccf0c275b552a5', text: () => import('./assets-chunks/new_rhythm_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11081, hash: '490e08d7b7a91c169936c2942dd243bac1d73f32f3f7ded38bb59e0fdbd7daea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'new/weights/index.html': {size: 11348, hash: '87d7b444e21b9e8bc452163f62e05b1e15739309ef63e35fbbc41f1f2bb25c62', text: () => import('./assets-chunks/new_weights_index_html.mjs').then(m => m.default)},
    'poem/index.html': {size: 11062, hash: '661273c0fd388e8a57e2cfdc74e3c5620f0a648053f7d36d39142f9d1384d89d', text: () => import('./assets-chunks/poem_index_html.mjs').then(m => m.default)},
    'new/mives/index.html': {size: 9323, hash: '2fd8baf5fa7ab2fb2c5b99ca7787d0f9879b872b30841e4754d37318e540d295', text: () => import('./assets-chunks/new_mives_index_html.mjs').then(m => m.default)},
    'styles-KY7EDP7L.css': {size: 24777, hash: 'U9or4IKYhRE', text: () => import('./assets-chunks/styles-KY7EDP7L_css.mjs').then(m => m.default)}
  },
};
