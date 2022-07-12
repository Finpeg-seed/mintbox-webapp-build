"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2720],{2102:function(e,n,t){t(2791);var r=t(8820),i=t(9126),a=t(3853),c=t(8617),o=t(7811),s=t(184);n.Z=function(e){var n=e.header,t=e.navigation,u=e.screenType,l=e.backAction,f=void 0===l?function(){t.goBack()}:l,d=e.right,p=e.rightAction,y=void 0===p?function(){}:p,h=e.isWatchlisted,m=void 0!==h&&h,v=e.onWatchlistIconClick,x=void 0===v?function(){}:v,b=e.onShareIconClick,g=void 0===b?function(){}:b,j=e.onHeaderClick,Z=void 0===j?function(){}:j;return(0,s.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==u&&(0,s.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,s.jsx)(a.Ao2,{color:o.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return f()}})}),(0,s.jsx)("div",{style:{flex:1},children:(0,s.jsx)("span",{className:"screenTitle",onClick:function(){return Z()},children:n})}),(0,s.jsx)("div",{style:{display:"flex"},children:function(){switch(d){case"bookmark-share":return(0,s.jsxs)("span",{children:[m?(0,s.jsx)(i.vw0,{className:"secondaryGreen",size:24,onClick:x}):(0,s.jsx)(i.flH,{className:"secondaryGreen",size:24,onClick:x}),(0,s.jsx)(c.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:g})]});case"tip":return(0,s.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return y()},children:["Tip ",(0,s.jsx)(r.cuw,{size:10})]});default:return d?(0,s.jsx)("span",{className:"greenChipHeader",onClick:function(){y()},children:d}):(0,s.jsx)(s.Fragment,{})}}()})]})}},2720:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(1413),i=t(4165),a=t(5861),c=t(9439),o=t(2791),s=t(8848),u=t(2102),l=t(6960),f=t(81),d=t(184);function p(e){var n=(0,o.useState)({}),t=(0,c.Z)(n,2),p=(t[0],t[1]),y=(0,o.useState)(),h=(0,c.Z)(y,2),m=(h[0],h[1]),v=(0,o.useState)(),x=(0,c.Z)(v,2),b=x[0],g=x[1];o.useEffect((function(){m(!0);try{s.Z.get(s.Z.model.user).then(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n.userData.id);case 2:m(!1);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}catch(e){l.Am.error(e),m(!1)}}),[]);var j=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(s.Z.model.clientData).then(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var a,c,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=13;break}return e.next=3,f.Z.getClient(n).then((function(e){return e}));case 3:if(!0!==(a=e.sent).type){e.next=11;break}return c=JSON.parse(a.data),o=c.reduce((function(e,n){return(0,r.Z)((0,r.Z)({},e),n)}),{}),console.log("Get Client API :",o),p(o),e.next=11,s.Z.set(s.Z.model.clientData,JSON.stringify(o));case 11:e.next=14;break;case 13:p(t);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"mainContainer",children:[(0,d.jsx)(u.Z,{header:"Capital gains report",right:"Menu",rightAction:function(){e.history.push("/menu")},navigation:e.history}),(0,d.jsxs)("div",{className:"dataContainer",children:[(0,d.jsx)("div",{className:"bigHeader",style:{marginTop:"12%"},children:"Select a financial year to download"}),[{key:"0",name:"FY 2021-2022"},{key:"1",name:"FY 2022-2023"}].map((function(e){return(0,d.jsx)("div",{style:{display:"flex",marginTop:"6%"},children:(0,d.jsxs)("div",{className:"radio-item",children:[(0,d.jsx)("input",{className:"normalInput",type:"radio",id:e.key,name:"ritem",value:e.key,onChange:function(e){g(e.target.value)},checked:b===e.key}),(0,d.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:e.key,children:e.name})]})},e.key)}))]}),(0,d.jsx)("div",{className:"login-footer",children:(0,d.jsx)("button",{className:"solidButton",children:"Download capital gains report"})})]})}},907:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},3878:function(e,n,t){function r(e){if(Array.isArray(e))return e}t.d(n,{Z:function(){return r}})},4942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},5267:function(e,n,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},9439:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3878);var i=t(181),a=t(5267);function c(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(s){o=!0,i=s}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}}(e,n)||(0,i.Z)(e,n)||(0,a.Z)()}},181:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(907);function i(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=2720.4e32adac.chunk.js.map