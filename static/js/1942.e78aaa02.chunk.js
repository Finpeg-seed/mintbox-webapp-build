"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[1942,7920],{6561:function(e,n,t){t.d(n,{D4:function(){return i},r2:function(){return r}});var r="https://d3etfstcuyoos5.cloudfront.net/app-images/imgs/",i=[{Id:0,Name:"by AMC",imgSource:r+"mintbox_logo.svg"},{Id:1,Name:"Aditya Birla Sun Life Mutual Fund",imgSource:r+"ABC.webp"},{Id:2,Name:"HDFC Mutual Fund",imgSource:r+"HDFC.webp"},{Id:3,Name:"ICICI Prudential Mutual Fund",imgSource:r+"ICICI.webp"},{Id:5,Name:"SBI Mutual Fund",imgSource:r+"SBI.webp"},{Id:6,Name:"Tata Mutual Fund",imgSource:r+"Tata.webp"},{Id:7,Name:"Invesco Mutual Fund",imgSource:r+"Invesco.webp"},{Id:8,Name:"Quantum Mutual Fund",imgSource:r+"Quantum.webp"},{Id:9,Name:"UTI Mutual Fund",imgSource:r+"UTI.webp"},{Id:10,Name:"IDFC Mutual Fund",imgSource:r+"IDFC.webp"},{Id:12,Name:"DSP Blackrock",imgSource:r+"DSP.webp"},{Id:13,Name:"Kotak Mutual Fund",imgSource:r+"Kotak.webp"},{Id:15,Name:"Mirae Asset Management",imgSource:r+"Mirae.webp"},{Id:16,Name:"Franklin Templeton",imgSource:r+"Franklin.webp"},{Id:18,Name:"Sundaram Mutual Fund",imgSource:r+"Sundaram.webp"},{Id:20,Name:"Motilal Oswal Mutual Fund",imgSource:r+"Motilal.webp"},{Id:22,Name:"HSBC Mutual Fund",imgSource:r+"HSBC.webp"},{Id:23,Name:"Edelweiss Mutual Fund",imgSource:r+"Edelweiss.webp"},{Id:24,Name:"L&T Mutual Fund",imgSource:r+"L&T.webp"},{Id:25,Name:"Axis Mutual Fund",imgSource:r+"AXIS.webp"},{Id:26,Name:"BNP Paribas Mutual Fund",imgSource:r+"BNP.webp"},{Id:27,Name:"IIFL Mutual Fund",imgSource:r+"IIFL.webp"},{Id:28,Name:"Taurus Mutual Fund",imgSource:r+"Taurus.webp"},{Id:31,Name:"Baroda Mutual Fund",imgSource:r+"BARODA.webp"},{Id:34,Name:"IDBI Mutual Fund",imgSource:r+"IDBI.webp"},{Id:36,Name:"PPFAS Mutual Fund",imgSource:r+"PPFAS.webp"},{Id:37,Name:"JM Financials Mutual Fund",imgSource:r+"JM.webp"},{Id:38,Name:"LIC Nomura Mutual Fund",imgSource:r+"LIC.webp"},{Id:39,Name:"Canara Robeco Mutual Fund",imgSource:r+"CANARA.webp"},{Id:40,Name:"Principal Mutual Fund",imgSource:r+"Principal.webp"},{Id:41,Name:"Indiabull Mutual Fund",imgSource:r+"Indiabulls.webp"},{Id:42,Name:"Mahindra Manulife Mutual Fund",imgSource:r+"Mahindra.webp"},{Id:45,Name:"Bharti AXA Mutual Fund",imgSource:r+"BOI.webp"},{Id:56,Name:"Nippon India Mutual Fund",imgSource:r+"Nippon.webp"},{Id:57,Name:"PGIM India Mutual Fund",imgSource:r+"PGIM.webp"},{Id:58,Name:"Navi Mutual Fund",imgSource:r+"NAVI.webp"},{Id:59,Name:"Shriram Mutual Fund",imgSource:r+"Shriram.webp"},{Id:60,Name:"Union KBC Mutual Fund",imgSource:r+"Union.webp"},{Id:61,Name:"Yes Mutual Fund",imgSource:r+"Yes.webp"},{Id:62,Name:"ITI Mutual Fund",imgSource:r+"ITI.webp"},{Id:63,Name:"Quant Mutual Fund",imgSource:r+"Quant.webp"},{Id:64,Name:"Trust Mutual Fund",imgSource:r+"Trust.webp"},{Id:65,Name:"LIC Mutual Fund",imgSource:r+"LIC.webp"},{Id:66,Name:"ICICI Mutual Fund",imgSource:r+"ICICI.webp"},{Id:67,Name:"Mirae Asset Mutual Fund",imgSource:r+"Mirae.webp"},{Id:68,Name:"Kotak Mahindra Mutual Fund",imgSource:r+"Kotak.webp"}]},1942:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(4165),i=t(5861),s=t(9439),a=t(1425),o=t(6561),l=t(8848),c=t(2791),u=t(4849),d=t(9126),x=t(3853),m=t(4771),p=t(6960),h=t(81),f=t(4561),g=t(2919),y=t(3411),v=t(6415),b=t(1601),j=t(5963),w=t(3378),k=t(7920),I=t(7811),N=t(184);function F(e){var n,t,F=e.location.state.type?e.location.state.type:3,S=e.location.state.query?e.location.state.query:"All",C=e.location.state.RISKLEVEL?e.location.state.RISKLEVEL:0,Z=e.location.state.DURATIONID?e.location.state.DURATIONID:0,M=c.useState(),A=(0,s.Z)(M,2),D=A[0],T=(A[1],c.useState(!0)),R=(0,s.Z)(T,2),L=R[0],P=R[1],E=c.useState([]),B=(0,s.Z)(E,2),V=B[0],H=B[1],W=c.useState([]),Y=(0,s.Z)(W,2),z=Y[0],G=(Y[1],c.useState([])),O=(0,s.Z)(G,2),q=O[0],U=O[1],Q=c.useState([]),K=(0,s.Z)(Q,2),_=K[0],J=K[1],X=c.useState([S]),$=(0,s.Z)(X,2),ee=$[0],ne=$[1],te=c.useState(""),re=(0,s.Z)(te,2),ie=re[0],se=re[1],ae=c.useState(0),oe=(0,s.Z)(ae,2),le=oe[0],ce=oe[1],ue=c.useState([]),de=(0,s.Z)(ue,2),xe=de[0],me=de[1],pe=c.useState([]),he=(0,s.Z)(pe,2),fe=he[0],ge=he[1],ye=1===F?[{key:"All",name:"All"},{key:"IsEquityFund",name:"Equity"},{key:"IsForeignFund",name:"Foreign"},{key:"IsLiquidFund",name:"Liquid"},{key:"IsGoldFund",name:"Gold"},{key:"IsDebtFund",name:"Debt"},{key:"IsSectoralFund",name:"Sectoral"},{key:"IsFactoralFund",name:"Factor"},{key:"IsThematicFund",name:"Thematic"},{key:"Watchlist",name:"Watchlisted"}]:2===F?[{key:"All",name:"All"},{key:"IsIndexFund",name:"Index"},{key:"IsLargeCapFund",name:"Large cap"},{key:"IsFlexiCapFund",name:"Flexi cap"},{key:"IsUSEquity",name:"US equity"},{key:"IsGoldFund",name:"Gold"},{key:"Watchlist",name:"Watchlisted"}]:[{key:"All",name:"All"},{key:"WealthCreator",name:"Wealth creator"},{key:"RiskLevel",name:(0,w.i1)(C),show:0!==C},{key:"DurationId",name:1===Z?"1-3 year":2===Z?"3-5 year":3===Z?"5+ years":15===Z?"Short term ":"",show:0!==Z}];c.useEffect((function(){document.getElementsByClassName("normalChip selected")[0].scrollIntoView()}),[ee]),c.useEffect((0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:P(!1);case 3:case"end":return e.stop()}}),e)}))),[]),c.useEffect((function(){ve()}),[V,ee]),c.useEffect((function(){je(ie)}),[q]),c.useEffect((function(){we(le)}),[xe]);var ve=function(){if(console.log("Apply filter",ee,V),3===F){if(ee.includes("All"))return void U(V.filter((function(e){return 0===e.IsCustom})));ee.includes("Fee")?U(V.filter((function(e){return"0"===e.Fee&&0===e.IsCustom}))):ee.includes("RiskLevel")?U(V.filter((function(e){return e.RiskLevel===C&&0===e.IsCustom}))):ee.includes("DurationId")?U(15===Z?V.filter((function(e){return 1===e.DurationId||2===e.DurationId})):V.filter((function(e){return e.DurationId===Z&&0===e.IsCustom}))):ee.includes("Recommended")?null!==D&&void 0!==D&&D.RiskInfo.length&&U(V.filter((function(e){return e.RiskLevel===D.RiskInfo[0].RiskScore&&0===e.IsCustom}))):ee.includes("WealthCreator")?U(V.filter((function(e){return 3===e.DurationId}))):ee.includes("Watchlist")&&(console.log(z),U(V.filter((function(e){return!e.IsCustom&&z.some((function(n){return Number(n.FundCode)===e.MintboxId}))}))))}else if(2===F){if(ee.includes("All"))return void U(V);U(V.filter((function(e){return ee.some((function(n){return"Watchlist"===n?z.some((function(n){return Number(n.FundCode)===e.FundCode})):1===e[n]}))})))}else if(1===F){if(ee.includes("All"))return void U(V);U(V.filter((function(e){return ee.some((function(n){return"Watchlist"===n?z.some((function(n){return n.FundCode===e.Symbol})):1===e[n]}))})))}},be=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),1!==F){e.next=13;break}return e.prev=2,e.next=5,l.Z.get(l.Z.model.allEtfs).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}H(n),P(!1),e.next=14;break;case 5:return e.next=7,h.Z.getAllETFs().then((function(e){return e}));case 7:if(!0!==(t=e.sent).type){e.next=14;break}return console.log("Get All ETFs API: ",t.data),e.next=12,l.Z.set(l.Z.model.allEtfs,JSON.stringify(t.data));case 12:H(t.data),P(!1);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),P(!1),p.Am.error(e.t0);case 11:e.next=34;break;case 13:if(2!==F){e.next=25;break}return e.prev=14,e.next=17,l.Z.get(l.Z.model.allMutualFunds).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}H(n),P(!1),e.next=14;break;case 5:return e.next=7,h.Z.getFundsData().then((function(e){return e}));case 7:if(!0!==(t=e.sent).type){e.next=14;break}return console.log("Get All MFs API: ",t.data),e.next=12,l.Z.set(l.Z.model.allMutualFunds,JSON.stringify(t.data));case 12:H(t.data),P(!1);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 17:e.next=23;break;case 19:e.prev=19,e.t1=e.catch(14),P(!1),p.Am.error(e.t1);case 23:e.next=34;break;case 25:return e.prev=25,e.next=28,l.Z.get(l.Z.model.allMintboxes).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}H(n),P(!1),e.next=14;break;case 5:return e.next=7,h.Z.getAllMintboxes(0).then((function(e){return e}));case 7:if(!0!==(t=e.sent).type){e.next=14;break}return console.log("Get All Mintboxes API: ",t.data),e.next=12,l.Z.set(l.Z.model.allMintboxes,JSON.stringify(t.data));case 12:H(t.data),P(!1);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 28:e.next=34;break;case 30:e.prev=30,e.t2=e.catch(25),P(!1),p.Am.error(e.t2);case 34:case"end":return e.stop()}}),e,null,[[2,7],[14,19],[25,30]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search",n,q),t=[].concat(q),n.length>0&&(i=n.split(" "),t=1===F?q.filter((function(e){return i.every((function(n){return e.ETFName.toLowerCase().indexOf(n.toLowerCase())>-1}))})):2===F?q.filter((function(e){return i.every((function(n){return e.FundName.toLowerCase().indexOf(n.toLowerCase())>-1}))})):q.filter((function(e){return i.every((function(n){return e.MintboxName.toLowerCase().indexOf(n.toLowerCase())>-1}))}))),me(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),we=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("sort",n,xe),t=xe.slice(),3!==F&&(0===n?t.sort((function(e,n){return n.OneYrReturn-e.OneYrReturn})):1===n?t.sort((function(e,n){return n.ThreeYrReturn-e.ThreeYrReturn})):2===n&&t.sort((function(e,n){return n.FiveYrReturn-e.FiveYrReturn}))),ge(t),J(t.slice(0,25));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(){J(fe.slice(0,_.length+10))},Ie=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(m.Z,{dataLength:fe.length,next:function(){return ke()},hasMore:_.length<fe.length,loader:(0,N.jsx)("center",{children:(0,N.jsx)(u.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})}),children:_.map((function(n,t){return(0,N.jsx)("div",{style:{padding:"4%",borderBottom:"1px solid #e5e5e5"},onClick:function(){return e.history.push("/ETF-detail/"+n.Symbol)},children:(0,N.jsxs)("div",{style:{display:"flex",gap:"4%"},children:[(0,N.jsx)(g.Z,{amcName:n.AMCName,height:"40px",width:"40px"}),(0,N.jsxs)("div",{style:{flex:"1"},children:[(0,N.jsx)("div",{className:"header2dark lineClamp",children:n.ETFName}),(0,N.jsx)("div",{className:"smallTextLight",style:{marginTop:"1%"},children:n.Asset})]}),(0,N.jsx)("div",{className:"header1dark",children:2===le?(0,N.jsx)(j.Z,{text:parseFloat(n.FiveYrReturn||0).toFixed(2)+"%",value:n.FiveYrReturn}):1===le?(0,N.jsx)(j.Z,{text:parseFloat(n.ThreeYrReturn||0).toFixed(2)+"%",value:n.ThreeYrReturn}):(0,N.jsx)(j.Z,{text:parseFloat(n.OneYrReturn||0).toFixed(2)+"%",value:n.OneYrReturn})})]})},t)}))})})},Ne=function(){return(0,N.jsx)(m.Z,{dataLength:fe.length,next:function(){return ke()},hasMore:_.length<fe.length,loader:(0,N.jsx)("center",{children:(0,N.jsx)(u.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})}),children:_.map((function(n,t){return(0,N.jsx)("div",{style:{padding:"4%",borderBottom:"1px solid "+I.Z.getPropertyValue("--light")},onClick:function(){return e.history.push("/fund-detail/"+n.FundCode)},children:(0,N.jsxs)("div",{style:{display:"flex",gap:"4%"},children:[(0,N.jsx)(g.Z,{amcName:n.AMCName,height:"40px",width:"40px"}),(0,N.jsxs)("div",{style:{flex:"1"},children:[(0,N.jsx)("div",{className:"header2dark lineClamp",children:n.FundName}),(0,N.jsx)("div",{className:"smallTextLight",style:{marginTop:"1%"},children:n.SchemeType})]}),(0,N.jsx)("div",{className:"header1dark",children:2===le?(0,N.jsx)(j.Z,{text:parseFloat(n.FiveYrReturn||0).toFixed(2)+"%",value:n.FiveYrReturn}):1===le?(0,N.jsx)(j.Z,{text:parseFloat(n.ThreeYrReturn||0).toFixed(2)+"%",value:n.ThreeYrReturn}):(0,N.jsx)(j.Z,{text:parseFloat(n.OneYrReturn||0).toFixed(2)+"%",value:n.OneYrReturn})})]})},t)}))})},Fe=function(){return(0,N.jsx)(m.Z,{dataLength:fe.length,next:function(){return ke()},hasMore:_.length<fe.length,initialScrollY:0,loader:(0,N.jsx)("center",{children:(0,N.jsx)(u.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})}),children:_.map((function(n){var t,r,i;return(0,N.jsxs)("div",{style:{padding:"4%",borderBottom:"1px solid "+I.Z.getPropertyValue("--light")},onClick:function(){e.history.push("/mintbox-detail/"+n.MintboxId)},children:[n.RiskLevel===(null===D||void 0===D||null===(t=D.RiskInfo)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.RiskScore)?(0,N.jsx)("div",{style:{marginBottom:"4%"},children:(0,N.jsxs)("span",{className:"smallTextLight",style:{backgroundColor:I.Z.getPropertyValue("--secondaryGreen"),padding:"4px 8px",borderRadius:"4px",whiteSpace:"nowrap",color:I.Z.getPropertyValue("--white")},children:[(0,N.jsx)("img",{src:o.r2+"like-white.webp",width:"14px",height:"14px",style:{marginRight:"4px"}})," Recommended for you"]})}):(0,N.jsx)(N.Fragment,{}),(0,N.jsxs)("div",{style:{display:"flex",gap:"4%"},children:[(0,N.jsx)(v.Z,{risk:n.RiskLevel,height:"40px",width:"40px"}),(0,N.jsx)("div",{style:{flex:"1"},children:(0,N.jsx)("div",{className:"header1dark",children:n.MintboxName})})]}),(0,N.jsx)("div",{className:"bodyTextLight",style:{margin:"4% 0",whiteSpace:"pre-line"},children:(0,N.jsx)(b.Z,{text:null===(i=n.About)||void 0===i?void 0:i.replaceAll('{"\\n"}',"\n\n")})}),(0,N.jsxs)("div",{style:{display:"flex"},children:[(0,N.jsxs)("div",{style:{flex:1},children:[(0,N.jsx)("div",{className:"smallTextLight",children:"5Y CAGR"}),(0,N.jsx)("div",{className:"header2dark",children:(0,N.jsx)(j.Z,{text:parseFloat(n.XIRR||0).toFixed(2)+"%",value:n.XIRR||0})})]}),(0,N.jsxs)("div",{style:{flex:1},children:[(0,N.jsx)("div",{className:"smallTextLight",children:"Min investment"}),(0,N.jsx)("div",{className:"header2dark",children:(0,y.A)(n.MinSIPAmount)})]}),(0,N.jsx)("div",{style:{flex:1}})]})]},n.MintboxId)}))})};return(0,N.jsxs)("div",{className:"mainContainer",children:[(0,N.jsxs)("div",{className:"sticky-top",style:{backgroundColor:I.Z.getPropertyValue("--white")},children:[(0,N.jsx)(k.default,{props:e}),(0,N.jsxs)("div",{className:"searchBar",style:{marginTop:"64px"},children:[(0,N.jsx)(x.jRj,{size:20,className:"secondaryGreen",style:{margin:"0 4%"}}),(0,N.jsx)("input",{className:"searchInput",placeholder:1===F?"Search by ETF name":2===F?"Search by mutual fund name":"Search by mintbox name",value:ie,onChange:function(e){se(e.target.value),je(e.target.value)}})]}),(0,N.jsx)("div",{style:{background:I.Z.getPropertyValue("--lightest"),border:"1px solid "+I.Z.getPropertyValue("--light"),padding:"2% 4%"},className:"hiddden-scrollbar",children:ye.filter((function(e){return!1!==e.show})).map((function(e){return(0,N.jsx)(a.Z,{label:e.name,className:ee.includes(e.key)?"normalChip selected":"normalChip",onClick:function(){ne([e.key]),ce(0)}},e.key)}))}),3===F?(0,N.jsx)(N.Fragment,{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"4% 4% 1% 4%"},children:[(0,N.jsxs)("div",{className:"header1dark",style:{flex:1},children:[1===ee.length?null===(n=ye.find((function(e){return e.key===ee[0]})))||void 0===n?void 0:n.name:"Filtered",1===F?" ETFs":2===F?" mutual funds":3===F?" mintboxes":""]}),(0,N.jsxs)("button",{onClick:function(){ce((le+1)%3),we((le+1)%3)},className:"greenChipHeader",style:{minWidth:"120px"},children:[(0,N.jsx)(d.pjk,{style:{paddingRight:"5px"},size:14}),2===le?"5 year return":1===le?"3 year return":"1 year return",(0,N.jsx)(d.fmn,{style:{paddingLeft:"5px"},size:14})]})]}),(0,N.jsx)("div",{style:{height:"3px",width:"8%",marginLeft:"4%",backgroundColor:I.Z.getPropertyValue("--primaryGreen"),borderRadius:"50%"}})]})]}),(0,N.jsx)("div",{className:"dataContainer px-0",children:L?(0,N.jsx)(f.Z,{}):(0,N.jsx)("div",{children:!ee.includes("Recommended")||null!==D&&void 0!==D&&null!==(t=D.RiskInfo[0])&&void 0!==t&&t.RiskScore?0===fe.length?(0,N.jsxs)("div",{style:{padding:"4%",margin:"4% 10%",textAlign:"center"},children:[(0,N.jsx)("img",{src:o.r2+"not-found.webp",width:"50%",style:{margin:"4% auto"}}),(0,N.jsx)("div",{style:{fontSize:"18px",fontWeight:"500",margin:"4% 0%"},children:"No results!"})]}):1===F?(0,N.jsx)(Ie,{}):2===F?(0,N.jsx)(Ne,{}):3===F?(0,N.jsx)(Fe,{}):"":(0,N.jsxs)("div",{style:{padding:"4%",margin:"4% 10%",textAlign:"center"},children:[(0,N.jsx)("img",{src:o.r2+"not-found.webp",width:"50%",style:{margin:"4% auto"}}),(0,N.jsx)("button",{className:"solidButton",onClick:function(){e.history.push("/risk-profile")},children:"Complete risk profile"})]})})})]})}},2919:function(e,n,t){var r=t(2791),i=t(6561),s=t(184);function a(e){var n=e.amcName,t=(e.type,e.height),r=e.width;return(0,s.jsx)("div",{style:{alignSelf:"flex-start"},children:(0,s.jsx)("img",{src:0!==i.D4.filter((function(e){return e.Name===n})).length?i.D4.filter((function(e){return e.Name===n}))[0].imgSource:i.D4[0].imgSource,style:{height:t,width:r}})})}n.Z=r.memo(a)},3411:function(e,n,t){function r(e){return(e=e>=1e7?"\u20b9 ".concat((e/1e7).toFixed(2)," cr"):e>=1e5?"\u20b9 ".concat((e/1e5).toFixed(2)," lac"):e>=1e3?"\u20b9 ".concat((e/1e3).toFixed(2)," k"):i(e)).replace("-","")}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=new Intl.NumberFormat("en-IN",{minimumFractionDigits:0,maximumFractionDigits:n}).format(e);return"\u20b9 ".concat(t)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"short"===n?r(Number(e)):i(Number(e),t)}t.d(n,{A:function(){return s}})},6415:function(e,n,t){var r=t(6561),i=t(2791),s=t(7811),a=t(3378),o=t(184);function l(e){var n=e.risk,t=e.height,i=e.width;return(0,o.jsx)("div",{style:{display:"flex",border:"1px solid "+s.Z.getPropertyValue("--light"),padding:"calc(".concat(t,"*10/100) 0"),borderRadius:"4px",height:t,width:i,backgroundColor:(0,a.MP)(n)},children:(0,o.jsx)("img",{src:r.r2+"wealth-creators.webp",style:{height:"calc(".concat(t,"*80/100)"),margin:"auto"}})})}n.Z=i.memo(l)},3413:function(e,n,t){t.d(n,{T:function(){return a},b:function(){return o}});var r=t(1413),i=(t(2791),t(71)),s=t(184);function a(e){var n=e.name,t=e.onPress,a=e.style,o=e.icon,l=void 0!==o&&o;return(0,s.jsxs)("button",{className:"mxButton",style:(0,r.Z)((0,r.Z)({},a),{},{alignItems:"center"}),onClick:t,children:[n," ",l?(0,s.jsx)(i.nQU,{style:{marginBottom:"2.5px"}}):null]})}function o(e){var n=e.name1,t=e.name2,r=e.onPress2,a=e.style1,o=e.style2,l=e.onPress1,c=e.icon1,u=void 0!==c&&c;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:"mxButton",style:a,onClick:l,children:[n," ",u?(0,s.jsx)(i.nQU,{style:{marginBottom:"2.5px"}}):null]}),(0,s.jsx)("button",{className:"mxButton",id:"button-2",style:o,onClick:r,children:t})]})}},1601:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(9439),i=t(2791),s=t(9126),a=t(7811),o=t(184);function l(e){var n=e.text,t=e.onViewChange,l=void 0===t?function(){}:t,c=i.useState(!0),u=(0,r.Z)(c,2),d=u[0],x=u[1];return i.useEffect((function(){l(!d)}),[d]),n?n.length<100?n:(0,o.jsxs)(o.Fragment,{children:[d?(null===n||void 0===n?void 0:n.slice(0,80))+"...":n,(0,o.jsxs)("span",{onClick:function(e){e.stopPropagation(),x(!d)},style:{color:a.Z.getPropertyValue("--darkGreen"),fontWeight:"500",whiteSpace:"nowrap"},children:[d?" Read More ":" Read Less ",d?(0,o.jsx)(s.IAR,{size:12}):(0,o.jsx)(s.E0f,{size:12})]})]}):""}},5963:function(e,n,t){var r=t(7811),i=t(184);n.Z=function(e){var n=e.text,t=e.value;return Number(t)>0?(0,i.jsx)("span",{className:"secondaryGreen",children:n}):Number(t)<0?(0,i.jsx)("span",{style:{color:r.Z.getPropertyValue("--red")},children:n}):(0,i.jsx)("span",{children:n})}},3378:function(e,n,t){t.d(n,{MP:function(){return s},f3:function(){return a},i1:function(){return i}});var r=t(7811),i=function(e){switch(e){case 1:return"Super conservative";case 2:return"Conservative";case 3:return"Moderate";case 4:return"Aggressive";case 5:return"Super aggressive";case 6:return"Very aggressive";default:return""}},s=function(e){switch(e){case 1:return r.Z.getPropertyValue("--lowestRisk");case 2:return r.Z.getPropertyValue("--conservativeRisk");case 3:return r.Z.getPropertyValue("--moderateRisk");case 4:return r.Z.getPropertyValue("--secondHeighestRisk");case 5:case 6:return r.Z.getPropertyValue("--highestRisk");default:return""}},a=function(e){switch(e){case 1:return"#3395FF";case 2:return r.Z.getPropertyValue("--darkGreen");case 3:return r.Z.getPropertyValue("--gold");case 4:return r.Z.getPropertyValue("--internationalEquity");case 5:return"#FF5A5F";case 6:return r.Z.getPropertyValue("--highestRisk");default:return""}}},5473:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),i=t(5861),s=t(9439),a=t(2791),o=t(9221),l=t(4026),c=t(8577),u=t(6561),d=t(3413),x=t(6856),m=t(81),p=t(6960),h=t(184);function f(e){e.props;var n=e.handleToClose,t=e.open,f=a.useState(""),g=(0,s.Z)(f,2),y=g[0],v=g[1],b=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(10!==y.length){e.next=5;break}return e.next=3,m.Z.sendAppLinks(y).then((function(e){return e}));case 3:e.sent.type?(p.Am.success("Message sent"),v(""),n()):p.Am.error("Try again ...");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(o.Z,{open:t,onClose:n,fullWidth:!0,maxWidth:"sm",children:[(0,h.jsx)(l.Z,{style:{},children:(0,h.jsx)(c.Z,{children:(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{width:"80%"},children:[(0,h.jsxs)("div",{style:{fontSize:"26px",fontWeight:"500",lineHeight:"36px",whiteSpace:"pre",color:"#333"},children:["Get app download","\n","link on your phone"]}),(0,h.jsx)("div",{className:"mxMinSubHead",style:{fontWeight:"500",marginTop:"20px"},children:"Enter your phone number"}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,h.jsx)("input",{className:"normalInput",style:{textTransform:"capitalize",width:"50%"},type:"text",maxLength:10,placeholder:"9090909090",id:"Full-name",value:y,onChange:function(e){var n=e.target.value.replace(/\D/g,"");v(n)}}),(0,h.jsx)(d.T,{name:"Get link",style:{padding:"7.5px 15px 7.5px 15px",marginTop:"0px",borderRadius:"8px",marginLeft:"20px",marginBottom:"5px"},onPress:function(){return b()}})]})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,h.jsx)("div",{style:{borderLeft:"1px dashed #E5E5E5",height:"100px"}}),(0,h.jsx)("div",{style:{flex:1,marginLeft:"-8px"},children:"or"}),(0,h.jsx)("div",{style:{borderLeft:"1px dashed #E5E5E5",height:"100px"}})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",width:"40%"},children:[(0,h.jsxs)("div",{className:"mxMinSubHead",style:{color:"#333",fontWeight:"500",whiteSpace:"pre",lineHeight:"20px",textAlign:"center",marginBottom:"10px"},children:["Scan QR code","\n","to download"]}),(0,h.jsx)("img",{src:u.r2+"QR-code_new.webp",style:{height:"96px",width:"96px"}})]})]})})}),(0,h.jsx)("div",{style:{display:"flex",position:"absolute",top:"15px",right:"20px"},children:(0,h.jsx)(x.FU5,{onClick:n,size:20,style:{color:"#000",cursor:"pointer"}})}),(0,h.jsx)("style",{type:"text/css",children:"\n            .MuiPaper-rounded {\n                    border-radius: 32px;\n                    // min-height: 250px;\n                }\n            .MuiDialogContent-root {\n                flex: 1 1 auto;\n                padding: 18px 44px;\n                overflow-y: auto;\n                // -webkit-overflow-scrolling: touch;\n                }\n            "})]})}},7920:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(9439),i=t(6561),s=t(2791),a=t(629),o=t(6355),l=t(4165),c=t(5861),u=t(1413),d=t(1393),x=t(3191),m=t(5818),p=t(3721),h=t(1123),f=t(3413),g=t(8848),y=t(184),v=(0,d.ZP)((function(e){return(0,y.jsx)(x.Z,(0,u.Z)({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var n=e.theme;return{border:"1px solid ".concat(n.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},margin:"0px"}})),b=(0,d.ZP)((function(e){return(0,y.jsx)(m.Z,(0,u.Z)({expandIcon:(0,y.jsx)("img",{src:i.r2+"Down-Arrow.svg",style:{height:"8px"}})},e))}))((function(e){var n=e.theme;return{backgroundColor:(n.palette.mode,"#fff"),flexDirection:"row","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(-90deg)"},"& .MuiAccordionSummary-content":{marginLeft:n.spacing(1)}}})),j=(0,d.ZP)(p.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)",width:"100vw",backgroundColor:"#FAFAFA"}}));function w(e){var n=e.props,t=e.className,a=e.black,o=s.useState("panel1"),u=(0,r.Z)(o,2),d=u[0],x=u[1],m=s.useState(!1),p=(0,r.Z)(m,2),w=p[0],k=p[1];s.useEffect((0,c.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get(g.Z.model.user).then((function(e){e&&e.userData&&e.userData.id?k(!0):k(!1)}));case 2:case"end":return e.stop()}}),e)}))));var I;return(0,y.jsxs)("div",{className:t,style:{flexDirection:"column"},children:[a?(0,y.jsx)("div",{style:{padding:"8px 17px 16px 14px",backgroundColor:"#001302"},children:(0,y.jsxs)("div",{onClick:function(){return n.history.push("/mintbox-black")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"mxMinHead",style:{paddingLeft:"10px",color:"#A1EAC4",fontWeight:"400"},children:"mintbox black"}),(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg",style:{marginTop:"10px"}})]})}):(0,y.jsx)("div",{style:{padding:"8px 17px 16px 14px",backgroundColor:"#001302"},children:(0,y.jsxs)("div",{onClick:function(){return n.history.push("/")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"mxMinHead",style:{paddingLeft:"10px",color:"#C2DC55",fontWeight:"400"},children:"mintbox"}),(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg",style:{marginTop:"10px"}})]})}),(0,y.jsxs)(v,{expanded:"panel1"===d,onChange:(I="panel1",function(e,n){x(!!n&&I)}),children:[(0,y.jsx)("style",{type:"text/css",children:'\n                    .css-ahj2mt-MuiTypography-root {\n                        margin: 0;\n                        font-family: "DM Sans";\n                        font-size: 16px;\n                        font-weight: 400;\n                        color: #333;\n                        line-height: 21px;             \n                    }\n                '}),(0,y.jsx)(b,{"aria-controls":"panel1d-content",id:"panel1d-header",children:(0,y.jsx)(h.Z,{className:"mxMinHead",style:{color:"#333",fontFamily:"DM Sans !important"},children:"Discover mintboxes"})}),(0,y.jsxs)(j,{children:[(0,y.jsxs)("div",{onClick:function(){return n.history.push({pathname:"/all-funds",state:{type:3,query:"All"}})},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"menuSubTxt",style:{paddingLeft:"10px"},children:"All"}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg"})})]}),(0,y.jsxs)("div",{onClick:function(){return n.history.push("/financial-goal")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"24px",alignItems:"center"},children:[(0,y.jsx)("div",{className:"menuSubTxt",style:{paddingLeft:"10px"},children:"Goal planners"}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg"})})]}),(0,y.jsxs)("div",{onClick:function(){return n.history.push("/long-wealth-creator")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"24px",alignItems:"center"},children:[(0,y.jsx)("div",{className:"menuSubTxt",style:{paddingLeft:"10px"},children:"Wealth creators"}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg"})})]}),(0,y.jsxs)("div",{onClick:function(){return n.history.push("/short-wealth-creator")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"24px",alignItems:"center"},children:[(0,y.jsx)("div",{className:"menuSubTxt",style:{paddingLeft:"10px"},children:"Short-term mintboxes"}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg"})})]}),(0,y.jsxs)("div",{onClick:function(){return n.history.push("/build-mintbox")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"24px",alignItems:"center"},children:[(0,y.jsx)("div",{className:"menuSubTxt",style:{paddingLeft:"10px"},children:"Build your own mintbox"}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg"})})]})]})]}),(0,y.jsx)("div",{style:{padding:"0px 17px 12px 14px",borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5"},children:(0,y.jsxs)("div",{onClick:function(){return n.history.push("/design-mintbox")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"mxMinHead",style:{paddingLeft:"10px",color:"#333",fontWeight:"400"},children:"How mintboxes are created"}),(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg",style:{marginTop:"10px"}})]})}),(0,y.jsx)("div",{style:{padding:"0px 17px 12px 14px",borderBottom:"1px solid #e5e5e5"},children:(0,y.jsxs)("div",{onClick:function(){return n.history.push("/investing-masterclass")},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"mxMinHead",style:{paddingLeft:"10px",color:"#333",fontWeight:"400"},children:"Investing masterclass"}),(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg",style:{marginTop:"10px"}})]})}),(0,y.jsx)("div",{style:{padding:"0px 17px 12px 14px",borderBottom:"1px solid #e5e5e5"},children:(0,y.jsxs)("div",{onClick:function(){window.location.href="https://mintbox.ai/blog"},style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{className:"mxMinHead",style:{paddingLeft:"10px",color:"#333",fontWeight:"400"},children:"Blog"}),(0,y.jsx)("img",{className:"icon-forward",src:i.r2+"Down-Arrow.svg",style:{marginTop:"10px"}})]})}),(0,y.jsx)("div",{style:{padding:"8px 22px 0px 22px"},children:w?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(f.T,{name:"Go to dashboard",onPress:function(){return n.history.push("/dashboard")},style:{border:"1px solid #58985F",width:"100%",backgroundColor:"transparent",fontSize:"14px",padding:"13px 16px 13px 16px"}})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.T,{name:"Log in",onPress:function(){return n.history.push("/signup")},style:{border:"1px solid #58985F",width:"100%",backgroundColor:"transparent",fontSize:"14px",padding:"13px 16px 13px 16px"}}),(0,y.jsx)(f.T,{name:"Sign up",onPress:function(){return n.history.push("/signup")},style:{border:"1px solid #58985F",width:"100%",backgroundColor:"#58985F",color:"#fff",fontSize:"14px",padding:"13px 16px 13px 16px"}})]})})]})}var k=t(5473);function I(e){var n=e.props,t=e.black,l=void 0!==t&&t,c=((0,s.useRef)(null),s.useState(!1)),u=(0,r.Z)(c,2),d=u[0],x=u[1],m=function(){return x(!d)};console.log("props",n);var p=s.useState(!1),h=(0,r.Z)(p,2),f=h[0],g=h[1],v=function(){g(!1)};return window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight?document.getElementById("nav").classList.add("navbar-sticky"):document.getElementById("nav").classList.remove("navbar-sticky")})),(0,y.jsx)("div",{children:l?(0,y.jsxs)("nav",{id:"nav",className:"navbar",style:{backgroundColor:"#041B13"},children:[(0,y.jsx)("ul",{style:{paddingLeft:0},children:(0,y.jsx)("img",{onClick:function(){return n.history.push("/mintbox-black")},src:i.r2+"mxMintboxBlack.svg",alt:"logo",className:"navbar--logo2"})}),(0,y.jsxs)("ul",{className:d?"navbar--link active":"navbar--link",children:[(0,y.jsx)(w,{props:n,className:"mxDesktopHidden",black:!1}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/",className:"navbar--link-item mxDesktopVisible",children:"mintbox "})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/design-mintbox",className:"navbar--link-item mxDesktopVisible",style:{color:"#A1EAC4"},children:"How are mintboxes created?"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/investing-masterclass",className:"navbar--link-item mxDesktopVisible",style:{color:"#A1EAC4"},children:"Investing masterclass"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"https://mintbox.ai/blog",className:"navbar--link-item mxDesktopVisible",style:{color:"#A1EAC4"},children:"Blog"})}),(0,y.jsx)("li",{onClick:function(){return window.open("https://anurag-mintbox.zohobookings.in/#/customer/mintboxblack","_blank")},className:"navbar--link-item mxButtonHeader mxDesktopVisible",style:{backgroundColor:"#A1EAC4",border:"1px solid #A1EAC4",color:"#285e4d"},children:"Schedule a call"}),(0,y.jsx)(k.Z,{props:n,open:f,handleToClose:v})]}),(0,y.jsx)("span",{className:"nav-icon",onClick:m,children:d?(0,y.jsx)(o.aHS,{size:20}):(0,y.jsx)(o.Fm7,{size:22})})]}):(0,y.jsxs)("nav",{id:"nav",className:"navbar",children:[(0,y.jsx)("ul",{style:{paddingLeft:0},children:(0,y.jsx)("a",{href:"/",children:(0,y.jsx)("img",{src:i.r2+"mainlogomarket.svg",alt:"logo",className:"navbar--logo"})})}),(0,y.jsxs)("ul",{className:d?"navbar--link active":"navbar--link",children:[(0,y.jsx)(w,{props:n,className:"mxDesktopHidden",black:!0}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/mintbox-black",className:"navbar--link-item mxDesktopVisible",style:{color:"#A1EAC4"},children:"mintbox black"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/design-mintbox",className:"navbar--link-item mxDesktopVisible",children:"How are mintboxes created?"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"/investing-masterclass",className:"navbar--link-item mxDesktopVisible",children:"Investing masterclass"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"https://mintbox.ai/blog",className:"navbar--link-item mxDesktopVisible",children:"Blog"})}),(0,y.jsx)("li",{onClick:function(){a.UA?window.open("/qr-custom/app-link","_blank").focus():g(!0)},className:"navbar--link-item mxButtonHeader mxDesktopVisible",id:"btn-link",children:"Download the app"}),(0,y.jsx)(k.Z,{props:n,open:f,handleToClose:v})]}),(0,y.jsx)("span",{className:"nav-icon",onClick:m,children:d?(0,y.jsx)(o.aHS,{size:20}):(0,y.jsx)(o.Fm7,{size:22})})]})})}var N=s.memo(I)}}]);
//# sourceMappingURL=1942.e78aaa02.chunk.js.map