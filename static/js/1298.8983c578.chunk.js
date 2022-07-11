"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[1298],{8848:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4165),o=n(5861),a="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function i(e){for(var t=0,n=(e=JSON.stringify(e).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return encodeURI(a+e.join(""))}function s(e){if(null===e)return console.error("DB Error: object is not present in DB."),!1;if(0!==(e=decodeURI(e)).indexOf(a))throw new Error("object cannot be decrypted");for(var t=0,n=(e=e.substring(a.length).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return JSON.parse(e.join(""))}var l={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},c={model:l,get:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],t=l[t]?l[t]:t,null!==(o=localStorage.getItem(t))){e.next=5;break}return e.abrupt("return",null);case 5:return n&&(o=s(o)),e.prev=6,e.abrupt("return",JSON.parse(o));case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e,null,[[6,10]])})));return function(t){return e.apply(this,arguments)}}(),set:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,a,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>2&&void 0!==s[2]&&s[2],t=l[t]?l[t]:t,o&&(n=i(n)),e.next=5,localStorage.setItem(t,n);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),clear:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("lastEmail"),n=localStorage.getItem("lastMobile"),e.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",t),localStorage.setItem("lastMobile",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u=c},1075:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(1413),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===e.length)return 0;if(1===e.length)return e[0].NAV;var n=function(){t&&(100%e.length===0?e=e.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{allocation:(100/e.length).toFixed(0)})})):(e=e.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{allocation:((100-100%e.length)/e.length).toFixed(0)})})))[0].allocation=Number(e[0].allocation)+100%e.length);for(var n=e.map((function(e){return e.allocation})),o=e.map((function(e){return 1})),a=0,i=function(){a++;var t=e.reduce((function(e,t,n){return e+t.NAV*o[n]}),0),r=e.map((function(e,n){return e.NAV*o[n]*100/t})).map((function(e,t){return n[t]-e})),i=Math.max.apply(Math,r);if(Math.min.apply(Math,r)>-2&&i<2)return{v:{v:t}};var s=r.indexOf(i);o[s]++};a<1e4;){var s=i();if("object"===typeof s)return s.v}}();return"object"===typeof n?n.v:void 0}},2102:function(e,t,n){n(2791);var r=n(8820),o=n(9126),a=n(3853),i=n(8617),s=n(7811),l=n(184);t.Z=function(e){var t=e.header,n=e.navigation,c=e.screenType,u=e.backAction,d=void 0===u?function(){n.goBack()}:u,f=e.right,p=e.rightAction,h=void 0===p?function(){}:p,m=e.isWatchlisted,x=void 0!==m&&m,g=e.onWatchlistIconClick,v=void 0===g?function(){}:g,y=e.onShareIconClick,b=void 0===y?function(){}:y,j=e.onHeaderClick,k=void 0===j?function(){}:j;return(0,l.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==c&&(0,l.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,l.jsx)(a.Ao2,{color:s.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return d()}})}),(0,l.jsx)("div",{style:{flex:1},children:(0,l.jsx)("span",{className:"screenTitle",onClick:function(){return k()},children:t})}),(0,l.jsx)("div",{style:{display:"flex"},children:function(){switch(f){case"bookmark-share":return(0,l.jsxs)("span",{children:[x?(0,l.jsx)(o.vw0,{className:"secondaryGreen",size:24,onClick:v}):(0,l.jsx)(o.flH,{className:"secondaryGreen",size:24,onClick:v}),(0,l.jsx)(i.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:b})]});case"tip":return(0,l.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return h()},children:["Tip ",(0,l.jsx)(r.cuw,{size:10})]});default:return f?(0,l.jsx)("span",{className:"greenChipHeader",onClick:function(){h()},children:f}):(0,l.jsx)(l.Fragment,{})}}()})]})}},1298:function(e,t,n){n.r(t);var r=n(1413),o=n(4165),a=n(5861),i=n(9439),s=n(2791),l=n(6960),c=n(2102),u=n(7811),d=n(8848),f=n(9126),p=n(6825),h=n(1075),m=n(8820),x=n(6355),g=n(184);t.default=function(e){var t=s.useState([]),n=(0,i.Z)(t,2),v=n[0],y=n[1],b=s.useState(!1),j=(0,i.Z)(b,2),k=j[0],Z=j[1],N=s.useState(!1),w=(0,i.Z)(N,2),C=w[0],T=w[1],S=s.useState(),F=(0,i.Z)(S,2),E=F[0],O=F[1];s.useEffect((0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:case"end":return e.stop()}}),e)}))),[]),s.useEffect((function(){M(v),console.log(v)}),[v]);var P=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get(d.Z.model.createMintbox).then((function(e){null!==e&&void 0!==e&&e.selectedETFs&&(console.log("SelectedETFS",e.selectedETFs),y(e.selectedETFs))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),l.Am.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={selectedETFs:t},e.next=3,d.Z.get(d.Z.model.createMintbox).then(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t?Object.assign(t,n):t=n,e.next=3,d.Z.set(d.Z.model.createMintbox,JSON.stringify(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=v.length;return v.some((function(t,n){if(0===n){if(t.allocation!==Math.floor(100/e)+100%e)return!0}else if(t.allocation!==Math.floor(100/e))return!0}))},D=function(e){console.log("equalize");var t=e.filter((function(e){return!e.isLocked})).length;if(console.log("unlockedEtfCount",t),0!==t){var n=e.reduce((function(e,t){return t.isLocked?e+t.allocation:e}),0);console.log("lockedWeight",n);var o=100-n;if(o<t)l.Am.error("Unlock some ETFs to readjust weights");else{var a=e.findIndex((function(e){return!e.isLocked}));console.log("unlockedETFsCount:",t),console.log("remainingWeight:",o);var i=e.map((function(e,n){return e.isLocked?e:n===a?(0,r.Z)((0,r.Z)({},e),{},{allocation:Math.floor(o/t)+o%t}):(0,r.Z)((0,r.Z)({},e),{},{allocation:Math.floor(o/t)})}));console.log("newArr",i),y(i)}}else l.Am.error("Unlock some ETFs to readjust weights")},B=function(){return!(v.length<2)&&(!v.some((function(e){return 0===e.allocation}))&&(v.reduce((function(e,t){return e+t.allocation})),!0))},L=function(e){console.log("onlock",v);var t=v.map((function(t){return t.Symbol===e?(0,r.Z)((0,r.Z)({},t),{},{isLocked:!t.isLocked}):t}));console.log("after lock",t),y(t)},V=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"bodyTextLight",style:{position:"fixed",bottom:"70px",width:"100%",textAlign:"center",borderTop:"1px solid "+u.Z.getPropertyValue("--light"),padding:"2% 4%",backgroundColor:u.Z.getPropertyValue("--white")},children:["Min investment ",(0,g.jsxs)("span",{className:"header2dark",children:["\u20b9 ",Number((0,h.S)(v,1)).toFixed(2)]})]}),(0,g.jsxs)("div",{className:"footer",children:[(0,g.jsx)("div",{className:"bodyTextDark",style:{flex:1,paddingRight:"2%"},children:"Choose rebalancing frequency next"}),(0,g.jsx)("div",{style:{flex:1},children:(0,g.jsx)("button",{className:"solidButton",style:{opacity:B()?1:.4},onClick:function(){B()&&e.history.push({pathname:"/CreateMintbox/rebalancing-strategy",state:{minInv:(0,h.S)(v)}})},children:"Confirm weightages"})})]})]})},z=function(){return(0,g.jsxs)(p.Z,{className:"bottom-drawer",show:k,onHide:function(){return Z(!1)},keyboard:!1,children:[(0,g.jsxs)(p.Z.Body,{children:[(0,g.jsxs)("div",{className:"radio-item",style:{display:"block",opacity:A()?1:.4},children:[(0,g.jsx)("input",{type:"radio",name:"equalize",value:"equalize",id:"equalize",disabled:!A(),defaultChecked:A()}),(0,g.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:"equalize",children:"Allocate equal weightages to all"})]}),A()?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("div",{className:"bodyTextDark",style:{marginTop:"4%"},children:"Weights are already equal"})]}),(0,g.jsxs)(p.Z.Footer,{children:[(0,g.jsx)("button",{className:"outlineButton",onClick:function(){return Z(!1)},children:"Close"}),A()?(0,g.jsx)("button",{className:"solidButton",onClick:function(){!function(){var e=v.length,t=v.map((function(t,n){return 0===n?(0,r.Z)((0,r.Z)({},t),{},{isLocked:!1,allocation:Math.floor(100/e)+100%e}):(0,r.Z)((0,r.Z)({},t),{},{isLocked:!1,allocation:Math.floor(100/e)})}));y(t)}(),Z(!1)},children:"Confirm"}):(0,g.jsx)(g.Fragment,{})]})]})},I=function(){var t=s.useState(),n=(0,i.Z)(t,2),r=n[0],o=n[1],a=function(){O({}),T(!1)};console.log(E);var l=function(){switch(r){case"replace":n=E,e.history.push({pathname:"/CreateMintbox/replace-ETF",state:{fundToReplace:n}}),T(!1);break;case"remove":t=E.Symbol,D(v.filter((function(e){return e.Symbol!==t}))),T(!1);break;default:a()}var t,n};return(0,g.jsxs)(p.Z,{className:"bottom-drawer",show:C,onHide:function(){return a()},keyboard:!1,children:[(0,g.jsxs)(p.Z.Body,{children:[(0,g.jsx)("div",{className:"header1dark",children:(null===E||void 0===E?void 0:E.ETFName)||""}),(0,g.jsx)("div",{className:"smallTextLight",children:"Select action"}),(0,g.jsxs)("div",{className:"radio-item",style:{marginTop:"6%"},children:[(0,g.jsx)("input",{type:"radio",name:"fund",onChange:function(e){o(e.target.value)},value:"replace",id:"replace"}),(0,g.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:"replace",children:"Replace this ETF"})]}),(0,g.jsxs)("div",{className:"radio-item",style:{marginTop:"6%"},children:[(0,g.jsx)("input",{type:"radio",name:"fund",onChange:function(e){o(e.target.value)},value:"remove",id:"remove"}),(0,g.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:"remove",style:{color:u.Z.getPropertyValue("--peach")},children:"Remove ETF from mintbox "})]})]}),(0,g.jsxs)(p.Z.Footer,{children:[(0,g.jsx)("button",{className:"outlineButton",onClick:function(){return a()},children:"Close"}),(0,g.jsx)("button",{className:"solidButton",onClick:function(){return l()},children:"Confirm"})]})]})};return(0,g.jsxs)("div",{className:"mainContainer",children:[(0,g.jsx)(c.Z,{header:"Build your own mintbox",navigation:e.history}),(0,g.jsxs)("div",{className:"dataContainer px-0",style:{paddingBottom:"140px",paddingTop:"2%"},children:[(0,g.jsxs)("div",{className:"header2dark",style:{margin:"4%",display:"flex",gap:"4%"},children:[(0,g.jsx)("div",{style:{flex:1},children:"ETFs in your mintbox"}),(0,g.jsxs)("div",{className:"secondaryGreen",onClick:function(){return Z(!0)},children:["Weightages ",(0,g.jsx)(m.cuw,{size:14})]})]}),v.map((function(e,t){return(0,g.jsx)("div",{style:{padding:"4%",borderBottom:"1px solid "+u.Z.getPropertyValue("--light")},children:(0,g.jsxs)("div",{style:{display:"flex",gap:"5%",alignItems:"center"},children:[(0,g.jsx)(f.FQA,{className:"secondaryGreen",size:26,style:{marginLeft:"-10px"},onClick:function(){O(e),T(!0)}}),(0,g.jsxs)("div",{style:{flex:"1"},children:[(0,g.jsx)("div",{className:"header2dark",children:e.ETFName}),(0,g.jsxs)("div",{className:"smallTextLight",style:{marginTop:"1%"},children:["NAV \u20b9 ",Number(e.NAV).toFixed(2)]})]}),e.isLocked?(0,g.jsx)(x.kUi,{size:16,className:"secondaryGreen",onClick:function(){return L(e.Symbol)}}):(0,g.jsx)(x.D5B,{size:16,style:{color:u.Z.getPropertyValue("--light")},onClick:function(){return L(e.Symbol)}}),(0,g.jsx)("input",{type:"tel",maxLength:2,value:e.allocation,style:{width:"60px",height:"37px",textAlign:"center",border:"1px solid "+u.Z.getPropertyValue("--light"),outline:"none",borderRadius:"4px",background:u.Z.getPropertyValue("--lightest")},onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.log("assign",e,t),t||(t=0);var n=v.map((function(n,o){return o===e?(0,r.Z)((0,r.Z)({},n),{},{allocation:t,isLocked:!0}):n}));D(n)}(t,parseInt(e.target.value))}})]})},e.Symbol)})),(0,g.jsxs)("div",{className:"header3dark secondaryGreen",style:{padding:"4%",borderBottom:"1px solid "+u.Z.getPropertyValue("--light"),textAlign:"center"},onClick:function(){return e.history.goBack()},children:["Add more ETFs",(0,g.jsx)(f.Dwu,{size:16,style:{background:u.Z.getPropertyValue("--conservativeRisk"),borderRadius:"50%",marginLeft:"2%"}})]}),1===v.length&&(0,g.jsxs)("div",{className:"header2dark",style:{margin:"4%"},children:["Add at least ",(0,g.jsx)("b",{children:"one more"})," ETF to build your own mintbox"]})]}),(0,g.jsx)(V,{}),(0,g.jsx)(z,{}),(0,g.jsx)(I,{})]})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=1298.8983c578.chunk.js.map