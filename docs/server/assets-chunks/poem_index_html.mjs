export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Propoe2Ui</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv97I8x3F5O.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv97IAx3F5O.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv97I0x3F5O.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cardo;font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv97IMx3A.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv03IEp2A.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv73IEp2A.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv23IEp2A.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv43IE.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQa-WN3aQ.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQV-WN3aQ.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQY-WN3aQ.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cardo;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQW-WM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}p{margin:0}img{display:block;vertical-align:middle}img{max-width:100%;height:auto}.prose{color:var(--tw-prose-body);max-width:65ch}.prose{--tw-prose-body: #374151;--tw-prose-headings: #111827;--tw-prose-lead: #4b5563;--tw-prose-links: #111827;--tw-prose-bold: #111827;--tw-prose-counters: #6b7280;--tw-prose-bullets: #d1d5db;--tw-prose-hr: #e5e7eb;--tw-prose-quotes: #111827;--tw-prose-quote-borders: #e5e7eb;--tw-prose-captions: #6b7280;--tw-prose-kbd: #111827;--tw-prose-kbd-shadows: 17 24 39;--tw-prose-code: #111827;--tw-prose-pre-code: #e5e7eb;--tw-prose-pre-bg: #1f2937;--tw-prose-th-borders: #d1d5db;--tw-prose-td-borders: #e5e7eb;--tw-prose-invert-body: #d1d5db;--tw-prose-invert-headings: #fff;--tw-prose-invert-lead: #9ca3af;--tw-prose-invert-links: #fff;--tw-prose-invert-bold: #fff;--tw-prose-invert-counters: #9ca3af;--tw-prose-invert-bullets: #4b5563;--tw-prose-invert-hr: #374151;--tw-prose-invert-quotes: #f3f4f6;--tw-prose-invert-quote-borders: #374151;--tw-prose-invert-captions: #9ca3af;--tw-prose-invert-kbd: #fff;--tw-prose-invert-kbd-shadows: 255 255 255;--tw-prose-invert-code: #fff;--tw-prose-invert-pre-code: #d1d5db;--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);--tw-prose-invert-th-borders: #4b5563;--tw-prose-invert-td-borders: #374151;font-size:1rem;line-height:1.75}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.z-0{z-index:0}.z-10{z-index:10}.z-\\[-1\\]{z-index:-1}.z-\\[-2\\]{z-index:-2}.mx-auto{margin-left:auto;margin-right:auto}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.h-full{height:100%}.h-screen{height:100vh}.max-h-screen{max-height:100vh}.w-full{width:100%}.w-screen{width:100vw}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.bg-slate-50{--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.object-cover{object-fit:cover}.px-10{padding-left:2.5rem;padding-right:2.5rem}.content-container{display:flex;height:100vh;width:100vw;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;font-family:Cardo,ui-serif,Georgia}
</style><link rel="stylesheet" href="rickbarretto.github.io/propoe2-ui/styles-KY7EDP7L.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="rickbarretto.github.io/propoe2-ui/styles-KY7EDP7L.css"></noscript><style ng-app-id="ng">@keyframes _ngcontent-ng-c3997908000_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin-infinite[_ngcontent-ng-c3997908000]{animation:_ngcontent-ng-c3997908000_rotate 100s linear infinite}</style></head>
<body><!--nghm-->
  <app-root ng-version="19.0.4" ngh="2" ng-server-context="ssg"><div class="relative z-10 w-screen h-screen"><router-outlet></router-outlet><app-poem ngh="0"><main class="content-container bg-slate-50"><article class="my-10 mx-auto px-10 max-h-screen overflow-y-auto"><p class="prose"><span> Lorem ipsum dolor sit amet,  <br></span><span>       consectetur adipiscing elit. <br></span><!----></p><p class="prose"><span>       Nullam ornare, nunc in tincidunt tincidunt,  <br></span><span>       nunc nisl pharetra elit, <br></span><span>       nec fermentum purus ligula nec ligula.  <br></span><span>        <br></span><span>       Nullam vel odio at eros gravida fermentum.  <br></span><span>       Nullam nec purus id urna suscipit ultricies.  <br></span><span>       Nullam id diam. <br></span><!----></p><p class="prose"><span>       Lorem ipsum dolor sit amet,  <br></span><span>       consectetur adipiscing elit. <br></span><!----></p><p class="prose"><span>       Nullam ornare, nunc in tincidunt tincidunt,  <br></span><span>       nunc nisl pharetra elit, <br></span><span>       nec fermentum purus ligula nec ligula.  <br></span><span>        <br></span><span>       Nullam vel odio at eros gravida fermentum.  <br></span><span>       Nullam nec purus id urna suscipit ultricies.  <br></span><span>       Nullam id diam. <br></span><!----></p><p class="prose"><span>       Lorem ipsum dolor sit amet,  <br></span><span>       consectetur adipiscing elit. <br></span><!----></p><p class="prose"><span>       Nullam ornare, nunc in tincidunt tincidunt,  <br></span><span>       nunc nisl pharetra elit, <br></span><span>       nec fermentum purus ligula nec ligula.  <br></span><span>        <br></span><span>       Nullam vel odio at eros gravida fermentum.  <br></span><span>       Nullam nec purus id urna suscipit ultricies.  <br></span><span>       Nullam id diam. <br></span><!----></p><!----></article></main></app-poem><!----></div><layout-background _nghost-ng-c3997908000 ngh="1"><div _ngcontent-ng-c3997908000 class="absolute inset-0 overflow-hidden z-0"><img _ngcontent-ng-c3997908000 src="assets/spiral-fx.svg" alt="Background's Spiral Effect" class="absolute inset-0 w-full h-full object-cover z-[-1] animate-spin-infinite"><img _ngcontent-ng-c3997908000 src="assets/background.svg" alt="Background Layer" class="absolute inset-0 w-full h-full object-cover z-[-2]"></div></layout-background></app-root>
<script src="rickbarretto.github.io/propoe2-ui/polyfills-FFHMD2TL.js" type="module"></script><script src="rickbarretto.github.io/propoe2-ui/main-TUDWHDG3.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"2":"t1"},"c":{"2":[{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":2}]}},{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":7}]}},{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":2}]}},{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":7}]}},{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":2}]}},{"i":"t1","r":1,"t":{"1":"t2"},"c":{"1":[{"i":"t2","r":1,"x":7}]}}]}},{},{"c":{"1":[{"i":"c1407530705","r":1}]}}]}</script></body></html>`;