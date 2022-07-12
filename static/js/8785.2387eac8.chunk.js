"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[8785],{3499:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(8848),s=r(2102),u=r(8820),l=r(5709),f=r(6960),d=r(81),p=r(4561),h=r(6561),m=r(184);function y(e){var t=(0,a.useState)([]),r=(0,i.Z)(t,2),y=r[0],g=r[1],b=(0,a.useState)(),v=(0,i.Z)(b,2),w=v[0],x=v[1];return a.useEffect((function(){x(!0);try{c.Z.get(c.Z.model.user).then(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getPushNotifications(t.userData.id).then((function(e){return e}));case 2:r=e.sent,console.log(r.data),r.type&&g((null===(o=r.data)||void 0===o?void 0:o.reverse())||[]),x(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){f.Am.error(e),x(!1)}}),[]),(0,m.jsxs)("div",{className:"mainContainer",children:[(0,m.jsx)(s.Z,{header:"Notifications",navigation:e.history}),w?(0,m.jsx)(p.Z,{}):(0,m.jsxs)("div",{className:"dataContainer px-0",children:[(0,m.jsx)(l.Z,{}),0===y.length?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:{margin:"15% 8%",textAlign:"center"},children:[(0,m.jsx)("img",{style:{width:"120px",height:"120px"},src:h.r2+"not-found.webp",alt:""}),(0,m.jsx)("div",{className:"bigHeader",style:{marginTop:"24px",marginBottom:"40px"},children:"No new notifications"})]})}):y.map((function(e){e.AppURL.split("/");return(0,m.jsxs)("div",{className:"menu-card",children:[(0,m.jsx)("img",{src:h.r2+"menu_user.webp",className:"menu-card-icon"}),(0,m.jsxs)("div",{className:"menu-card-body",children:[(0,m.jsx)("div",{className:"bodyTextDark",children:e.Title.replace("{ en = ","").replace(" }","")}),(0,m.jsx)("div",{className:"smallTextLight",children:e.Content.replace("{ en = ","").replace(" }","")}),""!==e.ButtonText?(0,m.jsxs)("div",{className:"header3dark secondaryGreen",children:[e.ButtonText," ",(0,m.jsx)(u.Td4,{size:12})]}):(0,m.jsx)(m.Fragment,{})]})]})}))]})]})}},456:function(e,t,r){function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,i=0,a=0,c="";o=t.charAt(a++);~o&&(r=i%4?64*r+o:o,i++%4)?c+=String.fromCharCode(255&r>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return o(t)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new a("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(i(e.split(".")[r]))}catch(e){throw new a("Invalid token specified: "+e.message)}}},907:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3878:function(e,t,r){function n(e){if(Array.isArray(e))return e}r.d(t,{Z:function(){return n}})},4942:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},5267:function(e,t,r){function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return n}})},1413:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},9439:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(3878);var o=r(181),i=r(5267);function a(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||(0,i.Z)()}},181:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=8785.2387eac8.chunk.js.map