(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(69216)}])},49340:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893),a=(n(67294),function(e){var t,n=null!==(t=e.asset.name)&&void 0!==t?t:"#".concat(e.asset.tokenId);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{className:"bg-slate-100 dark:bg-slate-800 w-60 h-80 rounded-lg shadow-lg flex flex-col m-2 transform transition duration-500 hover:scale-110",href:e.asset.permalink,target:"_blank",rel:"noreferrer",children:[e.asset.animationUrl&&(0,r.jsx)("video",{className:"rounded-t-lg max-h-60",controlsList:"nodownload",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,poster:e.asset.imageUrl,preload:"metadata",children:(0,r.jsx)("source",{src:e.asset.animationUrl,type:"video/mp4"})}),!e.asset.animationUrl&&e.asset.imageUrl&&(0,r.jsx)("img",{className:"rounded-t-lg max-h-60",src:e.asset.imageUrl,alt:""}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsx)("h2",{className:"font-bold mb-2 text-m text-slate-900 dark:text-white",children:n})})]})})}),l=n(11163),s=function(e){var t,n,a,s=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"flex flex-row my-8 justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(null===(t=e.item)||void 0===t?void 0:t.imageUrl)&&(0,r.jsx)("img",{src:null===(n=e.item)||void 0===n?void 0:n.imageUrl,alt:"",className:"w-14 h-14 rounded-full mr-4"}),(0,r.jsx)("h2",{className:"text-slate-900 text-xl font-semibold dark:text-white",children:null===(a=e.item)||void 0===a?void 0:a.name})]}),(0,r.jsx)("button",{onClick:function(){return s.back()},className:"bg-slate-900 hover:bg-slate-700 text-white w-30 h-10 flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 font-medium rounded-lg text-base px-6 py-3.5",children:"Back"})]})},o=function(e){var t;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{item:e.collection,showBackBtn:e.showBackBtn}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:null===(t=e.assets)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(a,{asset:e},e.tokenId)}))})]})}},28013:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e,t){var n=(0,r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),a=n[0],l=n[1];return[a,function(t){try{var n=(r=t,(null!=(s=Function)&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](r):r instanceof s)?t(a):t);l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(o){console.log(o)}var r,s}]}},69216:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(85893),a=n(5152),l=n(9008),s=n(80442),o=n(35131),i=n(19670),c=n(15659),u=n(67294),d=n(4811),f=n(81150),m=n(34051),h=n.n(m),x=n(49340),g=n(11163),v=n(28013);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t,n=e.collection,a=e.assets,l=b(u.useState(-1),2),s=l[0],o=l[1],i=b((0,v.Z)("activeCollection",!1),2),c=(i[0],i[1]),d=(0,g.useRouter)(),f="/collection/".concat(encodeURIComponent(n.slug));u.useEffect((function(){var e=function(){a&&(o(Math.floor(Math.random()*a.length)),setTimeout(e,5e3))};e()}),[a]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:f,onClick:function(e){e.preventDefault(),c(n),d.push(f)},children:(0,r.jsxs)("div",{className:"flex flex-col justify-between bg-slate-100 dark:bg-slate-800 w-60 shadow-lg rounded m-4 transform transition duration-500 hover:scale-110",children:[(0,r.jsxs)("div",{className:"group relative flex justify-center min-h-[2rem]",children:[(null===a||void 0===a?void 0:a.length)>0&&s>-1?(0,r.jsx)("img",{alt:"",className:"block w-full rounded",src:null===(t=a[s])||void 0===t?void 0:t.imagePreviewUrl}):n.bannerImageUrl?(0,r.jsx)("img",{alt:"",className:"block w-full rounded",src:n.bannerImageUrl}):(0,r.jsx)("img",{alt:"",className:"block h-full rounded",src:n.imageUrl}),(0,r.jsxs)("div",{className:"absolute rounded bg-gradient-to-t from-slate-800/50 w-full h-full top-0 flex group-hover:opacity-100 duration-700 transition justify-between items-end",children:[n.imageUrl&&(0,r.jsx)("img",{src:n.imageUrl,alt:"",className:"w-14 h-14 rounded-full mr-4"}),(null===a||void 0===a?void 0:a.length)&&(0,r.jsxs)("div",{className:"flex tools text-white text-sm font-semibold",children:[(0,r.jsx)("p",{className:"flex justify-center items-center",children:(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"12px",width:"12px",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z"})]})})}),(0,r.jsx)("p",{className:"animate-pulse px-2 text-lg",children:null===a||void 0===a?void 0:a.length})]})]})]}),(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)("h3",{className:"py-1 text-base justify-center",children:n.name}),+n.stats.floorPrice>0&&(0,r.jsx)("p",{className:"text-gray-400 text-sm",children:n.stats.floorPrice}),null==a&&(0,r.jsx)("p",{className:"text-gray-400 text-sm animate-pulse",children:"Loading assets..."})]})]})})})};function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t,n,r,a,l,s){try{var o=e[l](s),i=o.value}catch(c){return void n(c)}o.done?t(i):Promise.resolve(i).then(r,a)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return new Promise((function(t){return setTimeout(t,e)}))}var C=function(e){var t=(0,c.useInjection)(d.J),n=u.useContext(f.V).authState,a=u.useContext(I).layout,l=e.collections,s=_(u.useState({}),2),o=s[0],i=s[1],m=_(u.useState(!1),2),g=m[0],v=(m[1],u.useRef());return v.current=o,u.useEffect((function(){if(t&&(null===n||void 0===n?void 0:n.isAuthenticated)&&(null===l||void 0===l?void 0:l.length)){var e=new AbortController,r=e.signal,a=!0;return l.map((function(e){return l=h().mark((function l(){var s,o;return h().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,fetch("".concat(t.basePath,"/assets/").concat(e.slug,"/").concat(n.address),{signal:r});case 3:return s=l.sent,l.next=6,s.json();case 6:return o=l.sent,l.next=9,S(1e3);case 9:if(a){l.next=11;break}return l.abrupt("return");case 11:v.current=k({},v.current,N({},e.slug,o)),i(v.current),l.next=18;break;case 15:l.prev=15,l.t0=l.catch(0),"AbortError"===l.t0.name?console.log("Canceled chain of collections fetch"):console.error("assets/".concat(e.slug,"/").concat(n.address),l.t0);case 18:case"end":return l.stop()}}),l,null,[[0,15]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=l.apply(e,t);function s(e){w(a,n,r,s,o,"next",e)}function o(e){w(a,n,r,s,o,"throw",e)}s(void 0)}))};var l})).reduce((function(e,t){return e.then((function(){return t()}))}),Promise.resolve()),function(){e.abort(),a=!1}}}),[t,n,l]),g?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsx)("div",{className:"flex ".concat("eager"===a?"flex-col":"flex-row flex-wrap"),children:l.map((function(e){return"eager"===a?(0,r.jsx)(x.Z,{collection:e,assets:o[e.slug]},e.slug):(0,r.jsx)(y,{collection:e,assets:o[e.slug]},e.slug)}))})};function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=u.createContext({layout:"tilesOnly"}),P=function(e){var t=(0,c.useInjection)(d.J),n=u.useContext(f.V).authState,a=A(u.useState(!1),2),l=a[0],m=a[1],h=A(u.useState([]),2),x=h[0],g=h[1],v=A(u.useState(!1),2),p=v[0],b=v[1],y=A(u.useState(!1),2),j=y[0],w=y[1],N=A(u.useState("eager"),2),k=N[0],_=N[1],S=A(u.useState(!1),2),O=S[0],P=S[1];if(u.useEffect((function(){n.isAuthenticated?w(!0):w(!1),n.isAuthenticated&&(b(!0),fetch("".concat(t.basePath,"/collections/").concat(n.address)).then((function(e){return e.json()})).then((function(e){g(null===e||void 0===e?void 0:e.sort((function(e,t){return e.name.localeCompare(t.name)}))),b(!1)})).catch((function(e){console.error("collections fetch err",e),b(!1)})))}),[t,n]),u.useEffect((function(){x.length>3?_("tilesOnly"):_("eager")}),[x]),u.useEffect((function(){m("eager"===k)}),[k]),p)return(0,r.jsx)("p",{children:"Loading..."});if(!j)return(0,r.jsx)("p",{children:"Not connected..."});var U=function(e){P(!1),e&&_("eager")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between m-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:"Collections"}),(0,r.jsx)(s.r.Group,{children:(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)(s.r.Label,{passive:!0,children:"Show all assets"}),(0,r.jsx)(s.r,{checked:l,onChange:function(e){!function(e){e?P(!0):_("tilesOnly")}(e)},className:"".concat(l?"bg-blue-600":"bg-gray-200 dark:bg-slate-400"," ml-2 relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:(0,r.jsx)("span",{className:"".concat(l?"translate-x-6":"translate-x-1"," inline-block w-4 h-4 transform bg-white rounded-full transition-transform")})})]})})]}),(0,r.jsx)(I.Provider,{value:{layout:k},children:(0,r.jsx)(C,{collections:x})}),(0,r.jsx)(o.u,{appear:!0,show:O,as:u.Fragment,children:(0,r.jsx)(i.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return U(!1)},children:(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,r.jsx)(o.u.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(i.V.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(o.u.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-slate-800",children:[(0,r.jsx)(i.V.Title,{as:"h3",className:"text-lg font-medium leading-6",children:"Warning"}),(0,r.jsx)("div",{className:"mt-2 mb-5",children:(0,r.jsx)("p",{className:"text-sm",children:"Displaying a large number of assets may cause the page to become less responsive"})}),(0,r.jsxs)("div",{className:"flex flex-row mt-4",children:[(0,r.jsx)("button",{onClick:function(){return U(!0)},className:"bg-slate-900 hover:bg-slate-700 mr-2 text-white w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 font-medium rounded-lg text-base px-6 py-3.5",children:"Proceed"}),(0,r.jsx)("button",{onClick:function(){return U(!1)},className:"bg-slate-100 hover:bg-slate-300 ml-2 text-slate-900 w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 font-medium rounded-lg text-base px-6 py-3.5",children:"Cancel"})]})]})})]})})})]})},U=n(214),E=n.n(U),T=function(){var e=(0,a.default)((function(){return Promise.all([n.e(482),n.e(714),n.e(860),n.e(750),n.e(389),n.e(553)]).then(n.bind(n,46949))}),{loadableGenerated:{webpack:function(){return[46949]}},ssr:!1});return(0,r.jsxs)("div",{className:E().container,children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"Ninja NFT Wallet"})}),(0,r.jsxs)("main",{className:E().main,children:[(0,r.jsxs)("div",{className:"flex flex-col items-center mb-8",children:[(0,r.jsxs)("a",{className:"flex flex-col items-center border rounded border-slate-800 dark:border-slate-100 w-8/12",href:"https://github.com/ninjastacktech/opensea-net",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("h5",{children:"This is a demo for the OpenSea C# SDK developed by NinjaStack"}),(0,r.jsx)("span",{children:"https://github.com/ninjastacktech/opensea-net"})]}),(0,r.jsx)(e,{})]}),(0,r.jsx)(P,{})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(e){e.O(0,[627,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);