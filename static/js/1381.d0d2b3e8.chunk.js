"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[1381],{8848:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(4165),a=t(5861),o="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function i(e){for(var n=0,t=(e=JSON.stringify(e).split("")).length;n<t;n++)"{"===e[n]?e[n]="}":"}"===e[n]&&(e[n]="{");return encodeURI(o+e.join(""))}function s(e){if(null===e)return console.error("DB Error: object is not present in DB."),!1;if(0!==(e=decodeURI(e)).indexOf(o))throw new Error("object cannot be decrypted");for(var n=0,t=(e=e.substring(o.length).split("")).length;n<t;n++)"{"===e[n]?e[n]="}":"}"===e[n]&&(e[n]="{");return JSON.parse(e.join(""))}var c={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},l={model:c,get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>1&&void 0!==o[1]&&o[1],n=c[n]?c[n]:n,null!==(a=localStorage.getItem(n))){e.next=5;break}return e.abrupt("return",null);case 5:return t&&(a=s(a)),e.prev=6,e.abrupt("return",JSON.parse(a));case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[6,10]])})));return function(n){return e.apply(this,arguments)}}(),set:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,o,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]&&s[2],n=c[n]?c[n]:n,a&&(t=i(t)),e.next=5,localStorage.setItem(n,t);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),remove:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),clear:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("lastEmail"),t=localStorage.getItem("lastMobile"),e.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",n),localStorage.setItem("lastMobile",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u=l},2102:function(e,n,t){t(2791);var r=t(8820),a=t(9126),o=t(3853),i=t(8617),s=t(7811),c=t(184);n.Z=function(e){var n=e.header,t=e.navigation,l=e.screenType,u=e.backAction,f=void 0===u?function(){t.goBack()}:u,d=e.right,p=e.rightAction,m=void 0===p?function(){}:p,h=e.isWatchlisted,x=void 0!==h&&h,v=e.onWatchlistIconClick,g=void 0===v?function(){}:v,y=e.onShareIconClick,k=void 0===y?function(){}:y,Z=e.onHeaderClick,b=void 0===Z?function(){}:Z;return(0,c.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==l&&(0,c.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,c.jsx)(o.Ao2,{color:s.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return f()}})}),(0,c.jsx)("div",{style:{flex:1},children:(0,c.jsx)("span",{className:"screenTitle",onClick:function(){return b()},children:n})}),(0,c.jsx)("div",{style:{display:"flex"},children:function(){switch(d){case"bookmark-share":return(0,c.jsxs)("span",{children:[x?(0,c.jsx)(a.vw0,{className:"secondaryGreen",size:24,onClick:g}):(0,c.jsx)(a.flH,{className:"secondaryGreen",size:24,onClick:g}),(0,c.jsx)(i.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:k})]});case"tip":return(0,c.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return m()},children:["Tip ",(0,c.jsx)(r.cuw,{size:10})]});default:return d?(0,c.jsx)("span",{className:"greenChipHeader",onClick:function(){m()},children:d}):(0,c.jsx)(c.Fragment,{})}}()})]})}},2403:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(1413),a=t(4165),o=t(5861),i=t(9439),s=t(2791),c=t(7413),l=t(1425),u=t(8848),f=t(2102),d=t(3593),p=t(4561),m=t(2373),h=t(184);function x(e){var n=s.useState(""),t=(0,i.Z)(n,2),x=t[0],v=t[1],g=s.useState(!0),y=(0,i.Z)(g,2),k=y[0],Z=y[1],b=s.useState(!0),j=(0,i.Z)(b,2),w=j[0],C=j[1],N=e.location.state;s.useEffect((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get(u.Z.model.riskProfile).then((function(e){v(e&&e.emergencyFund||"")}));case 2:Z(!1);case 3:case"end":return e.stop()}}),e)}))),[]);return s.useEffect((function(){C(!x)}),[x]),void 0===N?(e.history.push("/Dashboard"),(0,h.jsx)(h.Fragment,{})):(0,h.jsxs)("div",{className:"mainContainer",children:[(0,h.jsx)(f.Z,{header:"Identifying your risk profile",navigation:e.history}),(0,h.jsx)(d.Z,{now:36,className:"progress-bar-custom"}),(0,h.jsx)("div",{className:"dataContainer",style:{paddingTop:"42px"},children:k?(0,h.jsx)(p.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"bodyTextDark",children:"What is the size of your emergency fund?"}),(0,h.jsx)(m.Z,{className:"normalInput rupee",id:"emergencyFund",name:"emergencyFund",placeholder:"1,00,000",value:x,allowDecimals:!1,allowNegativeValue:!1,disableAbbreviations:!1,prefix:" ",onValueChange:function(e){return v(e)},autoFocus:!0,intlConfig:{locale:"en-IN",currency:"INR"}}),(0,h.jsx)("div",{className:"hiddden-scrollbar",children:[{key:"0",name:"No emergency fund"},{key:"50000",name:"\u20b9 50,000"},{key:"200000",name:"\u20b9 2 Lakh"}].map((function(e){return(0,h.jsx)(l.Z,{className:x===e.key?"normalChip selected":"normalChip",label:e.name,onClick:function(){v(e.key)}},e.key)}))})]})}),(0,h.jsx)(c.Z,{navigation:e.history,next:"/risk-profile/5",state:(0,r.Z)((0,r.Z)({},N),{},{emergencyFund:x}),saveData:{emergencyFund:x},buttonText:"Confirm",nextDisabled:w})]})}},7413:function(e,n,t){var r=t(4165),a=t(1413),o=t(5861),i=t(8848),s=(t(2791),t(184));n.Z=function(e){var n=e.next,t=e.navigation,c=e.state,l=e.saveData,u=e.nextDisabled,f=void 0!==u&&u,d=e.buttonText,p=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(f),f){e.next=5;break}return e.next=4,i.Z.get(i.Z.model.riskProfile).then(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.set(i.Z.model.riskProfile,JSON.stringify((0,a.Z)((0,a.Z)({},n),l)));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 4:t.push({pathname:n,state:c});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"footer",children:(0,s.jsx)("button",{className:"solidButton",style:{opacity:f?.4:1},onClick:function(){return p()},children:d})})}},5545:function(e,n,t){var r=t(2791);n.Z=r.createContext(null)}}]);
//# sourceMappingURL=1381.d0d2b3e8.chunk.js.map