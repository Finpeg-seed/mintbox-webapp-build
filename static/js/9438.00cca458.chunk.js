/*! For license information please see 9438.00cca458.chunk.js.LICENSE.txt */
(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[9438],{9897:function(e,n,t){"use strict";t.d(n,{Le:function(){return s},OF:function(){return o},VM:function(){return c}});var r=/^[_a-z0-9-+]+(\.[_a-z0-9-+]+)*(\+[a-z0-9-]+)?\u0040[a-z0-9-.]+(\.[a-z0-9]+)$/,a=/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,i=/^[A-Z]{4}0[A-Z0-9]{6}$/,s=function(e){return e=e.toLowerCase(),!1===r.test(e)?{isValid:!1,email:e}:{isValid:!0,email:e}},o=function(e){return e=e.toUpperCase(),!1===a.test(e)?{isValid:!1,pan:e}:{isValid:!0,pan:e}},c=function(e){return e=e.toUpperCase(),!1===i.test(e)?{isValid:!1,ifsc:e}:{isValid:!0,ifsc:e}}},8591:function(e,n,t){"use strict";var r=t(4165),a=t(1413),i=t(5861),s=(t(2791),t(8848)),o=t(8820),c=t(184);n.Z=function(e){var n=e.next,t=e.navigation,u=e.params,l=e.nextDisabled,d=void 0!==l&&l,f=e.saveData,p=e.buttonText,m=void 0===p?"Confirm":p,v=e.clearData,h=void 0!==v&&v;return(0,c.jsxs)("button",{className:"solidButton",style:{opacity:d?.4:1},onClick:function(){return h&&s.Z.remove(s.Z.model.userData),void(d?console.log("asasda",d):f?s.Z.get(s.Z.model.userData).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.set(s.Z.model.userData,JSON.stringify((0,a.Z)((0,a.Z)({},i),f)));case 2:t.push({pathname:n,state:u});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()):(console.log(n,u),t.push({pathname:n,state:u})))},children:[m," ",(0,c.jsx)(o.Td4,{size:12})]})}},2102:function(e,n,t){"use strict";t(2791);var r=t(8820),a=t(9126),i=t(3853),s=t(8617),o=t(7811),c=t(184);n.Z=function(e){var n=e.header,t=e.navigation,u=e.screenType,l=e.backAction,d=void 0===l?function(){t.goBack()}:l,f=e.right,p=e.rightAction,m=void 0===p?function(){}:p,v=e.isWatchlisted,h=void 0!==v&&v,y=e.onWatchlistIconClick,x=void 0===y?function(){}:y,g=e.onShareIconClick,b=void 0===g?function(){}:g,Z=e.onHeaderClick,j=void 0===Z?function(){}:Z;return(0,c.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==u&&(0,c.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,c.jsx)(i.Ao2,{color:o.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return d()}})}),(0,c.jsx)("div",{style:{flex:1},children:(0,c.jsx)("span",{className:"screenTitle",onClick:function(){return j()},children:n})}),(0,c.jsx)("div",{style:{display:"flex"},children:function(){switch(f){case"bookmark-share":return(0,c.jsxs)("span",{children:[h?(0,c.jsx)(a.vw0,{className:"secondaryGreen",size:24,onClick:x}):(0,c.jsx)(a.flH,{className:"secondaryGreen",size:24,onClick:x}),(0,c.jsx)(s.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:b})]});case"tip":return(0,c.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return m()},children:["Tip ",(0,c.jsx)(r.cuw,{size:10})]});default:return f?(0,c.jsx)("span",{className:"greenChipHeader",onClick:function(){m()},children:f}):(0,c.jsx)(c.Fragment,{})}}()})]})}},9438:function(e,n,t){"use strict";t.r(n);var r=t(1413),a=t(4165),i=t(5861),s=t(9439),o=t(2791),c=t(6960),u=t(2102),l=t(3593),d=t(8591),f=t(8848),p=t(8820),m=t(81),v=t(7811),h=t(9897),y=t(4561),x=t(184);n.default=function(e){null===(n=e.location.state)||void 0===n||n.taxStatus;var n,t=o.useState(""),g=(0,s.Z)(t,2),b=g[0],Z=g[1],j=o.useState(""),C=(0,s.Z)(j,2),N=C[0],w=C[1],P=o.useState(0),k=(0,s.Z)(P,2),O=k[0],A=k[1],S=o.useState(!0),T=(0,s.Z)(S,2),E=T[0],D=T[1],z=o.useState(!1),V=(0,s.Z)(z,2),H=V[0],I=V[1],_=o.useState(!1),G=(0,s.Z)(_,2),L=G[0],F=G[1];o.useEffect((function(){var n;null!==(n=e.location.state)&&void 0!==n&&n.taxStatus?f.Z.get(f.Z.model.userData).then((function(e){e&&e.GuardianPan&&Z(e.GuardianPan.pan||"")})):e.history.push("/activate-direct-mf/tax-status")}),[]),o.useEffect((function(){D(!0),10===b.length&&((0,h.OF)(b).isValid?(F(!1),M(b)):F(!0))}),[b]);var M=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,e.next=4,m.Z.checkkyc({pan:n}).then((function(e){return e}));case 4:t=e.sent,console.log("checkkyc0",t),""!==t.data.f_PAN_NAME&&"OK"===t.data.f_PAN_STATUS?(w(t.data.f_PAN_NAME),A(1)):(w(""),A(0)),D(!1),I(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c.Am.error("Try again ..."),I(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"mainContainer",children:[(0,x.jsx)(u.Z,{header:"Activate mutual funds",navigation:e.history}),(0,x.jsx)(l.Z,{now:42.5,className:"progress-bar-custom"}),(0,x.jsxs)("div",{className:"dataContainer",style:{paddingTop:"42px"},children:[(0,x.jsx)("div",{className:"bodyTextDark",children:"Enter legal guardian PAN"}),(0,x.jsx)("input",{className:"normalInput",placeholder:"ABCD1234E",autoComplete:"off",autoFocus:!0,style:{textTransform:"uppercase"},maxLength:10,id:"pan",type:"text",onChange:function(e){Z(e.target.value)},value:b}),L?(0,x.jsx)("div",{className:"errorMsg",children:"Invalid Pan. Try again!"}):"",10!==b.length||L?"":(0,x.jsx)("div",{children:H?(0,x.jsxs)("center",{children:[(0,x.jsx)(y.Z,{}),(0,x.jsx)("div",{className:"bodyTextLight",children:"Fetching your KYC details...Please wait!"})]}):1===O?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"bodyTextLight",style:{marginTop:"8%"},children:["Name: ",(0,x.jsx)("span",{className:"bodyTextLight",children:N})]}),(0,x.jsxs)("div",{style:{marginTop:"4%"},children:[(0,x.jsx)(p.mny,{className:"secondaryGreen",size:20}),(0,x.jsx)("span",{className:"header2dark",children:" You are KYC registered"})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"header2dark",style:{marginTop:"8%"},children:[(0,x.jsx)(p.LHV,{color:v.Z.getPropertyValue("--red"),size:20})," You are not KYC registered"]}),(0,x.jsx)("div",{className:"bodyTextLight",style:{marginTop:"4%"},children:"Don\u2019t worry, complete your account and we will help you get KYC registered online."})]})})]}),(0,x.jsx)("div",{className:"footer",children:(0,x.jsx)(d.Z,{nextDisabled:E,navigation:e.history,buttonText:"Confirm",next:"/activate-direct-mf/guardian-name",params:(0,r.Z)((0,r.Z)({},e.location.state),{},{nameOnPan:N}),saveData:{GuardianPan:{pan:b,nameOnPan:N,kycRegistered:O}}})})]})}},1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var s=a.apply(null,t);s&&e.push(s)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var o in t)r.call(t,o)&&t[o]&&e.push(o);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},1701:function(e,n,t){"use strict";t.d(n,{Ed:function(){return i},UI:function(){return a}});var r=t(2791);function a(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function i(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}},3593:function(e,n,t){"use strict";var r=t(4942),a=t(1413),i=t(5987),s=t(1694),o=t.n(s),c=t(2791),u=t(162),l=t(1701),d=t(184),f=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],m=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function v(e,n,t){var r=(e-n)/(t-n)*100;return Math.round(1e3*r)/1e3}function h(e,n){var t,s=e.min,c=e.now,u=e.max,l=e.label,p=e.visuallyHidden,m=e.striped,h=e.animated,y=e.className,x=e.style,g=e.variant,b=e.bsPrefix,Z=(0,i.Z)(e,f);return(0,d.jsx)("div",(0,a.Z)((0,a.Z)({ref:n},Z),{},{role:"progressbar",className:o()(y,"".concat(b,"-bar"),(t={},(0,r.Z)(t,"bg-".concat(g),g),(0,r.Z)(t,"".concat(b,"-bar-animated"),h),(0,r.Z)(t,"".concat(b,"-bar-striped"),h||m),t)),style:(0,a.Z)({width:"".concat(v(c,s,u),"%")},x),"aria-valuenow":c,"aria-valuemin":s,"aria-valuemax":u,children:p?(0,d.jsx)("span",{className:"visually-hidden",children:l}):l}))}var y=c.forwardRef((function(e,n){var t=e.isChild,r=(0,i.Z)(e,p);if(r.bsPrefix=(0,u.vE)(r.bsPrefix,"progress"),t)return h(r,n);var s=r.min,f=r.now,v=r.max,y=r.label,x=r.visuallyHidden,g=r.striped,b=r.animated,Z=r.bsPrefix,j=r.variant,C=r.className,N=r.children,w=(0,i.Z)(r,m);return(0,d.jsx)("div",(0,a.Z)((0,a.Z)({ref:n},w),{},{className:o()(C,Z),children:N?(0,l.UI)(N,(function(e){return(0,c.cloneElement)(e,{isChild:!0})})):h({min:s,now:f,max:v,label:y,visuallyHidden:x,striped:g,animated:b,bsPrefix:Z,variant:j},n)}))}));y.displayName="ProgressBar",y.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},n.Z=y},162:function(e,n,t){"use strict";t.d(n,{SC:function(){return o},vE:function(){return s}});var r=t(2791),a=(t(184),["xxl","xl","lg","md","sm","xs"]),i=r.createContext({prefixes:{},breakpoints:a});i.Consumer,i.Provider;function s(e,n){var t=(0,r.useContext)(i).prefixes;return e||t[n]||n}function o(){return"rtl"===(0,r.useContext)(i).dir}},907:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},3878:function(e,n,t){"use strict";function r(e){if(Array.isArray(e))return e}t.d(n,{Z:function(){return r}})},4942:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},5267:function(e,n,t){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},5987:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(3366);function a(e,n){if(null==e)return{};var t,a,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},9439:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(3878);var a=t(181),i=t(5267);function s(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(c){o=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||(0,a.Z)(e,n)||(0,i.Z)()}},181:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(907);function a(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=9438.00cca458.chunk.js.map