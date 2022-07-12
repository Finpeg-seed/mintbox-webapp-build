"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2816],{808:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(1413),a=r(4165),i=r(5861),o=r(9439),s=r(2791),c=r(7811),l=r(8848),u=r(2102),d=r(8820),f=r(5709),v=r(6960),m=r(81);function h(e){function n(e){return e<10?"0".concat(e):e}var r=new Date(e);return[n(r.getDate()),n(r.getMonth()+1),r.getFullYear()].join("/")}var p=r(6561),b=r(184);function x(e){var n,r,x,y,g,j,w,Z,N,k,O,C=(0,s.useState)({}),S=(0,o.Z)(C,2),D=S[0],I=S[1],T=(0,s.useState)(),A=(0,o.Z)(T,2),P=(A[0],A[1]);s.useEffect((function(){P(!0);try{l.Z.get(l.Z.model.user).then(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n.userData.id);case 2:P(!1);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}catch(e){v.Am.error(e),P(!1)}}),[]);var E=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get(l.Z.model.clientData).then(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var i,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==r){e.next=13;break}return e.next=3,m.Z.getClient(n).then((function(e){return e}));case 3:if(!0!==(i=e.sent).type){e.next=11;break}return o=JSON.parse(i.data),s=o.reduce((function(e,n){return(0,t.Z)((0,t.Z)({},e),n)}),{}),console.log("Get Client API :",s),I(s),e.next=11,l.Z.set(l.Z.model.clientData,JSON.stringify(s));case 11:e.next=14;break;case 13:I(r);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:"mainContainer",children:[(0,b.jsx)(u.Z,{header:"Profile",navigation:e.history}),(0,b.jsxs)("div",{className:"dataContainer px-0",children:[(0,b.jsx)(f.Z,{}),(0,b.jsxs)("div",{className:"menu-card",children:[(0,b.jsx)("img",{src:p.r2+"menu_user.webp",className:"menu-card-icon"}),(0,b.jsxs)("div",{className:"menu-card-body",children:[(0,b.jsxs)("div",{className:"bodyTextDark",children:["Your PAN is ",null===D||void 0===D||null===(n=D.Client)||void 0===n?void 0:n[0].PAN]}),(0,b.jsxs)("div",{className:"smallTextLight",children:["Gender: ",1===(null===D||void 0===D||null===(r=D.Client)||void 0===r?void 0:r[0].Gender)?"Male":"Female",(0,b.jsx)("br",{}),"Tax status: ",null===D||void 0===D||null===(x=D.Client)||void 0===x?void 0:x[0].TaxStatus,(0,b.jsx)("br",{}),"Date of birth: ",h(null===D||void 0===D||null===(y=D.Client)||void 0===y?void 0:y[0].DateofBirth)]})]})]}),(0,b.jsxs)("div",{className:"menu-card",children:[(0,b.jsx)("img",{src:p.r2+"menu_user.webp",className:"menu-card-icon"}),(null===D||void 0===D||null===(g=D.Nominees)||void 0===g?void 0:g.length)>0?(0,b.jsxs)("div",{className:"menu-card-body",children:[(0,b.jsxs)("div",{className:"bodyTextDark",children:["Your nominee is \u2018",null===D||void 0===D||null===(j=D.Nominees)||void 0===j?void 0:j[0].Name,"\u2019"]}),(0,b.jsxs)("div",{className:"smallTextLight",children:["Relationship with you: ",null===D||void 0===D||null===(w=D.Nominees)||void 0===w?void 0:w[0].Relation,(0,b.jsx)("br",{}),"Date of birth: ",h(null===D||void 0===D||null===(Z=D.Client)||void 0===Z?void 0:Z[0].DateofBirth)]})]}):(0,b.jsx)("div",{className:"menu-card-body",children:(0,b.jsx)("div",{className:"bodyTextDark",children:"You have not set a nominee"})})]}),(0,b.jsxs)("div",{className:"menu-card",children:[(0,b.jsx)("img",{src:p.r2+"menu_user.webp",className:"menu-card-icon"}),(0,b.jsxs)("div",{className:"menu-card-body",children:[(0,b.jsxs)("div",{className:"bodyTextDark",children:["Your bank is \u2018",null===D||void 0===D||null===(N=D.BankInfo)||void 0===N?void 0:N[0].BankName,"\u2019"]}),(0,b.jsxs)("div",{className:"smallTextLight",children:["Account number: ",null===D||void 0===D||null===(k=D.BankInfo)||void 0===k?void 0:k[0].AccountNumber,(0,b.jsx)("br",{}),"IFSC: ",null===D||void 0===D||null===(O=D.BankInfo)||void 0===O?void 0:O[0].IFSC,(0,b.jsx)("br",{}),"Bank mandate status: Inactive"]}),(0,b.jsxs)("div",{className:"header3dark secondaryGreen",children:["Set up bank mandate ",(0,b.jsx)(d.Td4,{size:12})]})]})]}),(0,b.jsxs)("div",{style:{padding:"4%"},children:[(0,b.jsx)("div",{className:"header1faint",children:"Want to correct or update details?"}),(0,b.jsx)("div",{className:"smallTextLight",children:"Drop us an email on support@mintbox.ai"}),(0,b.jsxs)("div",{style:{marginTop:"4%",border:"1px solid "+c.Z.getPropertyValue("--light"),backgroundColor:c.Z.getPropertyValue("--lightest"),borderRadius:"8px",padding:"4%"},children:[(0,b.jsx)("div",{className:"header1faint secondaryGreen",children:"Important"}),(0,b.jsx)("div",{className:"smallTextLight",children:"Above details are related to only your mutual fund account with mintbox. You can find your demat  account details on your broker\u2019s platform"})]})]})]})]})}},456:function(e,n,r){function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError";var a="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,a,i=0,o=0,s="";a=n.charAt(o++);~a&&(r=i%4?64*r+a:a,i++%4)?s+=String.fromCharCode(255&r>>(-2*i&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return s};function i(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(a(e).replace(/(.)/g,(function(e,n){var r=n.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(n)}catch(e){return a(n)}}function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",n.Z=function(e,n){if("string"!=typeof e)throw new o("Invalid token specified");var r=!0===(n=n||{}).header?0:1;try{return JSON.parse(i(e.split(".")[r]))}catch(e){throw new o("Invalid token specified: "+e.message)}}},907:function(e,n,r){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},3878:function(e,n,r){function t(e){if(Array.isArray(e))return e}r.d(n,{Z:function(){return t}})},4942:function(e,n,r){function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{Z:function(){return t}})},5267:function(e,n,r){function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(n,{Z:function(){return t}})},1413:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(4942);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}},9439:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(3878);var a=r(181),i=r(5267);function o(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(e,n)||(0,a.Z)(e,n)||(0,i.Z)()}},181:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(907);function a(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=2816.20637469.chunk.js.map