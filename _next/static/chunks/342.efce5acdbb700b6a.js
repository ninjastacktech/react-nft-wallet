(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{77542:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(85893),i=t(67294),a=t(34155),o={name:"Ether",symbol:"ETH",decimals:18},u={name:"Matic",symbol:"MATIC",decimals:18};function c(e){var n=l[e];return function(e){return!!e.nativeCurrency}(n)?{chainId:e,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:n.urls,blockExplorerUrls:n.blockExplorerUrls}:e}var l={1:{urls:[a.env.infuraKey?"https://mainnet.infura.io/v3/".concat(a.env.infuraKey):"",a.env.alchemyKey?"https://eth-mainnet.alchemyapi.io/v2/".concat(a.env.alchemyKey):"","https://cloudflare-eth.com"].filter((function(e){return!!e})),name:"Mainnet"},3:{urls:[a.env.infuraKey?"https://ropsten.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Ropsten"},4:{urls:[a.env.infuraKey?"https://rinkeby.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Rinkeby"},5:{urls:[a.env.infuraKey?"https://goerli.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"G\xf6rli"},42:{urls:[a.env.infuraKey?"https://kovan.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Kovan"},10:{urls:[a.env.infuraKey?"https://optimism-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://mainnet.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Ethereum",nativeCurrency:o,blockExplorerUrls:["https://optimistic.etherscan.io"]},69:{urls:[a.env.infuraKey?"https://optimism-kovan.infura.io/v3/".concat(a.env.infuraKey):"","https://kovan.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Kovan",nativeCurrency:o,blockExplorerUrls:["https://kovan-optimistic.etherscan.io"]},42161:{urls:[a.env.infuraKey?"https://arbitrum-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://arb1.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum One",nativeCurrency:o,blockExplorerUrls:["https://arbiscan.io"]},421611:{urls:[a.env.infuraKey?"https://arbitrum-rinkeby.infura.io/v3/".concat(a.env.infuraKey):"","https://rinkeby.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum Testnet",nativeCurrency:o,blockExplorerUrls:["https://testnet.arbiscan.io"]},137:{urls:[a.env.infuraKey?"https://polygon-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://polygon-rpc.com"].filter((function(e){return!!e})),name:"Polygon Mainnet",nativeCurrency:u,blockExplorerUrls:["https://polygonscan.com"]},80001:{urls:[a.env.infuraKey?"https://polygon-mumbai.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Polygon Mumbai",nativeCurrency:u,blockExplorerUrls:["https://mumbai.polygonscan.com"]}},s=(Object.keys(l).reduce((function(e,n){var t=l[Number(n)].urls;return t.length&&(e[Number(n)]=t),e}),{}),t(63683)),f=t(67474);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var h,v,y=(h=(0,s.uv)((function(e){return new f.M(e)})),v=2,function(e){if(Array.isArray(e))return e}(h)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(h,v)||function(e,n){if(e){if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,n):void 0}}(h,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=y[0],d=y[1],b=t(81150),g=(d.useChainId,d.useAccounts),k=d.useError,x=d.useIsActivating,K=d.useIsActive,C=(d.useProvider,d.useENSNames,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:"medium"},n=e.size,t=e.className,a=i.useContext(b.V),o=(a.authState,a.authDispatch),u=g(),l=k(),s=x(),f=K(),m=p.activate.bind(p,c(1));(0,i.useEffect)((function(){(null===u||void 0===u?void 0:u.length)>0&&u[0]&&o({type:"connect",payload:{address:u[0]}}),console.log("accounts loaded",u)}),[u,o]);var h="large"===n?"font-medium rounded-lg text-base px-6 py-3.5":"font-medium rounded-lg text-sm px-5 py-2.5";return l?(0,r.jsx)("div",{className:t,children:(0,r.jsx)("button",{onClick:function(){return m()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(h),children:"Try Again?"})}):f?(0,r.jsx)("div",{className:t,children:(0,r.jsx)("button",{onClick:function(){return p.deactivate()},className:"\n      bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 ".concat(h," \n        "),children:"Disconnect"})}):s?(0,r.jsx)("div",{className:t,children:(0,r.jsx)("button",{disabled:!0,className:"bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-700 dark:text-slate-400 dark:highlight-white/10 ".concat(h),children:"Connecting..."})}):(0,r.jsx)("div",{className:t,children:(0,r.jsx)("button",{onClick:function(){return m()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(h),children:"Connect"})})})},46601:function(){}}]);