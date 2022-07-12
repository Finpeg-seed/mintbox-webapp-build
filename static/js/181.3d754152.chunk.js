/*! For license information please see 181.3d754152.chunk.js.LICENSE.txt */
(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[181,4,2788,6462],{8848:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(4165),i=r(5861),o="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function a(t){for(var e=0,r=(t=JSON.stringify(t).split("")).length;e<r;e++)"{"===t[e]?t[e]="}":"}"===t[e]&&(t[e]="{");return encodeURI(o+t.join(""))}function c(t){if(null===t)return console.error("DB Error: object is not present in DB."),!1;if(0!==(t=decodeURI(t)).indexOf(o))throw new Error("object cannot be decrypted");for(var e=0,r=(t=t.substring(o.length).split("")).length;e<r;e++)"{"===t[e]?t[e]="}":"}"===t[e]&&(t[e]="{");return JSON.parse(t.join(""))}var s={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},u={model:s,get:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e){var r,i,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o.length>1&&void 0!==o[1]&&o[1],e=s[e]?s[e]:e,null!==(i=localStorage.getItem(e))){t.next=5;break}return t.abrupt("return",null);case 5:return r&&(i=c(i)),t.prev=6,t.abrupt("return",JSON.parse(i));case 10:return t.prev=10,t.t0=t.catch(6),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t,null,[[6,10]])})));return function(e){return t.apply(this,arguments)}}(),set:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e,r){var i,o,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],e=s[e]?s[e]:e,i&&(r=a(r)),t.next=5,localStorage.setItem(e,r);case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),remove:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.removeItem(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),clear:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("lastEmail"),r=localStorage.getItem("lastMobile"),t.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",e),localStorage.setItem("lastMobile",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},l=u},2102:function(t,e,r){"use strict";r(2791);var n=r(8820),i=r(9126),o=r(3853),a=r(8617),c=r(7811),s=r(184);e.Z=function(t){var e=t.header,r=t.navigation,u=t.screenType,l=t.backAction,f=void 0===l?function(){r.goBack()}:l,d=t.right,h=t.rightAction,p=void 0===h?function(){}:h,v=t.isWatchlisted,m=void 0!==v&&v,y=t.onWatchlistIconClick,g=void 0===y?function(){}:y,x=t.onShareIconClick,b=void 0===x?function(){}:x,w=t.onHeaderClick,j=void 0===w?function(){}:w;return(0,s.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==u&&(0,s.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,s.jsx)(o.Ao2,{color:c.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return f()}})}),(0,s.jsx)("div",{style:{flex:1},children:(0,s.jsx)("span",{className:"screenTitle",onClick:function(){return j()},children:e})}),(0,s.jsx)("div",{style:{display:"flex"},children:function(){switch(d){case"bookmark-share":return(0,s.jsxs)("span",{children:[m?(0,s.jsx)(i.vw0,{className:"secondaryGreen",size:24,onClick:g}):(0,s.jsx)(i.flH,{className:"secondaryGreen",size:24,onClick:g}),(0,s.jsx)(a.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:b})]});case"tip":return(0,s.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return p()},children:["Tip ",(0,s.jsx)(n.cuw,{size:10})]});default:return d?(0,s.jsx)("span",{className:"greenChipHeader",onClick:function(){p()},children:d}):(0,s.jsx)(s.Fragment,{})}}()})]})}},4698:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=r(4165),i=r(5861),o=r(9439),a=r(2791),c=r(2102),s=r(3593),u=r(8848),l=r(4561),f=r(184);function d(t){var e=a.useState(""),r=(0,o.Z)(e,2),d=r[0],h=r[1],p=t.location.state,v=a.useState(!0),m=(0,o.Z)(v,2),y=m[0],g=m[1];a.useEffect((0,i.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(u.Z.model.riskProfile).then((function(t){t&&t.investmentHorizon?h(t.investmentHorizon):h("1")}));case 2:g(!1);case 3:case"end":return t.stop()}}),t)}))),[]);return void 0===p?(t.history.push("/Dashboard"),(0,f.jsx)(f.Fragment,{})):(0,f.jsxs)("div",{className:"mainContainer",children:[(0,f.jsx)(c.Z,{header:"Identifying your investment horizon",navigation:t.history}),(0,f.jsx)(s.Z,{now:100,className:"progress-bar-custom"}),(0,f.jsx)("div",{className:"dataContainer",style:{paddingTop:"42px"},children:y?(0,f.jsx)(l.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"header1dark",children:"Select your investment horizon"}),[{key:"1",name:"1-3 years"},{key:"2",name:"3-5 years"},{key:"3",name:"5+ years"}].map((function(t){return(0,f.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"6%"},children:(0,f.jsxs)("div",{className:"radio-item",children:[(0,f.jsx)("input",{type:"radio",id:t.key,name:"ritem",value:t.key,onChange:function(t){h(t.target.value)},checked:d===t.key}),(0,f.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:t.key,children:t.name})]})},t.key)}))]})}),(0,f.jsxs)("div",{className:"footer",children:[(0,f.jsx)("button",{className:"outlineButton",onClick:function(){return t.history.push({pathname:"/risk-profile/1"})},children:"Start again"}),(0,f.jsx)("button",{className:"solidButton",onClick:function(){return function(){var e=Number(d),r=Number(p.riskScore),n=0;n=3===e?r+10:2===e?r+5:r,t.history.push({pathname:"/risk-profile/recommended-mintbox",state:{MINTBOXID:n}})}()},children:"Continue"})]})]})}},1694:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&t.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},1701:function(t,e,r){"use strict";r.d(e,{Ed:function(){return o},UI:function(){return i}});var n=r(2791);function i(t,e){var r=0;return n.Children.map(t,(function(t){return n.isValidElement(t)?e(t,r++):t}))}function o(t,e){var r=0;n.Children.forEach(t,(function(t){n.isValidElement(t)&&e(t,r++)}))}},3593:function(t,e,r){"use strict";var n=r(4942),i=r(1413),o=r(5987),a=r(1694),c=r.n(a),s=r(2791),u=r(162),l=r(1701),f=r(184),d=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],h=["isChild"],p=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function v(t,e,r){var n=(t-e)/(r-e)*100;return Math.round(1e3*n)/1e3}function m(t,e){var r,a=t.min,s=t.now,u=t.max,l=t.label,h=t.visuallyHidden,p=t.striped,m=t.animated,y=t.className,g=t.style,x=t.variant,b=t.bsPrefix,w=(0,o.Z)(t,d);return(0,f.jsx)("div",(0,i.Z)((0,i.Z)({ref:e},w),{},{role:"progressbar",className:c()(y,"".concat(b,"-bar"),(r={},(0,n.Z)(r,"bg-".concat(x),x),(0,n.Z)(r,"".concat(b,"-bar-animated"),m),(0,n.Z)(r,"".concat(b,"-bar-striped"),m||p),r)),style:(0,i.Z)({width:"".concat(v(s,a,u),"%")},g),"aria-valuenow":s,"aria-valuemin":a,"aria-valuemax":u,children:h?(0,f.jsx)("span",{className:"visually-hidden",children:l}):l}))}var y=s.forwardRef((function(t,e){var r=t.isChild,n=(0,o.Z)(t,h);if(n.bsPrefix=(0,u.vE)(n.bsPrefix,"progress"),r)return m(n,e);var a=n.min,d=n.now,v=n.max,y=n.label,g=n.visuallyHidden,x=n.striped,b=n.animated,w=n.bsPrefix,j=n.variant,k=n.className,Z=n.children,O=(0,o.Z)(n,p);return(0,f.jsx)("div",(0,i.Z)((0,i.Z)({ref:e},O),{},{className:c()(k,w),children:Z?(0,l.UI)(Z,(function(t){return(0,s.cloneElement)(t,{isChild:!0})})):m({min:a,now:d,max:v,label:y,visuallyHidden:g,striped:x,animated:b,bsPrefix:w,variant:j},e)}))}));y.displayName="ProgressBar",y.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},e.Z=y},162:function(t,e,r){"use strict";r.d(e,{SC:function(){return c},vE:function(){return a}});var n=r(2791),i=(r(184),["xxl","xl","lg","md","sm","xs"]),o=n.createContext({prefixes:{},breakpoints:i});o.Consumer,o.Provider;function a(t,e){var r=(0,n.useContext)(o).prefixes;return t||r[e]||e}function c(){return"rtl"===(0,n.useContext)(o).dir}},907:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:function(){return n}})},3878:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,{Z:function(){return n}})},5861:function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return i}})},4942:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},5267:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(e,{Z:function(){return n}})},1413:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(4942);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5987:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(3366);function i(t,e){if(null==t)return{};var r,i,o=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}},4165:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(1002);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return E()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var d={};function h(){}function p(){}function v(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==e&&r.call(g,a)&&(m=g);var x=v.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function i(o,a,c,s){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=v,u(x,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new w(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;Z(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},9439:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(3878);var i=r(181),o=r(5267);function a(t,e){return(0,n.Z)(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(t,e)||(0,i.Z)(t,e)||(0,o.Z)()}},181:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(907);function i(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=181.3d754152.chunk.js.map