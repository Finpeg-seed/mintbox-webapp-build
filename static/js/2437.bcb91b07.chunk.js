"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2437],{2102:function(n,e,t){t(2791);var r=t(8820),a=t(9126),i=t(3853),o=t(8617),c=t(7811),s=t(184);e.Z=function(n){var e=n.header,t=n.navigation,u=n.screenType,l=n.backAction,d=void 0===l?function(){t.goBack()}:l,f=n.right,h=n.rightAction,p=void 0===h?function(){}:h,m=n.isWatchlisted,y=void 0!==m&&m,v=n.onWatchlistIconClick,x=void 0===v?function(){}:v,k=n.onShareIconClick,Z=void 0===k?function(){}:k,g=n.onHeaderClick,j=void 0===g?function(){}:g;return(0,s.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==u&&(0,s.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,s.jsx)(i.Ao2,{color:c.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return d()}})}),(0,s.jsx)("div",{style:{flex:1},children:(0,s.jsx)("span",{className:"screenTitle",onClick:function(){return j()},children:e})}),(0,s.jsx)("div",{style:{display:"flex"},children:function(){switch(f){case"bookmark-share":return(0,s.jsxs)("span",{children:[y?(0,s.jsx)(a.vw0,{className:"secondaryGreen",size:24,onClick:x}):(0,s.jsx)(a.flH,{className:"secondaryGreen",size:24,onClick:x}),(0,s.jsx)(o.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:Z})]});case"tip":return(0,s.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return p()},children:["Tip ",(0,s.jsx)(r.cuw,{size:10})]});default:return f?(0,s.jsx)("span",{className:"greenChipHeader",onClick:function(){p()},children:f}):(0,s.jsx)(s.Fragment,{})}}()})]})}},2437:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(1413),a=t(4165),i=t(5861),o=t(9439),c=t(2791),s=t(8848),u=t(2102),l=t(6960),d=t(81),f=t(184);function h(n){var e=(0,c.useState)({}),t=(0,o.Z)(e,2),h=(t[0],t[1]),p=(0,c.useState)(),m=(0,o.Z)(p,2),y=(m[0],m[1]),v=(0,c.useState)(),x=(0,o.Z)(v,2),k=x[0],Z=x[1];c.useEffect((function(){y(!0);try{s.Z.get(s.Z.model.user).then(function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e.userData.id);case 2:y(!1);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}catch(n){l.Am.error(n),y(!1)}}),[]);var g=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get(s.Z.model.clientData).then(function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var i,o,c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==t){n.next=13;break}return n.next=3,d.Z.getClient(e).then((function(n){return n}));case 3:if(!0!==(i=n.sent).type){n.next=11;break}return o=JSON.parse(i.data),c=o.reduce((function(n,e){return(0,r.Z)((0,r.Z)({},n),e)}),{}),console.log("Get Client API :",c),h(c),n.next=11,s.Z.set(s.Z.model.clientData,JSON.stringify(c));case 11:n.next=14;break;case 13:h(t);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"mainContainer",children:[(0,f.jsx)(u.Z,{header:"ELSS report",right:"Menu",rightAction:function(){n.history.push("/menu")},navigation:n.history}),(0,f.jsxs)("div",{className:"dataContainer",children:[(0,f.jsx)("div",{className:"bigHeader",style:{marginTop:"12%"},children:"Select a financial year to download"}),[{key:"0",name:"FY 2021-2022"},{key:"1",name:"FY 2022-2023"}].map((function(n){return(0,f.jsx)("div",{style:{display:"flex",marginTop:"6%"},children:(0,f.jsxs)("div",{className:"radio-item",children:[(0,f.jsx)("input",{className:"normalInput",type:"radio",id:n.key,name:"ritem",value:n.key,onChange:function(n){Z(n.target.value)},checked:k===n.key}),(0,f.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:n.key,children:n.name})]})},n.key)}))]}),(0,f.jsx)("div",{className:"login-footer",children:(0,f.jsx)("button",{className:"solidButton",children:"Download ELSS report"})})]})}},907:function(n,e,t){function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,{Z:function(){return r}})},3878:function(n,e,t){function r(n){if(Array.isArray(n))return n}t.d(e,{Z:function(){return r}})},5267:function(n,e,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(e,{Z:function(){return r}})},9439:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(3878);var a=t(181),i=t(5267);function o(n,e){return(0,r.Z)(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(n,e)||(0,a.Z)(n,e)||(0,i.Z)()}},181:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(907);function a(n,e){if(n){if("string"===typeof n)return(0,r.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(n,e):void 0}}}}]);
//# sourceMappingURL=2437.bcb91b07.chunk.js.map