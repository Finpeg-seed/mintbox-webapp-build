"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2979],{8322:function(e,t,n){var i=n(2791),r=n(7811),a=n(184);t.Z=function(e){var t=e.stepsArray;return i.useEffect((function(){document.getElementById("sideline").style.marginBottom=document.getElementById("abcd").lastChild.offsetHeight+"px"}),[]),(0,a.jsxs)("div",{style:{width:"90%",display:"flex"},children:[(0,a.jsx)("div",{id:"sideline",style:{background:"linear-gradient(#58985F,#C2DC55)",position:"relative",left:"12px",top:"24px",width:"3px"}}),(0,a.jsx)("div",{id:"abcd",children:t.map((function(e,t){return(0,a.jsxs)("div",{style:{display:"flex",marginTop:"6%"},className:"indexStep",children:[(0,a.jsx)("div",{className:"solidCircleNumber",style:{marginRight:"16px"},children:t+1}),(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsx)("div",{className:"header1dark",style:{color:r.Z.getPropertyValue("--darkGreen")},children:e.title}),(0,a.jsx)("div",{className:"smallTextLight",children:e.description})]})]},t)}))})]})}},2102:function(e,t,n){n(2791);var i=n(8820),r=n(9126),a=n(3853),s=n(8617),o=n(7811),l=n(184);t.Z=function(e){var t=e.header,n=e.navigation,c=e.screenType,d=e.backAction,u=void 0===d?function(){n.goBack()}:d,h=e.right,p=e.rightAction,m=void 0===p?function(){}:p,f=e.isWatchlisted,y=void 0!==f&&f,x=e.onWatchlistIconClick,g=void 0===x?function(){}:x,v=e.onShareIconClick,j=void 0===v?function(){}:v,k=e.onHeaderClick,b=void 0===k?function(){}:k;return(0,l.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==c&&(0,l.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,l.jsx)(a.Ao2,{color:o.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return u()}})}),(0,l.jsx)("div",{style:{flex:1},children:(0,l.jsx)("span",{className:"screenTitle",onClick:function(){return b()},children:t})}),(0,l.jsx)("div",{style:{display:"flex"},children:function(){switch(h){case"bookmark-share":return(0,l.jsxs)("span",{children:[y?(0,l.jsx)(r.vw0,{className:"secondaryGreen",size:24,onClick:g}):(0,l.jsx)(r.flH,{className:"secondaryGreen",size:24,onClick:g}),(0,l.jsx)(s.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:j})]});case"tip":return(0,l.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return m()},children:["Tip ",(0,l.jsx)(i.cuw,{size:10})]});default:return h?(0,l.jsx)("span",{className:"greenChipHeader",onClick:function(){m()},children:h}):(0,l.jsx)(l.Fragment,{})}}()})]})}},3446:function(e,t,n){n.r(t);n(2791);var i=n(2102),r=n(8820),a=n(8322),s=n(7811),o=n(184);t.default=function(e){var t=[{title:"Answer some quick questions",description:"This helps us asses your objective and the amount required at maturity"},{title:"Get a comprehensive plan",description:"You get a comprehensive plan and flexibility to customize the plan"},{title:"A smart portfolio for the plan",description:"A hyper-customized portfolio designed to maximize the chance of achieving the goal"},{title:"Relax and let our dynamic goal engine do the hard work",description:(0,o.jsxs)("span",{children:["Our unique dynamic planning keeps your portfolio aligned with changing objectives. Details here -",(0,o.jsx)("a",{className:"secondaryGreen",style:{borderBottom:"1px solid "+s.Z.getPropertyValue("--secondaryGreen"),textDecoration:"none"},href:"https://mintbox.ai/blog/financial-goal-planning-a-dynamic-programming-approach/",target:"_blank",rel:"noreferrer",children:" Financial Goal Planning at mintbox \u2013 Dynamic approach"})]})}];return(0,o.jsxs)("div",{className:"mainContainer",children:[(0,o.jsx)(i.Z,{header:"Plan a financial goal",navigation:e.history}),(0,o.jsx)("div",{className:"dataContainer",children:(0,o.jsx)(a.Z,{stepsArray:t})}),(0,o.jsx)("div",{className:"footer",children:(0,o.jsxs)("button",{className:"solidButton",onClick:function(){e.history.push("/Goals/select-goal")},children:["Get started ",(0,o.jsx)(r.Td4,{size:12})]})})]})}},9983:function(e,t,n){n.d(t,{w_:function(){return c}});var i=n(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),s=function(){return s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){return e&&e.map((function(e,t){return i.createElement(e.tag,s({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return i.createElement(d,s({attr:s({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var n,r=e.attr,a=e.size,l=e.title,c=o(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==a?i.createElement(a.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=2979.e5190073.chunk.js.map