/*! For license information please see 7068.b44acdb7.chunk.js.LICENSE.txt */
(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[7068],{8848:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(4165),a=n(5861),o="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function i(e){for(var t=0,n=(e=JSON.stringify(e).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return encodeURI(o+e.join(""))}function s(e){if(null===e)return console.error("DB Error: object is not present in DB."),!1;if(0!==(e=decodeURI(e)).indexOf(o))throw new Error("object cannot be decrypted");for(var t=0,n=(e=e.substring(o.length).split("")).length;t<n;t++)"{"===e[t]?e[t]="}":"}"===e[t]&&(e[t]="{");return JSON.parse(e.join(""))}var c={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},l={model:c,get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]&&o[1],t=c[t]?c[t]:t,null!==(a=localStorage.getItem(t))){e.next=5;break}return e.abrupt("return",null);case 5:return n&&(a=s(a)),e.prev=6,e.abrupt("return",JSON.parse(a));case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[6,10]])})));return function(t){return e.apply(this,arguments)}}(),set:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]&&s[2],t=c[t]?c[t]:t,a&&(n=i(n)),e.next=5,localStorage.setItem(t,n);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),clear:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("lastEmail"),n=localStorage.getItem("lastMobile"),e.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",t),localStorage.setItem("lastMobile",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u=l},2102:function(e,t,n){"use strict";n(2791);var r=n(8820),a=n(9126),o=n(3853),i=n(8617),s=n(7811),c=n(184);t.Z=function(e){var t=e.header,n=e.navigation,l=e.screenType,u=e.backAction,f=void 0===u?function(){n.goBack()}:u,p=e.right,d=e.rightAction,h=void 0===d?function(){}:d,m=e.isWatchlisted,v=void 0!==m&&m,x=e.onWatchlistIconClick,y=void 0===x?function(){}:x,g=e.onShareIconClick,b=void 0===g?function(){}:g,Z=e.onHeaderClick,k=void 0===Z?function(){}:Z;return(0,c.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==l&&(0,c.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,c.jsx)(o.Ao2,{color:s.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return f()}})}),(0,c.jsx)("div",{style:{flex:1},children:(0,c.jsx)("span",{className:"screenTitle",onClick:function(){return k()},children:t})}),(0,c.jsx)("div",{style:{display:"flex"},children:function(){switch(p){case"bookmark-share":return(0,c.jsxs)("span",{children:[v?(0,c.jsx)(a.vw0,{className:"secondaryGreen",size:24,onClick:y}):(0,c.jsx)(a.flH,{className:"secondaryGreen",size:24,onClick:y}),(0,c.jsx)(i.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:b})]});case"tip":return(0,c.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return h()},children:["Tip ",(0,c.jsx)(r.cuw,{size:10})]});default:return p?(0,c.jsx)("span",{className:"greenChipHeader",onClick:function(){h()},children:p}):(0,c.jsx)(c.Fragment,{})}}()})]})}},438:function(e,t,n){"use strict";var r=n(4165),a=n(1413),o=n(5861),i=n(8848),s=(n(2791),n(184));t.Z=function(e){var t=e.next,n=e.navigation,c=e.state,l=e.saveData,u=e.nextDisabled,f=void 0!==u&&u,p=e.buttonText,d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=4;break}return e.next=3,i.Z.get(i.Z.model.createGoal).then(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log((0,a.Z)((0,a.Z)({},t),l)),e.next=3,i.Z.set(i.Z.model.createGoal,JSON.stringify((0,a.Z)((0,a.Z)({},t),l)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:n.push({pathname:t,state:c});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"footer",children:(0,s.jsx)("button",{className:"solidButton",style:{opacity:f?.4:1},onClick:function(){return d()},children:p})})}},4069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(1413),a=n(4165),o=n(5861),i=n(9439),s=n(2791),c=n(2102),l=n(1425),u=n(3593),f=n(438),p=n(8848),d=n(2373),h=n(184);function m(e){var t=s.useState(),n=(0,i.Z)(t,2),m=n[0],v=n[1],x=s.useState(!0),y=(0,i.Z)(x,2),g=y[0],b=y[1],Z=e.location.state;s.useEffect((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get(p.Z.model.createGoal).then((function(e){v(e&&e.pfMonthlyContribution||"")}));case 2:case"end":return e.stop()}}),e)}))),[]);return s.useEffect((function(){b(!(""!==m&&m>=0))}),[m]),void 0===Z?(e.history.push("/Goals"),(0,h.jsx)(h.Fragment,{})):(0,h.jsxs)("div",{className:"mainContainer",children:[(0,h.jsx)(c.Z,{header:Z.header,navigation:e.history}),(0,h.jsx)(u.Z,{now:95,className:"progress-bar-custom"}),(0,h.jsxs)("div",{className:"dataContainer",children:[(0,h.jsx)("div",{className:"bodyTextDark",style:{marginTop:"6%"},children:"Present monthly contribution to PF account"}),(0,h.jsx)(d.Z,{className:"normalInput rupee",id:"pfMonthlyContribution",name:"pfMonthlyContribution",placeholder:"5,000",value:m,allowDecimals:!1,allowNegativeValue:!1,disableAbbreviations:!1,prefix:" ",onValueChange:function(e){return v(Number(e)||0)},intlConfig:{locale:"en-IN",currency:"INR"},autoFocus:!0}),(0,h.jsx)("div",{className:"hiddden-scrollbar",children:[{key:1e4,name:"\u20b9 10,000"},{key:2e4,name:"\u20b9 20,000"},{key:25e3,name:"\u20b9 25,000"}].map((function(e){return(0,h.jsx)(l.Z,{className:m===e.key?"normalChip selected":"normalChip",label:e.name,onClick:function(){v(e.key)}},e.key)}))})]}),(0,h.jsx)(f.Z,{navigation:e.history,next:"/Goals/goal-name",state:(0,r.Z)((0,r.Z)({},Z),{},{pfMonthlyContribution:m}),saveData:{pfMonthlyContribution:m},buttonText:"Next",nextDisabled:g})]})}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},162:function(e,t,n){"use strict";n.d(t,{SC:function(){return s},vE:function(){return i}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function i(e,t){var n=(0,r.useContext)(o).prefixes;return e||n[t]||t}function s(){return"rtl"===(0,r.useContext)(o).dir}},5545:function(e,t,n){"use strict";var r=n(2791);t.Z=r.createContext(null)},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=7068.b44acdb7.chunk.js.map