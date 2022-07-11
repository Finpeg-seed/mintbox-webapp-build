"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2749],{2265:function(n,e,t){t.d(e,{B3:function(){return f},pl:function(){return h}});var r=t(1413),i=t(4165),o=t(5861),a=t(81),c=t(456),s=t(6960),u=t(8848),l="mintbox",d=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var e,t,r=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n.next=3,a.Z.getSmallcasetoken(e).then((function(n){return n}));case 3:if(!(t=n.sent).type){n.next=11;break}return console.log("Initializing with New Token =>>",t.data),n.next=8,u.Z.set(u.Z.model.smallcaseSDKToken,t.data);case 8:window.sc=new window.scDK({gateway:l,smallcaseAuthToken:t.data}),n.next=13;break;case 11:return n.next=13,d();case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get(u.Z.model.smallcaseSDKToken).then(function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===e||1e3*(0,c.Z)(e).exp<(new Date).getTime())){n.next=5;break}return n.next=3,u.Z.get(u.Z.model.user).then(function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get(u.Z.model.clientData).then(function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var o,c,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==t){n.next=23;break}return n.next=3,a.Z.getClient(e.userData.id).then((function(n){return n}));case 3:if(!0!==(o=n.sent).type){n.next=19;break}return c=JSON.parse(o.data),s=c.reduce((function(n,e){return(0,r.Z)((0,r.Z)({},n),e)}),{}),console.log("Get Client API :",s),n.next=10,u.Z.set(u.Z.model.clientData,JSON.stringify(s));case 10:if(!s.SmallcaseInfo.length){n.next=15;break}return n.next=13,d(s.SmallcaseInfo[0].AuthId);case 13:n.next=17;break;case 15:return n.next=17,d();case 17:n.next=21;break;case 19:return n.next=21,d();case 21:case 27:n.next=31;break;case 23:if(!t.SmallcaseInfo.length){n.next=29;break}return console.log("user auth id => ",t.SmallcaseInfo[0].AuthId),n.next=27,d(t.SmallcaseInfo[0].AuthId);case 29:return n.next=31,d();case 31:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){s.Am.error(n)}));case 3:n.next=6;break;case 5:void 0===window.sc?(console.log("Initializing with existing sdktoken -> ",e),window.sc=new window.scDK({gateway:l,smallcaseAuthToken:e})):console.log("smallcase already initialized");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var e,t,r=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n.next=3,a.Z.getSmallcasetoken(e).then((function(n){return n}));case 3:if(!(t=n.sent).type){n.next=9;break}return console.log("New Token =>>",t.data),n.next=8,u.Z.set(u.Z.model.smallcaseSDKToken,t.data);case 8:window.sc.init({smallcaseAuthToken:t.data}).then((function(n){console.log("Smallcase init complete",n)})).catch((function(n){console.log(n.message),p()}));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e,t,r){var o,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={clientId:e,broker:r,smallcaseAuthToken:t},console.log(o),n.next=4,a.Z.saveSmallCaseAuthId(o).then((function(n){return n}));case 4:if(c=n.sent,console.log(c),!c.type){n.next=18;break}if("failure"!==c.data.Result){n.next=12;break}return console.log("failedddddddd"),n.abrupt("return",!1);case 12:return n.next=14,p(c.data.AuthId);case 14:return console.log("yeahhhhh"),n.abrupt("return",!0);case 16:n.next=19;break;case 18:return n.abrupt("return",!1);case 19:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},3411:function(n,e,t){function r(n){return(n=n>=1e7?"\u20b9 ".concat((n/1e7).toFixed(2)," cr"):n>=1e5?"\u20b9 ".concat((n/1e5).toFixed(2)," lac"):n>=1e3?"\u20b9 ".concat((n/1e3).toFixed(2)," k"):i(n)).replace("-","")}function i(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=new Intl.NumberFormat("en-IN",{minimumFractionDigits:0,maximumFractionDigits:e}).format(n);return"\u20b9 ".concat(t)}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"short"===e?r(Number(n)):i(Number(n),t)}t.d(e,{A:function(){return o}})},1974:function(n,e,t){function r(n){var e=n%10,t=n%100;return 1==e&&11!=t?n+"st":2==e&&12!=t?n+"nd":3==e&&13!=t?n+"rd":n+"th"}t.d(e,{Z:function(){return r}})},2102:function(n,e,t){t(2791);var r=t(8820),i=t(9126),o=t(3853),a=t(8617),c=t(7811),s=t(184);e.Z=function(n){var e=n.header,t=n.navigation,u=n.screenType,l=n.backAction,d=void 0===l?function(){t.goBack()}:l,f=n.right,p=n.rightAction,h=void 0===p?function(){}:p,m=n.isWatchlisted,v=void 0!==m&&m,g=n.onWatchlistIconClick,x=void 0===g?function(){}:g,k=n.onShareIconClick,w=void 0===k?function(){}:k,Z=n.onHeaderClick,y=void 0===Z?function(){}:Z;return(0,s.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==u&&(0,s.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,s.jsx)(o.Ao2,{color:c.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return d()}})}),(0,s.jsx)("div",{style:{flex:1},children:(0,s.jsx)("span",{className:"screenTitle",onClick:function(){return y()},children:e})}),(0,s.jsx)("div",{style:{display:"flex"},children:function(){switch(f){case"bookmark-share":return(0,s.jsxs)("span",{children:[v?(0,s.jsx)(i.vw0,{className:"secondaryGreen",size:24,onClick:x}):(0,s.jsx)(i.flH,{className:"secondaryGreen",size:24,onClick:x}),(0,s.jsx)(a.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:w})]});case"tip":return(0,s.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return h()},children:["Tip ",(0,s.jsx)(r.cuw,{size:10})]});default:return f?(0,s.jsx)("span",{className:"greenChipHeader",onClick:function(){h()},children:f}):(0,s.jsx)(s.Fragment,{})}}()})]})}},9964:function(n,e,t){t.d(e,{Z:function(){return y}});var r=t(3366),i=t(7462),o=t(2791),a=t(8182),c=t(4419),s=t(1393),u=t(551),l=t(8875),d=t(3967),f=t(4999),p=t(9479),h=t(184),m=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],v={entering:{opacity:1},entered:{opacity:1}},g=o.forwardRef((function(n,e){var t=(0,d.Z)(),a={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},c=n.addEndListener,s=n.appear,u=void 0===s||s,g=n.children,x=n.easing,k=n.in,w=n.onEnter,Z=n.onEntered,y=n.onEntering,b=n.onExit,C=n.onExited,E=n.onExiting,I=n.style,S=n.timeout,T=void 0===S?a:S,j=n.TransitionComponent,N=void 0===j?l.ZP:j,A=(0,r.Z)(n,m),D=o.useRef(null),R=(0,p.Z)(g.ref,e),z=(0,p.Z)(D,R),F=function(n){return function(e){if(n){var t=D.current;void 0===e?n(t):n(t,e)}}},B=F(y),G=F((function(n,e){(0,f.n)(n);var r=(0,f.C)({style:I,timeout:T,easing:x},{mode:"enter"});n.style.webkitTransition=t.transitions.create("opacity",r),n.style.transition=t.transitions.create("opacity",r),w&&w(n,e)})),H=F(Z),P=F(E),K=F((function(n){var e=(0,f.C)({style:I,timeout:T,easing:x},{mode:"exit"});n.style.webkitTransition=t.transitions.create("opacity",e),n.style.transition=t.transitions.create("opacity",e),b&&b(n)})),L=F(C);return(0,h.jsx)(N,(0,i.Z)({appear:u,in:k,nodeRef:D,onEnter:G,onEntered:H,onEntering:B,onExit:K,onExited:L,onExiting:P,addEndListener:function(n){c&&c(D.current,n)},timeout:T},A,{children:function(n,e){return o.cloneElement(g,(0,i.Z)({style:(0,i.Z)({opacity:0,visibility:"exited"!==n||k?void 0:"hidden"},v[n],I,g.props.style),ref:z},e))}}))})),x=t(7225);function k(n){return(0,x.Z)("MuiBackdrop",n)}(0,t(5878).Z)("MuiBackdrop",["root","invisible"]);var w=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Z=(0,s.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,t.invisible&&e.invisible]}})((function(n){var e=n.ownerState;return(0,i.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})})),y=o.forwardRef((function(n,e){var t,o,s=(0,u.Z)({props:n,name:"MuiBackdrop"}),l=s.children,d=s.component,f=void 0===d?"div":d,p=s.components,m=void 0===p?{}:p,v=s.componentsProps,x=void 0===v?{}:v,y=s.className,b=s.invisible,C=void 0!==b&&b,E=s.open,I=s.transitionDuration,S=s.TransitionComponent,T=void 0===S?g:S,j=(0,r.Z)(s,w),N=(0,i.Z)({},s,{component:f,invisible:C}),A=function(n){var e=n.classes,t={root:["root",n.invisible&&"invisible"]};return(0,c.Z)(t,k,e)}(N);return(0,h.jsx)(T,(0,i.Z)({in:E,timeout:I},j,{children:(0,h.jsx)(Z,{"aria-hidden":!0,as:null!=(t=m.Root)?t:f,className:(0,a.Z)(A.root,y),ownerState:(0,i.Z)({},N,null==(o=x.root)?void 0:o.ownerState),classes:A,ref:e,children:l})}))}))},3967:function(n,e,t){t.d(e,{Z:function(){return o}});t(2791);var r=t(886),i=t(9691);function o(){return(0,r.Z)(i.Z)}},4999:function(n,e,t){t.d(e,{C:function(){return i},n:function(){return r}});var r=function(n){return n.scrollTop};function i(n,e){var t,r,i=n.timeout,o=n.easing,a=n.style,c=void 0===a?{}:a;return{duration:null!=(t=c.transitionDuration)?t:"number"===typeof i?i:i[e.mode]||0,easing:null!=(r=c.transitionTimingFunction)?r:"object"===typeof o?o[e.mode]:o,delay:c.transitionDelay}}},456:function(n,e,t){function r(n){this.message=n}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var i="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(n){var e=String(n).replace(/=+$/,"");if(e.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,i,o=0,a=0,c="";i=e.charAt(a++);~i&&(t=o%4?64*t+i:i,o++%4)?c+=String.fromCharCode(255&t>>(-2*o&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return c};function o(n){var e=n.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(i(n).replace(/(.)/g,(function(n,e){var t=e.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(e)}catch(n){return i(e)}}function a(n){this.message=n}a.prototype=new Error,a.prototype.name="InvalidTokenError",e.Z=function(n,e){if("string"!=typeof n)throw new a("Invalid token specified");var t=!0===(e=e||{}).header?0:1;try{return JSON.parse(o(n.split(".")[t]))}catch(n){throw new a("Invalid token specified: "+n.message)}}}}]);
//# sourceMappingURL=2749.23808956.chunk.js.map