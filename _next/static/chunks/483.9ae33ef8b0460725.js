(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{8256:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var r=t(4051),s=t.n(r),o=t(5893),a=t(2832),c=t(7294),i=t(8447),u=t(6486);function l(n,e,t,r,s,o,a){try{var c=n[o](a),i=c.value}catch(u){return void t(u)}c.done?e(i):Promise.resolve(i).then(r,s)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,s){var o=n.apply(e,t);function a(n){l(o,r,s,a,c,"next",n)}function c(n){l(o,r,s,a,c,"throw",n)}a(void 0)}))}}function f(){var n=(0,c.useState)(null),e=n[0],t=n[1],r=(0,c.useState)(""),l=r[0],f=r[1],v=(0,c.useState)(""),h=v[0],p=v[1],x=(0,c.useState)(""),w=x[0],k=x[1],g=(0,c.useCallback)(d(s().mark((function n(){var t,r,o,a,c,l,d;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",[]);case 2:return t=(0,u.random)(100,900)/1e4,r=(0,u.random)(100,900)/1e4,o=i.transactions.transfer(i.utils.format.parseNearAmount(t+"")),a=i.transactions.transfer(i.utils.format.parseNearAmount(r+"")),n.next=8,e.createTransaction({receiverId:"bitcoinzhuo.testnet",actions:[o,a],nonceOffset:1});case 8:return c=n.sent,n.next=11,e.createTransaction({receiverId:"evmzyz.testnet",actions:[a],nonceOffset:2});case 11:return l=n.sent,d=[c,l],n.abrupt("return",d);case 14:case"end":return n.stop()}}),n)}))),[e]),m=(0,c.useCallback)((function(n){var e,t,r,s,o=(null===n||void 0===n||null===(e=n.accounts)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.accountId)||"",a=(null===n||void 0===n||null===(r=n.accounts)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.publicKey)||"";console.log("onAccountsChanged >>>",o,a),f(o),p(a)}),[]),_=(0,c.useCallback)((function(n){console.log("onNetworkChanged >>>",n),k(n.networkId)}),[]),C=(0,c.useMemo)((function(){return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",headers:{},keyStore:new i.keyStores.BrowserLocalStorageKeyStore}}),[]);return(0,c.useEffect)((function(){var n=new a.qG({transactionCreator:void 0});return n.on("accountsChanged",m),n.on("networkChanged",_),window.provider=n,d(s().mark((function e(){var r,o,a,c,i,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.detectWalletInstalled();case 2:if(!e.sent){e.next=15;break}return t(n),e.next=8,n.request({method:"near_accounts"});case 8:return i=e.sent,f((null===i||void 0===i||null===(r=i.accounts)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.accountId)||""),p((null===i||void 0===i||null===(a=i.accounts)||void 0===a||null===(c=a[0])||void 0===c?void 0:c.publicKey)||""),e.next=13,n.request({method:"near_networkInfo"});case 13:u=e.sent,k((null===u||void 0===u?void 0:u.networkId)||"");case 15:case"end":return e.stop()}}),e)})))(),function(){n.off("accountsChanged",m),n.off("networkChanged",_)}}),[C,m,_]),(0,o.jsxs)("div",{children:[!e&&(0,o.jsx)("a",{href:"https://onekey.so/plugin",children:"Install OneKey Extension \u2192"}),e&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:["accountId: ",(0,o.jsx)("strong",{children:l})]}),(0,o.jsxs)("div",{children:["publicKey: ",(0,o.jsx)("strong",{children:h})]}),(0,o.jsxs)("div",{children:["localNetworkId: ",(0,o.jsx)("strong",{children:e._networkId})," ",(0,o.jsx)("button",{children:"switch TODO"})]}),(0,o.jsxs)("div",{children:["walletNetworkId: ",(0,o.jsx)("strong",{children:w})]}),(0,o.jsxs)("div",{children:["providerVersion: ",(0,o.jsxs)("strong",{children:["v",e.version]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.request({method:"near_requestAccounts"});case 2:t=n.sent,console.log("near_requestAccounts",t,t.accounts);case 4:case"end":return n.stop()}}),n)}))),children:"near_requestAccounts"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.requestSignIn();case 2:t=n.sent,console.log("requestSignIn",t,t.accounts);case 4:case"end":return n.stop()}}),n)}))),children:"requestSignIn"}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:function(){return null===e||void 0===e?void 0:e.request({method:"near_signOut"})},children:"near_signOut"}),(0,o.jsx)("button",{onClick:function(){return null===e||void 0===e?void 0:e.signOut()},children:"signOut"}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.request({method:"near_accounts",params:[]});case 2:t=n.sent,console.log("near_accounts",t,t.accounts);case 4:case"end":return n.stop()}}),n)}))),children:"near_accounts"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.request({method:"near_networkInfo",params:[]});case 2:t=n.sent,console.log("near_networkInfo",t,t.networkId);case 4:case"end":return n.stop()}}),n)}))),children:"near_networkInfo"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.request({method:"near_accountNonce",params:[]});case 2:t=n.sent,console.log("near_accountNonce",t);case 4:case"end":return n.stop()}}),n)}))),children:"near_accountNonce"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===e||void 0===e?void 0:e.request({method:"near_blockInfo",params:[]});case 2:t=n.sent,console.log("near_blockInfo",t);case 4:case"end":return n.stop()}}),n)}))),children:"near_blockInfo"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return t=n.sent,n.next=5,e.request({method:"near_sendTransactions",params:{transactions:t}});case 5:r=n.sent,console.log("near_sendTransactions",r,r.transactionHashes);case 7:case"end":return n.stop()}}),n)}))),children:"near_sendTransactions"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return t=n.sent,n.next=5,e.requestSignTransactions({transactions:t});case 5:r=n.sent,console.log("requestSignTransactions",r,r.transactionHashes);case 7:case"end":return n.stop()}}),n)}))),children:"requestSignTransactions"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return t=n.sent,n.next=5,e.request({method:"near_signTransactions",params:{transactions:t}});case 5:r=n.sent,console.log("near_signTransactions",r,r.signatures);case 7:case"end":return n.stop()}}),n)}))),children:"near_signTransactions"}),(0,o.jsx)("button",{children:"TODO Send USDT Token (mainnet only)"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t,r,o,a,c,l,d;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,u.random)(100,900)/1e4,r=(0,u.random)(100,900)/1e4,o=i.utils.format.parseNearAmount(t.toString()),a=i.transactions.transfer(o),c=i.transactions.transfer(i.utils.format.parseNearAmount(r.toString())),l=e.account(),n.next=8,l.signAndSendTransaction({receiverId:"evmzyz.testnet",actions:[a,c]});case 8:d=n.sent,console.log("signAndSendTransaction",d,d.status);case 10:case"end":return n.stop()}}),n)}))),children:"signAndSendTransaction (legacy)"}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request({method:"near_signMessages",params:{messages:["hello world","onekey near wallet"]}});case 2:t=n.sent,console.log("near_signMessages",t,t.signatures);case 4:case"end":return n.stop()}}),n)}))),children:"near_signMessages"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.requestSignMessages({messages:["hello world","onekey near wallet"]});case 2:t=n.sent,console.log("requestSignMessages",t,t.signatures);case 4:case"end":return n.stop()}}),n)}))),children:"requestSignMessages"}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request({method:"query",params:{request_type:"view_access_key_list",account_id:"c3be856133196da252d0f1083614cdc87a85c8aa8abeaf87daff1520355eec53",finality:"optimistic"}});case 2:t=n.sent,console.log("RPC Call: view_access_key_list",t);case 4:case"end":return n.stop()}}),n)}))),children:"RPC Call: view_access_key_list"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request({method:"gas_price",params:[null]});case 2:t=n.sent,console.log("RPC Call: gas_price",t);case 4:case"end":return n.stop()}}),n)}))),children:"RPC Call: gas_price"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request({method:"status",params:[]});case 2:t=n.sent,console.log("RPC Call: status",t);case 4:case"end":return n.stop()}}),n)}))),children:"RPC Call: status"}),(0,o.jsx)("button",{onClick:d(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request({method:"network_info",params:[]});case 2:t=n.sent,console.log("RPC Call: network_info",t);case 4:case"end":return n.stop()}}),n)}))),children:"RPC Call: network_info"})]})]})]})}window.nearAPI=i,window.OneKeyNearProvider=a.qG},6601:function(){},5024:function(){}}]);
//# sourceMappingURL=483.9ae33ef8b0460725.js.map