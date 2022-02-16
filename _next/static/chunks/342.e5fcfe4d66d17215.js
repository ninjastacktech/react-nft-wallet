(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{77542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),i=n(67294),a=n(34155),o={name:"Ether",symbol:"ETH",decimals:18},u={name:"Matic",symbol:"MATIC",decimals:18};function l(e){var t=c[e];return function(e){return!!e.nativeCurrency}(t)?{chainId:e,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:e}var c={1:{urls:[a.env.infuraKey?"https://mainnet.infura.io/v3/".concat(a.env.infuraKey):"",a.env.alchemyKey?"https://eth-mainnet.alchemyapi.io/v2/".concat(a.env.alchemyKey):"","https://cloudflare-eth.com"].filter((function(e){return!!e})),name:"Mainnet"},3:{urls:[a.env.infuraKey?"https://ropsten.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Ropsten"},4:{urls:[a.env.infuraKey?"https://rinkeby.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Rinkeby"},5:{urls:[a.env.infuraKey?"https://goerli.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"G\xf6rli"},42:{urls:[a.env.infuraKey?"https://kovan.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Kovan"},10:{urls:[a.env.infuraKey?"https://optimism-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://mainnet.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Ethereum",nativeCurrency:o,blockExplorerUrls:["https://optimistic.etherscan.io"]},69:{urls:[a.env.infuraKey?"https://optimism-kovan.infura.io/v3/".concat(a.env.infuraKey):"","https://kovan.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Kovan",nativeCurrency:o,blockExplorerUrls:["https://kovan-optimistic.etherscan.io"]},42161:{urls:[a.env.infuraKey?"https://arbitrum-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://arb1.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum One",nativeCurrency:o,blockExplorerUrls:["https://arbiscan.io"]},421611:{urls:[a.env.infuraKey?"https://arbitrum-rinkeby.infura.io/v3/".concat(a.env.infuraKey):"","https://rinkeby.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum Testnet",nativeCurrency:o,blockExplorerUrls:["https://testnet.arbiscan.io"]},137:{urls:[a.env.infuraKey?"https://polygon-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://polygon-rpc.com"].filter((function(e){return!!e})),name:"Polygon Mainnet",nativeCurrency:u,blockExplorerUrls:["https://polygonscan.com"]},80001:{urls:[a.env.infuraKey?"https://polygon-mumbai.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Polygon Mumbai",nativeCurrency:u,blockExplorerUrls:["https://mumbai.polygonscan.com"]}},s=(Object.keys(c).reduce((function(e,t){var n=c[Number(t)].urls;return n.length&&(e[Number(t)]=n),e}),{}),n(63683)),f=n(67474);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d,h,v=(d=(0,s.uv)((function(e){return new f.M(e)})),h=2,function(e){if(Array.isArray(e))return e}(d)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(l){u=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}}(d,h)||function(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(d,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=v[0],p=v[1],b=n(81150),g=(p.useChainId,p.useAccounts),k=p.useError,x=p.useIsActivating,K=p.useIsActive,w=p.useProvider,C=p.useENSNames,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:"medium"},t=e.size,n=e.className,a=i.useContext(b.V),o=a.authState,u=a.authDispatch,c=g(),s=k(),f=x(),m=(K(),w()),d=C(m),h=y.activate.bind(y,l(1)),v=function(){y.deactivate(),u({type:"disconnect"})};(0,i.useEffect)((function(){(null===c||void 0===c?void 0:c.length)>0&&c[0]&&u({type:"connect",payload:{address:c[0],ensName:null===d||void 0===d?void 0:d.at(0)}}),console.log("accounts loaded",c)}),[c,d,u]);var p,N="large"===t?"font-medium rounded-lg text-base px-6 py-3.5":"font-medium rounded-lg text-sm px-5 py-2.5";return s?(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{onClick:function(){return h()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(N),children:"Try Again?"})}):o.isAuthenticated?(0,r.jsxs)("div",{className:n+" flex flex-row",children:[(0,r.jsx)("button",{onClick:function(){return v()},className:"\n      bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 mr-2 ".concat(N," \n        "),children:"Disconnect"}),(0,r.jsx)("div",{className:"\n          bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400 border-4 radius border-slate-100 dark:border-slate-800 rounded-lg w-full flex items-center justify-center ".concat(N," \n        "),children:null!==(p=o.ensName)&&void 0!==p?p:"".concat(o.address.slice(0,4),"...").concat(o.address.slice(-4))})]}):f?(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{disabled:!0,className:"bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-700 dark:text-slate-400 dark:highlight-white/10 ".concat(N),children:"Connecting..."})}):(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{onClick:function(){return h()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(N),children:"Connect"})})}},46601:function(){}}]);