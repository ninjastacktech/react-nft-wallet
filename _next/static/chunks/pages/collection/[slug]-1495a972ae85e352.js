(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{1800:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection/[slug]",function(){return n(41745)}])},49340:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),o=(n(67294),function(e){var t,n=null!==(t=e.asset.name)&&void 0!==t?t:"#".concat(e.asset.tokenId);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{className:"bg-slate-100 dark:bg-slate-800 w-60 h-80 rounded-lg shadow-lg flex flex-col m-2 transform transition duration-500 hover:scale-110",href:e.asset.permalink,target:"_blank",rel:"noreferrer",children:[e.asset.animationUrl&&(0,r.jsx)("video",{className:"rounded-t-lg max-h-60",controlsList:"nodownload",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,poster:e.asset.imageUrl,preload:"metadata",children:(0,r.jsx)("source",{src:e.asset.animationUrl,type:"video/mp4"})}),!e.asset.animationUrl&&e.asset.imageUrl&&(0,r.jsx)("img",{className:"rounded-t-lg max-h-60",src:e.asset.imageUrl,alt:""}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsx)("h2",{className:"font-bold mb-2 text-m text-slate-900 dark:text-white",children:n})})]})})}),a=n(11163),s=function(e){var t,n,o,s=(0,a.useRouter)();return(0,r.jsxs)("div",{className:"flex flex-row my-8 mx-2 items-center",children:[e.showBackBtn&&(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 transform transition duration-500 hover:scale-125 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:function(){return s.back()},children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})}),(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)("h2",{className:"text-slate-900 text-xl font-semibold dark:text-white mx-4",children:null===(t=e.item)||void 0===t?void 0:t.name}),(null===(n=e.item)||void 0===n?void 0:n.imageUrl)&&(0,r.jsx)("img",{src:null===(o=e.item)||void 0===o?void 0:o.imageUrl,alt:"",className:"w-14 h-14 rounded-full mr-4"})]})]})},l=function(e){var t;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{item:e.collection,showBackBtn:e.showBackBtn}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:null===(t=e.assets)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(o,{asset:e},e.tokenId)}))})]})}},28013:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e,t){var n=(0,r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),o=n[0],a=n[1];return[o,function(t){try{var n=(r=t,(null!=(s=Function)&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](r):r instanceof s)?t(o):t);a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(l){console.log(l)}var r,s}]}},41745:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(15659),a=n(9008),s=n(11163),l=n(67294),i=n(4811),c=n(49340),u=n(81150),d=n(28013),f=n(214),m=n.n(f);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(i){l=!0,o=i}finally{try{s||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,s.useRouter)().query.slug,t=(0,o.useInjection)(i.J),n=l.useContext(u.V).authState,f=x(l.useState(!1),2),h=f[0],v=f[1],_=x(l.useState(null),2),g=_[0],p=_[1],w=x(l.useState([]),2),j=w[0],y=w[1],b=x((0,d.Z)("activeCollection",null),2),k=b[0],N=b[1];return console.log("1",k),l.useEffect((function(){return function(){console.log("clearing storage"),N(null)}}),[]),l.useEffect((function(){n.isAuthenticated&&e&&!k&&fetch("".concat(t.basePath,"/collections/").concat(n.address)).then((function(e){return e.json()})).then((function(t){var n=t.find((function(t){return t.slug===e}));p(n)})).catch((function(e){console.error("collections fetch err",e)}))}),[t,n,e,k]),l.useEffect((function(){n.isAuthenticated&&e&&(v(!0),fetch("".concat(t.basePath,"/assets/").concat(e,"/").concat(n.address)).then((function(e){return e.json()})).then((function(e){y(null===e||void 0===e?void 0:e.sort((function(e,t){return e.name.localeCompare(t.name)}))),v(!1)})).catch((function(e){console.error("collections fetch err",e),v(!1)})))}),[t,n,e]),h?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsxs)("div",{className:m().container,children:[(0,r.jsx)(a.default,{children:(0,r.jsxs)("title",{children:["Ninja NFT Wallet: Collection ",e]})}),(0,r.jsx)("main",{className:m().main,children:(0,r.jsx)(c.Z,{collection:null!==k&&void 0!==k?k:g,assets:j,showBackBtn:!0})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[774,888,179],(function(){return t=1800,e(e.s=t);var t}));var t=e.O();_N_E=t}]);