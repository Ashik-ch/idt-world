
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/idt-world/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MS5LQPEK.js"
    ],
    "route": "/Program%20Files/Git/idt-world"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S7GAW3WC.js",
      "chunk-UX6KO65C.js",
      "chunk-D2SZASCQ.js",
      "chunk-3LUVHBLP.js"
    ],
    "route": "/Program%20Files/Git/idt-world/inbound"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAQ2QSRC.js",
      "chunk-UX6KO65C.js",
      "chunk-ZM5KP6O5.js"
    ],
    "route": "/Program%20Files/Git/idt-world/inbound/kerala"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAQ2QSRC.js",
      "chunk-UX6KO65C.js",
      "chunk-ZM5KP6O5.js"
    ],
    "route": "/Program%20Files/Git/idt-world/inbound/delhi"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAQ2QSRC.js",
      "chunk-UX6KO65C.js",
      "chunk-ZM5KP6O5.js"
    ],
    "route": "/Program%20Files/Git/idt-world/inbound/karnataka"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UAQ2QSRC.js",
      "chunk-UX6KO65C.js",
      "chunk-ZM5KP6O5.js"
    ],
    "route": "/Program%20Files/Git/idt-world/inbound/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-75AAYL6P.js",
      "chunk-D2SZASCQ.js",
      "chunk-3LUVHBLP.js"
    ],
    "route": "/Program%20Files/Git/idt-world/outbound"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WZK4CQGW.js",
      "chunk-ZM5KP6O5.js"
    ],
    "route": "/Program%20Files/Git/idt-world/outbound/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RHEUQ6O.js",
      "chunk-3LUVHBLP.js"
    ],
    "route": "/Program%20Files/Git/idt-world/contact"
  },
  {
    "renderMode": 1,
    "redirectTo": "/Program%20Files/Git/idt-world",
    "route": "/Program%20Files/Git/idt-world/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2530, hash: '231295755ae9c8dd4acf53a7a02d3b77f8d14074018e477ec38a11f839f6232b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1129, hash: '57016057a2ab53a699a782d78359e1b722164b734e1bfcf0bd5e8c88c6a0db53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3VC3WGV7.css': {size: 111580, hash: 'kY/gbA8g8yU', text: () => import('./assets-chunks/styles-3VC3WGV7_css.mjs').then(m => m.default)}
  },
};
