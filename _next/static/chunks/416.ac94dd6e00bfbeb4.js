(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[416,342],{6949:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(5131),a=n(6518),s=n(7294),l=n(1150),o=n(7542);t.default=function(e){var t=s.useContext(l.V),n=t.authState,u=(t.authDispatch,(0,s.useState)(!1)),c=u[0],d=u[1];return n.isAuthenticated?(0,r.jsxs)("div",{children:["Welcome ",n.address]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,r.jsx)(o.default,{className:"w-40",size:"large"}),(0,r.jsx)("button",{onClick:function(){return d(!0)},className:"\n      bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg w-40 flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 font-medium rounded-lg text-base px-6 py-3.5 \n        ",children:"Enter Address"})]}),(0,r.jsx)(i.u,{appear:!0,show:c,as:s.Fragment,children:(0,r.jsx)(a.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return d(!1)},children:(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,r.jsx)(i.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(a.V.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(i.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[(0,r.jsx)(a.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Payment successful"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)("p",{className:"text-sm text-gray-500",children:"Your payment has been successfully submitted. We\u2019ve sent you an email with all of the details of your order."})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:function(){return d(!1)},children:"Got it, thanks!"})})]})})]})})})]})}},7542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),i=n(7294),a=n(3454),s={name:"Ether",symbol:"ETH",decimals:18},l={name:"Matic",symbol:"MATIC",decimals:18};function o(e){var t=u[e];return function(e){return!!e.nativeCurrency}(t)?{chainId:e,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:e}var u={1:{urls:[a.env.infuraKey?"https://mainnet.infura.io/v3/".concat(a.env.infuraKey):"",a.env.alchemyKey?"https://eth-mainnet.alchemyapi.io/v2/".concat(a.env.alchemyKey):"","https://cloudflare-eth.com"].filter((function(e){return!!e})),name:"Mainnet"},3:{urls:[a.env.infuraKey?"https://ropsten.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Ropsten"},4:{urls:[a.env.infuraKey?"https://rinkeby.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Rinkeby"},5:{urls:[a.env.infuraKey?"https://goerli.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"G\xf6rli"},42:{urls:[a.env.infuraKey?"https://kovan.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Kovan"},10:{urls:[a.env.infuraKey?"https://optimism-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://mainnet.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Ethereum",nativeCurrency:s,blockExplorerUrls:["https://optimistic.etherscan.io"]},69:{urls:[a.env.infuraKey?"https://optimism-kovan.infura.io/v3/".concat(a.env.infuraKey):"","https://kovan.optimism.io"].filter((function(e){return!!e})),name:"Optimistic Kovan",nativeCurrency:s,blockExplorerUrls:["https://kovan-optimistic.etherscan.io"]},42161:{urls:[a.env.infuraKey?"https://arbitrum-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://arb1.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum One",nativeCurrency:s,blockExplorerUrls:["https://arbiscan.io"]},421611:{urls:[a.env.infuraKey?"https://arbitrum-rinkeby.infura.io/v3/".concat(a.env.infuraKey):"","https://rinkeby.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum Testnet",nativeCurrency:s,blockExplorerUrls:["https://testnet.arbiscan.io"]},137:{urls:[a.env.infuraKey?"https://polygon-mainnet.infura.io/v3/".concat(a.env.infuraKey):"","https://polygon-rpc.com"].filter((function(e){return!!e})),name:"Polygon Mainnet",nativeCurrency:l,blockExplorerUrls:["https://polygonscan.com"]},80001:{urls:[a.env.infuraKey?"https://polygon-mumbai.infura.io/v3/".concat(a.env.infuraKey):""].filter((function(e){return!!e})),name:"Polygon Mumbai",nativeCurrency:l,blockExplorerUrls:["https://mumbai.polygonscan.com"]}},c=(Object.keys(u).reduce((function(e,t){var n=u[Number(t)].urls;return n.length&&(e[Number(t)]=n),e}),{}),n(3683)),d=n(7474);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,h,v=(m=(0,c.uv)((function(e){return new d.M(e)})),h=2,function(e){if(Array.isArray(e))return e}(m)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(o){l=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return a}}(m,h)||function(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(m,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=v[0],p=v[1],b=n(1150),g=(p.useChainId,p.useAccounts),x=p.useError,k=p.useIsActivating,j=p.useIsActive,N=(p.useProvider,p.useENSNames,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:"medium"},t=e.size,n=e.className,a=i.useContext(b.V),s=(a.authState,a.authDispatch),l=g(),u=x(),c=k(),d=j(),f=y.activate.bind(y,o(1));(0,i.useEffect)((function(){(null===l||void 0===l?void 0:l.length)>0&&l[0]&&s({type:"connect",payload:{address:l[0]}}),console.log("accounts loaded",l)}),[l,s]);var m="large"===t?"font-medium rounded-lg text-base px-6 py-3.5":"font-medium rounded-lg text-sm px-5 py-2.5";return u?(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{onClick:function(){return f()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(m),children:"Try Again?"})}):d?(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{onClick:function(){return y.deactivate()},className:"\n      bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 dark:hover:bg-slate-700 ".concat(m," \n        "),children:"Disconnect"})}):c?(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{disabled:!0,className:"bg-slate-300 text-slate-900 rounded-lg w-full flex items-center justify-center dark:bg-slate-700 dark:text-slate-400 dark:highlight-white/10 ".concat(m),children:"Connecting..."})}):(0,r.jsx)("div",{className:n,children:(0,r.jsx)("button",{onClick:function(){return f()},className:"bg-slate-900 hover:bg-slate-700 text-white rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ".concat(m),children:"Connect"})})})},6601:function(){}}]);