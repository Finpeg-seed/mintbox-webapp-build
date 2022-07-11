/*! For license information please see 1978.69853fc2.chunk.js.LICENSE.txt */
(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[1978],{8848:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(4165),a=n(5861),i="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function o(e){for(var t=0,n=(e=JSON.stringify(e).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return encodeURI(i+e.join(""))}function s(e){if(null===e)return console.error("DB Error: object is not present in DB."),!1;if(0!==(e=decodeURI(e)).indexOf(i))throw new Error("object cannot be decrypted");for(var t=0,n=(e=e.substring(i.length).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return JSON.parse(e.join(""))}var c={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},l={model:c,get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]&&i[1],t=c[t]?c[t]:t,null!==(a=localStorage.getItem(t))){e.next=5;break}return e.abrupt("return",null);case 5:return n&&(a=s(a)),e.prev=6,e.abrupt("return",JSON.parse(a));case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[6,10]])})));return function(t){return e.apply(this,arguments)}}(),set:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]&&s[2],t=c[t]?c[t]:t,a&&(n=o(n)),e.next=5,localStorage.setItem(t,n);case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),clear:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("lastEmail"),n=localStorage.getItem("lastMobile"),e.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",t),localStorage.setItem("lastMobile",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u=l},2102:function(e,t,n){"use strict";n(2791);var r=n(8820),a=n(9126),i=n(3853),o=n(8617),s=n(7811),c=n(184);t.Z=function(e){var t=e.header,n=e.navigation,l=e.screenType,u=e.backAction,f=void 0===u?function(){n.goBack()}:u,d=e.right,p=e.rightAction,m=void 0===p?function(){}:p,v=e.isWatchlisted,h=void 0!==v&&v,y=e.onWatchlistIconClick,x=void 0===y?function(){}:y,b=e.onShareIconClick,g=void 0===b?function(){}:b,Z=e.onHeaderClick,j=void 0===Z?function(){}:Z;return(0,c.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==l&&(0,c.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,c.jsx)(i.Ao2,{color:s.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return f()}})}),(0,c.jsx)("div",{style:{flex:1},children:(0,c.jsx)("span",{className:"screenTitle",onClick:function(){return j()},children:t})}),(0,c.jsx)("div",{style:{display:"flex"},children:function(){switch(d){case"bookmark-share":return(0,c.jsxs)("span",{children:[h?(0,c.jsx)(a.vw0,{className:"secondaryGreen",size:24,onClick:x}):(0,c.jsx)(a.flH,{className:"secondaryGreen",size:24,onClick:x}),(0,c.jsx)(o.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:g})]});case"tip":return(0,c.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return m()},children:["Tip ",(0,c.jsx)(r.cuw,{size:10})]});default:return d?(0,c.jsx)("span",{className:"greenChipHeader",onClick:function(){m()},children:d}):(0,c.jsx)(c.Fragment,{})}}()})]})}},438:function(e,t,n){"use strict";var r=n(4165),a=n(1413),i=n(5861),o=n(8848),s=(n(2791),n(184));t.Z=function(e){var t=e.next,n=e.navigation,c=e.state,l=e.saveData,u=e.nextDisabled,f=void 0!==u&&u,d=e.buttonText,p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=4;break}return e.next=3,o.Z.get(o.Z.model.createGoal).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log((0,a.Z)((0,a.Z)({},t),l)),e.next=3,o.Z.set(o.Z.model.createGoal,JSON.stringify((0,a.Z)((0,a.Z)({},t),l)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:n.push({pathname:t,state:c});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"footer",children:(0,s.jsx)("button",{className:"solidButton",style:{opacity:f?.4:1},onClick:function(){return p()},children:d})})}},1978:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(1413),a=n(4165),i=n(5861),o=n(9439),s=n(2791),c=n(2102),l=n(3593),u=n(438),f=n(8848),d=n(184);function p(e){var t=s.useState(),n=(0,o.Z)(t,2),p=n[0],m=n[1],v=s.useState(!0),h=(0,o.Z)(v,2),y=h[0],x=h[1],b=e.location.state;s.useEffect((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get(f.Z.model.createGoal).then((function(e){e&&void 0!==e.includePf?m(e.includePf):m("")}));case 2:case"end":return e.stop()}}),e)}))),[]);return s.useEffect((function(){x(""===p)}),[p]),void 0===b?(e.history.push("/Goals"),(0,d.jsx)(d.Fragment,{})):(0,d.jsxs)("div",{className:"mainContainer",children:[(0,d.jsx)(c.Z,{header:b.header,navigation:e.history}),(0,d.jsx)(l.Z,{now:85,className:"progress-bar-custom"}),(0,d.jsxs)("div",{className:"dataContainer",children:[(0,d.jsx)("div",{className:"header1dark",style:{marginTop:"6%"},children:"Do you wish to include your PF (provident fund) contributions in this plan?"}),[{key:"1",name:"Yes"},{key:"0",name:"No"}].map((function(e){return(0,d.jsx)("div",{style:{display:"flex",marginTop:"4%"},children:(0,d.jsxs)("div",{className:"radio-item",children:[(0,d.jsx)("input",{className:"normalInput",type:"radio",id:e.key,name:"ritem",value:e.key,onChange:function(e){m(e.target.value)},checked:p===e.key}),(0,d.jsx)("label",{className:"bodyTextDark radio-label",htmlFor:e.key,children:e.name})]})},e.key)}))]}),(0,d.jsx)(u.Z,{navigation:e.history,next:"1"===p?"/Goals/pf-balance":"/Goals/goal-name",state:(0,r.Z)((0,r.Z)({},b),{},{includePf:"1"===p}),saveData:{includePf:p},buttonText:"Next",nextDisabled:y})]})}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},1701:function(e,t,n){"use strict";n.d(t,{Ed:function(){return i},UI:function(){return a}});var r=n(2791);function a(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}function i(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}},3593:function(e,t,n){"use strict";var r=n(4942),a=n(1413),i=n(5987),o=n(1694),s=n.n(o),c=n(2791),l=n(162),u=n(1701),f=n(184),d=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],m=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function v(e,t,n){var r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function h(e,t){var n,o=e.min,c=e.now,l=e.max,u=e.label,p=e.visuallyHidden,m=e.striped,h=e.animated,y=e.className,x=e.style,b=e.variant,g=e.bsPrefix,Z=(0,i.Z)(e,d);return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({ref:t},Z),{},{role:"progressbar",className:s()(y,"".concat(g,"-bar"),(n={},(0,r.Z)(n,"bg-".concat(b),b),(0,r.Z)(n,"".concat(g,"-bar-animated"),h),(0,r.Z)(n,"".concat(g,"-bar-striped"),h||m),n)),style:(0,a.Z)({width:"".concat(v(c,o,l),"%")},x),"aria-valuenow":c,"aria-valuemin":o,"aria-valuemax":l,children:p?(0,f.jsx)("span",{className:"visually-hidden",children:u}):u}))}var y=c.forwardRef((function(e,t){var n=e.isChild,r=(0,i.Z)(e,p);if(r.bsPrefix=(0,l.vE)(r.bsPrefix,"progress"),n)return h(r,t);var o=r.min,d=r.now,v=r.max,y=r.label,x=r.visuallyHidden,b=r.striped,g=r.animated,Z=r.bsPrefix,j=r.variant,w=r.className,k=r.children,O=(0,i.Z)(r,m);return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({ref:t},O),{},{className:s()(w,Z),children:k?(0,u.UI)(k,(function(e){return(0,c.cloneElement)(e,{isChild:!0})})):h({min:o,now:d,max:v,label:y,visuallyHidden:x,striped:b,animated:g,bsPrefix:Z,variant:j},t)}))}));y.displayName="ProgressBar",y.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},t.Z=y},162:function(e,t,n){"use strict";n.d(t,{SC:function(){return s},vE:function(){return o}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),i=r.createContext({prefixes:{},breakpoints:a});i.Consumer,i.Provider;function o(e,t){var n=(0,r.useContext)(i).prefixes;return e||n[t]||t}function s(){return"rtl"===(0,r.useContext)(i).dir}},907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3878:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},5267:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},9439:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3878);var a=n(181),i=n(5267);function o(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,t)||(0,a.Z)(e,t)||(0,i.Z)()}},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(907);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=1978.69853fc2.chunk.js.map