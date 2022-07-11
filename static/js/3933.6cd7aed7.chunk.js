"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[3933],{1075:function(e,n,t){t.d(n,{S:function(){return i}});var r=t(1413),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===e.length)return 0;if(1===e.length)return e[0].NAV;var t=function(){n&&(100%e.length===0?e=e.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{allocation:(100/e.length).toFixed(0)})})):(e=e.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{allocation:((100-100%e.length)/e.length).toFixed(0)})})))[0].allocation=Number(e[0].allocation)+100%e.length);for(var t=e.map((function(e){return e.allocation})),i=e.map((function(e){return 1})),o=0,a=function(){o++;var n=e.reduce((function(e,n,t){return e+n.NAV*i[t]}),0),r=e.map((function(e,t){return e.NAV*i[t]*100/n})).map((function(e,n){return t[n]-e})),a=Math.max.apply(Math,r);if(Math.min.apply(Math,r)>-2&&a<2)return{v:{v:n}};var s=r.indexOf(a);i[s]++};o<1e4;){var s=a();if("object"===typeof s)return s.v}}();return"object"===typeof t?t.v:void 0}},3933:function(e,n,t){t.r(n);var r=t(1413),i=t(3433),o=t(4165),a=t(5861),s=t(9439),c=t(2791),l=t(6960),u=t(2102),d=t(3853),f=t(7811),h=t(8848),p=t(2560),x=t(1075),m=t(2919),g=t(184);n.default=function(e){var n=c.useState([]),t=(0,s.Z)(n,2),v=t[0],y=t[1];c.useEffect((0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:case"end":return e.stop()}}),e)}))),[]),c.useEffect((function(){console.log(v),Z(v)}),[v]);var b=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get(h.Z.model.createMintbox).then((function(e){null!==e&&void 0!==e&&e.selectedETFs&&y(e.selectedETFs)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),l.Am.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={selectedETFs:n},e.next=3,h.Z.get(h.Z.model.createMintbox).then(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n?Object.assign(n,t):n=t,e.next=3,h.Z.set(h.Z.model.createMintbox,JSON.stringify(n));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var n=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t,i,a,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.filter((function(e){return!e.isLocked})).length)){e.next=3;break}return e.abrupt("return");case 3:i=n.reduce((function(e,n){return n.isLocked?e+n.allocation:e}),0),console.log("lockedWeight",i),a=100-i,s=n.findIndex((function(e){return!e.isLocked})),console.log("unlockedETFsCount:",t),console.log("remainingWeight:",a),c=n.map((function(e,n){return e.isLocked?e:n===s?(0,r.Z)((0,r.Z)({},e),{},{allocation:Math.floor(a/t)+a%t}):(0,r.Z)((0,r.Z)({},e),{},{allocation:Math.floor(a/t)})})),Z(c);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),t=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(v.length>=2)){t.next=4;break}return t.next=3,n(v);case 3:e.history.push("/CreateMintbox/define-weights");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"bodyTextLight",style:{position:"fixed",bottom:"70px",width:"100%",textAlign:"center",borderTop:"1px solid "+f.Z.getPropertyValue("--light"),padding:"2% 4%",backgroundColor:f.Z.getPropertyValue("--white")},children:["Min investment ",(0,g.jsxs)("span",{className:"header2dark",children:["\u20b9 ",Number((0,x.S)(v,1)).toFixed(2)]})]}),(0,g.jsxs)("div",{className:"footer",children:[(0,g.jsx)("div",{className:"bodyTextDark",style:{flex:1,paddingRight:"2%"},children:"Define ETF weightages on the next screen"}),(0,g.jsx)("div",{style:{flex:1},children:(0,g.jsx)("button",{className:"solidButton",style:{opacity:v.length>=2?1:.4},onClick:function(){t()},children:"Confirm Selection"})})]})]})},k=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"header2dark",style:{marginLeft:"4%",marginTop:"2%"},children:[v.length," ETFs selected"]}),(0,g.jsx)("div",{className:"smallTextLight",style:{marginLeft:"4%"},children:"Min 2 | Max 10"}),v.map((function(n){return(0,g.jsx)("div",{style:{padding:"4%",borderBottom:"1px solid "+f.Z.getPropertyValue("--light")},children:(0,g.jsxs)("div",{style:{display:"flex",gap:"4%"},children:[(0,g.jsx)(m.Z,{amcName:n.AMCName,height:"24px",width:"24px"}),(0,g.jsxs)("div",{style:{flex:"1"},children:[(0,g.jsx)("div",{className:"header2dark",children:n.ETFName}),(0,g.jsxs)("div",{className:"smallTextLight",children:["NAV \u20b9 ",Number(n.NAV).toFixed(2)]}),(0,g.jsx)("div",{className:"header3dark secondaryGreen",style:{marginTop:"2%"},onClick:function(){return e.history.push("/ETF-detail/"+n.Symbol)},children:"View details"})]}),(0,g.jsx)(d.FS3,{size:32,style:{backgroundColor:"#FFE7E5",color:"#FF8080",borderRadius:"50%",margin:"auto 0"},onClick:function(){return e=n.Symbol,void y(v.filter((function(n){return n.Symbol!==e})));var e}})]})},n.Symbol)})),1===v.length&&(0,g.jsxs)("div",{style:{margin:"4%",fontSize:"14px",fontWeight:"400",color:"#333333"},children:["Add at least ",(0,g.jsx)("b",{children:"one more"})," ETF to build your own mintbox"]})]})};return(0,g.jsxs)("div",{className:"mainContainer",children:[(0,g.jsx)(u.Z,{header:"Build your own mintbox",navigation:e.history}),(0,g.jsxs)("div",{className:"dataContainer px-0",style:{paddingBottom:"110px",paddingTop:"2%"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(p.Z,{searchText:"Search by ETF name",navigation:e.history,type:1,showPlusIcon:!0,plusIconAction:function(e){return function(e){10!==v.length?-1===v.findIndex((function(n){return n.Symbol===e.Symbol}))&&y([].concat((0,i.Z)(v),[e])):l.Am.error("Maximum 10 ETFs allowed")}(e)},showViewDetails:!0,viewDetailsAction:function(n){return e.history.push("/ETF-detail/"+n.Symbol)}})}),0===v.length?(0,g.jsx)("div",{className:"bodyTextDark",style:{margin:"4%",fontSize:"16px"},children:"Search and add ETFs to start building!"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{}),(0,g.jsx)(j,{})]})]})]})}}}]);
//# sourceMappingURL=3933.6cd7aed7.chunk.js.map