"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[2951],{2951:function(e,t,n){n.r(t);var r=n(1413),a=n(4165),o=n(5861),i=n(9439),s=n(2791),c=n(6960),l=n(6667),u=n(2102),d=n(3853),h=n(7811),p=n(8848),f=n(81),m=n(4813),y=n(3378),x=n(2783),g=n(4561),v=n(4781),Z=n(2265),b=n(6561),k=n(184);t.default=function(e){var t,n,w=s.useState([]),C=(0,i.Z)(w,2),j=C[0],I=C[1],N=s.useState(!0),S=(0,i.Z)(N,2),D=S[0],R=S[1],P=s.useState(),E=(0,i.Z)(P,2),L=E[0],T=E[1],V=s.useState(!1),A=(0,i.Z)(V,2),U=(A[0],A[1]),F=s.useState(!1),q=(0,i.Z)(F,2),O=q[0],G=q[1],_=s.useState(0),B=(0,i.Z)(_,2),K=(B[0],B[1]),J=s.useState(!1),z=(0,i.Z)(J,2),M=z[0],W=z[1],H=[{header:"Explore mintboxes",description:"",content:[{UID:"a",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:"All"}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--indianEquity"),bgColor:h.Z.getPropertyValue("--lowestRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3}})},show:!0},{UID:"b",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:"Watchlisted"}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--secondaryGreen"),bgColor:h.Z.getPropertyValue("--conservativeRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"Watchlist"}})},show:!0},{UID:"c",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"bodyTextLight",children:"Built for"}),(0,k.jsx)("div",{className:"header2dark",children:"your risk"})]}),btnColor:h.Z.getPropertyValue("--internationalEquity"),bgColor:h.Z.getPropertyValue("--moderateRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"Recommended"}})},show:!0}]},{header:"Sorted by risk level",description:"",content:[{UID:"a",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:(0,y.i1)(1)}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--indianEquity"),bgColor:h.Z.getPropertyValue("--lowestRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"RiskLevel",RISKLEVEL:1}})},show:!0},{UID:"b",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:(0,y.i1)(2)}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--secondaryGreen"),bgColor:h.Z.getPropertyValue("--conservativeRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"RiskLevel",RISKLEVEL:2}})},show:!0},{UID:"c",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:(0,y.i1)(3)}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--gold"),bgColor:h.Z.getPropertyValue("--moderateRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"RiskLevel",RISKLEVEL:3}})},show:!0},{UID:"d",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:(0,y.i1)(4)}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--peach"),bgColor:h.Z.getPropertyValue("--secondHeighestRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"RiskLevel",RISKLEVEL:4}})},show:!0},{UID:"e",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"header2dark",children:(0,y.i1)(5)}),(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"})]}),btnColor:h.Z.getPropertyValue("--internationalEquity"),bgColor:h.Z.getPropertyValue("--highestRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"RiskLevel",RISKLEVEL:5}})},show:!0}]},{header:"Sorted by investment horizon",description:"",content:[{UID:"a",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"}),(0,k.jsx)("div",{className:"header2dark",children:"for 1-3 years"})]}),btnColor:h.Z.getPropertyValue("--darkGreen"),bgColor:"#ECFBF3",onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"DurationId",DURATIONID:1}})},show:!0},{UID:"b",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"}),(0,k.jsx)("div",{className:"header2dark",children:"for 3-5 years"})]}),btnColor:h.Z.getPropertyValue("--secondaryGreen"),bgColor:h.Z.getPropertyValue("--conservativeRisk"),onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"DurationId",DURATIONID:2}})},show:!0},{UID:"c",heading:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"bodyTextLight",children:"mintboxes"}),(0,k.jsx)("div",{className:"header2dark",children:"for 5+ years"})]}),btnColor:h.Z.getPropertyValue("--purple"),bgColor:"#ECE7FA",onClick:function(){e.history.push({pathname:"/list",state:{type:3,query:"DurationId",DURATIONID:3}})},show:!0}]}];s.useEffect((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:R(!1);case 3:case"end":return e.stop()}}),e)}))),[]);var $=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.get(p.Z.model.user).then(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t.userData.id);case 2:return e.next=4,X();case 4:return e.next=6,Y(t.userData.id);case 6:T(t.userData);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c.Am.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get(p.Z.model.clientData).then(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var o,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n){e.next=15;break}return e.next=3,f.Z.getClient(t).then((function(e){return e}));case 3:if(!0!==(o=e.sent).type){e.next=13;break}return i=JSON.parse(o.data),s=i.reduce((function(e,t){return(0,r.Z)((0,r.Z)({},e),t)}),{}),console.log("Get Client API :",s),U(1===s.Client[0].IsProfileComplete),G(0!==s.SmallcaseInfo.length),K(s.RiskInfo[0].RiskScore||0),e.next=13,p.Z.set(p.Z.model.clientData,JSON.stringify(s));case 13:e.next=18;break;case 15:G(0!==n.SmallcaseInfo.length),U(1===n.Client[0].IsProfileComplete),K(n.RiskInfo[0].RiskScore||0);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get(p.Z.model.dashboard).then(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=11;break}return e.next=3,f.Z.getDashboardData().then((function(e){return e}));case 3:if(!0!==(n=e.sent).type){e.next=9;break}return console.log("Get Dashboard API: ",n.data),e.next=8,p.Z.set(p.Z.model.dashboard,JSON.stringify(n.data));case 8:I(n.data);case 9:e.next=12;break;case 11:I(t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get(p.Z.model.portfolio).then(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var o,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n){e.next=15;break}return e.next=3,f.Z.getPortfolio(t).then((function(e){return e}));case 3:if(!0!==(o=e.sent).type){e.next=13;break}return e.next=7,JSON.parse(o.data);case 7:return i=e.sent,s=i.reduce((function(e,t){return(0,r.Z)((0,r.Z)({},e),t)}),{}),console.log("Get portfolio API :",s),W(s.PortfolioConsolidated&&0!==Number(s.PortfolioConsolidated[0].PortfolioBalance)),e.next=13,p.Z.set(p.Z.model.portfolio,JSON.stringify(s));case 13:e.next=16;break;case 15:W(n.PortfolioConsolidated&&0!==Number(n.PortfolioConsolidated[0].PortfolioBalance));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var t=[{UID:"a",SubTitle:"Invest using your demat account",Description:"Smart portfolios await. Securely link your demat account to start investing!",ActionText:"Link demat account",onClick:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.getSmallcaseTransactionId({intent:"CONNECT"}).then((function(e){return e}));case 2:if(!(t=e.sent).type){e.next=11;break}if(console.log("Trx id =>>",t.data.data.transactionId),void 0!==window.sc){e.next=9;break}return console.log("Initializing Smallcase"),e.next=9,(0,Z.B3)();case 9:return e.next=11,window.sc.triggerTransaction({transactionId:t.data.data.transactionId}).then((function(e){console.log(e),e&&(0,Z.pl)(L.id,e.smallcaseAuthToken,e.broker).then((function(e){console.log(e),e?(p.Z.remove(p.Z.model.clientData),c.Am.success("Demat linked")):c.Am.error("Demat already linked with another mintbox account")}))})).catch((function(e){"user_cancelled"!==e.message&&c.Am.error("Something went wrong! Try again.")}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Theme:"DARKGREEN",URL:b.r2+"link_demat.webp",show:!O},{UID:"b",SubTitle:"Don't have a demat? Open one now!",Description:"Enter the world of stock markets by openeing your first demat account",ActionText:"Open demat account",onClick:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==window.sc){e.next=4;break}return console.log("Initializing Smallcase"),e.next=4,(0,Z.B3)();case 4:window.sc.signup().then((function(){console.log("signup flow has now ended")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Theme:"GREEN",URL:b.r2+"open_demat.webp",show:!O}];return(0,k.jsx)(v.Z,{navigation:e.history,type:"boxCard",component:{content:t.filter((function(e){return e.show}))}})},te=function(t){switch(t.sectionType){case"header_sec":return(0,k.jsx)(ee,{});case"video_slider":return(0,k.jsx)(m.Z,{navigation:e.history,type:"videoView",section:t});case"recently_view":return(0,k.jsx)(x.Z,{navigation:e.history,type:3,header:"Recently viewed mintboxes"});default:return(0,k.jsx)(k.Fragment,{})}};return D?(0,k.jsxs)("div",{style:{flex:1},children:[(0,k.jsx)(u.Z,{header:"Invest in mintboxes",right:"help",screenType:"Invest",navigation:e.history}),(0,k.jsx)(g.Z,{})]}):(0,k.jsxs)("div",{className:"mainContainer",children:[(0,k.jsx)(u.Z,{header:"Invest in mintboxes",navigation:e.history}),(0,k.jsxs)("div",{className:"dataContainer px-0",children:[(0,k.jsxs)("div",{className:"searchBar",style:{marginBottom:"0"},onClick:function(){e.history.push("Invest/Search/Mintboxes")},children:[(0,k.jsx)(d.jRj,{size:20,style:{margin:"0 4%",color:h.Z.getPropertyValue("--secondaryGreen")}}),(0,k.jsx)("div",{className:"searchInput",children:"Search by mintbox name"})]}),M?null===j||void 0===j||null===(t=j.filter((function(e){return"LINKED_DEMAT"===e.stageName}))[0])||void 0===t?void 0:t.dashboardSection.slice(0,2).map((function(e){return te(e)})):null===j||void 0===j||null===(n=j.filter((function(e){return"NEW_USER"===e.stageName}))[0])||void 0===n?void 0:n.dashboardSection.slice(0,3).map((function(e){return te(e)})),H.map((function(t,n){return(0,k.jsx)(v.Z,{navigation:e.history,type:"smallBox",component:t},n)}))]}),(0,k.jsx)(l.Z,{})]})}},907:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3878:function(e,t,n){function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},5267:function(e,t,n){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},9439:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(3878);var a=n(181),o=n(5267);function i(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||(0,a.Z)(e,t)||(0,o.Z)()}},181:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(907);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=2951.fa095c9a.chunk.js.map