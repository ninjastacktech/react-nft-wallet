(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(49031)}])},49031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(85893),a=n(5152),o=n(9008),s=n(34051),i=n.n(s),c=n(67294),l=n(81150),u=n(15659),d=n(4811),f=function(e){var t,n=null!==(t=e.asset.name)&&void 0!==t?t:"#".concat(e.asset.tokenId);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{className:"bg-slate-100 dark:bg-slate-800 w-60 h-80 rounded-lg shadow-lg flex flex-col mx-2 transform transition duration-500 hover:scale-110",href:e.asset.permalink,target:"_blank",rel:"noreferrer",children:[e.asset.animationUrl&&(0,r.jsx)("video",{className:"rounded-t-lg max-h-60",controlsList:"nodownload",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,poster:e.asset.imageUrl,preload:"metadata",children:(0,r.jsx)("source",{src:e.asset.animationUrl,type:"video/mp4"})}),!e.asset.animationUrl&&e.asset.imageUrl&&(0,r.jsx)("img",{className:"rounded-t-lg max-h-60",src:e.asset.imageUrl,alt:""}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsx)("h2",{className:"font-bold mb-2 text-m text-slate-900 dark:text-white",children:n})})]})})},m=function(e){var t;return(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:null===(t=e.assets)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(f,{asset:e},e.tokenId)}))})},h=function(e){return(0,r.jsxs)("div",{className:"flex flex-row items-center my-8",children:[e.item.imageUrl&&(0,r.jsx)("img",{src:e.item.imageUrl,alt:"",className:"w-14 h-14 rounded-full mr-4"}),(0,r.jsx)("h2",{className:"text-slate-900 text-xl font-semibold dark:text-white",children:e.item.name})]})},x=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(h,{item:e.collection}),(0,r.jsx)(m,{assets:e.assets})]})};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return new Promise((function(t){return setTimeout(t,e)}))}var y=function(e){var t=(0,u.useInjection)(d.J),n=c.useContext(l.V).authState,a=b(c.useState([]),2),o=a[0],s=a[1],f=b(c.useState({}),2),m=f[0],h=f[1],v=b(c.useState(!1),2),y=v[0],w=v[1],N=b(c.useState(!1),2),k=N[0],P=N[1];c.useEffect((function(){n.isAuthenticated?P(!0):P(!1),n.isAuthenticated&&(w(!0),fetch("".concat(t.basePath,"/collections/").concat(n.address)).then((function(e){return e.json()})).then((function(e){s(null===e||void 0===e?void 0:e.sort((function(e,t){var n,r;return(null===(n=t.stats)||void 0===n?void 0:n.averagePrice)-(null===(r=e.stats)||void 0===r?void 0:r.averagePrice)}))),w(!1)})).catch((function(e){console.error("collections fetch err",e),w(!1)})))}),[t,n]);var O=c.useRef();return O.current=m,c.useEffect((function(){t&&(null===n||void 0===n?void 0:n.isAuthenticated)&&(null===o||void 0===o?void 0:o.length)&&o.map((function(e){return r=i().mark((function r(){var a,o;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(t.basePath,"/assets/").concat(e.slug,"/").concat(n.address));case 3:return a=r.sent,r.next=6,a.json();case 6:return o=r.sent,r.next=9,g(1e3);case 9:O.current=_({},O.current,j({},e.slug,o)),h(O.current),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.error("assets/".concat(e.slug,"/").concat(n.address),r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})),function(){var e=this,t=arguments;return new Promise((function(n,a){var o=r.apply(e,t);function s(e){p(o,n,a,s,i,"next",e)}function i(e){p(o,n,a,s,i,"throw",e)}s(void 0)}))};var r})).reduce((function(e,t){return e.then((function(){return t()}))}),Promise.resolve())}),[t,n,o]),y?(0,r.jsx)("p",{children:"Loading..."}):k?(0,r.jsx)("div",{className:"flex flex-col",children:o.map((function(e){return(0,r.jsx)(x,{collection:e,assets:m[e.slug]},e.slug)}))}):(0,r.jsx)("p",{children:"Not connected..."})},w=n(214),N=n.n(w),k=function(){var e=(0,a.default)((function(){return Promise.all([n.e(482),n.e(714),n.e(860),n.e(750),n.e(509),n.e(553)]).then(n.bind(n,46949))}),{loadableGenerated:{webpack:function(){return[46949]}},ssr:!1});return(0,r.jsxs)("div",{className:N().container,children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Ninja NFT Wallet"})}),(0,r.jsxs)("main",{className:N().main,children:[(0,r.jsxs)("div",{className:"flex flex-col items-center mb-8",children:[(0,r.jsxs)("a",{className:"flex flex-col items-center border rounded border-slate-800 dark:border-slate-100 w-8/12",href:"https://github.com/ninjastacktech/opensea-net",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("h5",{children:"This is a demo for the OpenSea C# SDK developed by NinjaStack"}),(0,r.jsx)("span",{children:"https://github.com/ninjastacktech/opensea-net"})]}),(0,r.jsx)(e,{})]}),(0,r.jsx)(y,{})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);