"use strict";(self.webpackChunkmintbox_app=self.webpackChunkmintbox_app||[]).push([[7748],{6561:function(e,a,n){n.d(a,{D4:function(){return r},r2:function(){return o}});var o="https://d3etfstcuyoos5.cloudfront.net/app-images/imgs/",r=[{Id:0,Name:"by AMC",imgSource:o+"mintbox_logo.svg"},{Id:1,Name:"Aditya Birla Sun Life Mutual Fund",imgSource:o+"ABC.webp"},{Id:2,Name:"HDFC Mutual Fund",imgSource:o+"HDFC.webp"},{Id:3,Name:"ICICI Prudential Mutual Fund",imgSource:o+"ICICI.webp"},{Id:5,Name:"SBI Mutual Fund",imgSource:o+"SBI.webp"},{Id:6,Name:"Tata Mutual Fund",imgSource:o+"Tata.webp"},{Id:7,Name:"Invesco Mutual Fund",imgSource:o+"Invesco.webp"},{Id:8,Name:"Quantum Mutual Fund",imgSource:o+"Quantum.webp"},{Id:9,Name:"UTI Mutual Fund",imgSource:o+"UTI.webp"},{Id:10,Name:"IDFC Mutual Fund",imgSource:o+"IDFC.webp"},{Id:12,Name:"DSP Blackrock",imgSource:o+"DSP.webp"},{Id:13,Name:"Kotak Mutual Fund",imgSource:o+"Kotak.webp"},{Id:15,Name:"Mirae Asset Management",imgSource:o+"Mirae.webp"},{Id:16,Name:"Franklin Templeton",imgSource:o+"Franklin.webp"},{Id:18,Name:"Sundaram Mutual Fund",imgSource:o+"Sundaram.webp"},{Id:20,Name:"Motilal Oswal Mutual Fund",imgSource:o+"Motilal.webp"},{Id:22,Name:"HSBC Mutual Fund",imgSource:o+"HSBC.webp"},{Id:23,Name:"Edelweiss Mutual Fund",imgSource:o+"Edelweiss.webp"},{Id:24,Name:"L&T Mutual Fund",imgSource:o+"L&T.webp"},{Id:25,Name:"Axis Mutual Fund",imgSource:o+"AXIS.webp"},{Id:26,Name:"BNP Paribas Mutual Fund",imgSource:o+"BNP.webp"},{Id:27,Name:"IIFL Mutual Fund",imgSource:o+"IIFL.webp"},{Id:28,Name:"Taurus Mutual Fund",imgSource:o+"Taurus.webp"},{Id:31,Name:"Baroda Mutual Fund",imgSource:o+"BARODA.webp"},{Id:34,Name:"IDBI Mutual Fund",imgSource:o+"IDBI.webp"},{Id:36,Name:"PPFAS Mutual Fund",imgSource:o+"PPFAS.webp"},{Id:37,Name:"JM Financials Mutual Fund",imgSource:o+"JM.webp"},{Id:38,Name:"LIC Nomura Mutual Fund",imgSource:o+"LIC.webp"},{Id:39,Name:"Canara Robeco Mutual Fund",imgSource:o+"CANARA.webp"},{Id:40,Name:"Principal Mutual Fund",imgSource:o+"Principal.webp"},{Id:41,Name:"Indiabull Mutual Fund",imgSource:o+"Indiabulls.webp"},{Id:42,Name:"Mahindra Manulife Mutual Fund",imgSource:o+"Mahindra.webp"},{Id:45,Name:"Bharti AXA Mutual Fund",imgSource:o+"BOI.webp"},{Id:56,Name:"Nippon India Mutual Fund",imgSource:o+"Nippon.webp"},{Id:57,Name:"PGIM India Mutual Fund",imgSource:o+"PGIM.webp"},{Id:58,Name:"Navi Mutual Fund",imgSource:o+"NAVI.webp"},{Id:59,Name:"Shriram Mutual Fund",imgSource:o+"Shriram.webp"},{Id:60,Name:"Union KBC Mutual Fund",imgSource:o+"Union.webp"},{Id:61,Name:"Yes Mutual Fund",imgSource:o+"Yes.webp"},{Id:62,Name:"ITI Mutual Fund",imgSource:o+"ITI.webp"},{Id:63,Name:"Quant Mutual Fund",imgSource:o+"Quant.webp"},{Id:64,Name:"Trust Mutual Fund",imgSource:o+"Trust.webp"},{Id:65,Name:"LIC Mutual Fund",imgSource:o+"LIC.webp"},{Id:66,Name:"ICICI Mutual Fund",imgSource:o+"ICICI.webp"},{Id:67,Name:"Mirae Asset Mutual Fund",imgSource:o+"Mirae.webp"},{Id:68,Name:"Kotak Mahindra Mutual Fund",imgSource:o+"Kotak.webp"}]},8848:function(e,a,n){n.d(a,{Z:function(){return c}});var o=n(4165),r=n(5861),t="l1czA/hCG2HOfC6dV6ewfQfhK4NQKTyqYfBTPLcgIok=";function i(e){for(var a=0,n=(e=JSON.stringify(e).split("")).length;a<n;a++)"{"===e[a]?e[a]="}":"}"===e[a]&&(e[a]="{");return encodeURI(t+e.join(""))}function s(e){if(null===e)return console.error("DB Error: object is not present in DB."),!1;if(0!==(e=decodeURI(e)).indexOf(t))throw new Error("object cannot be decrypted");for(var a=0,n=(e=e.substring(t.length).split("")).length;a<n;a++)"{"===e[a]?e[a]="}":"}"===e[a]&&(e[a]="{");return JSON.parse(e.join(""))}var u={user:"user",theme:"theme",profileComplete:"ProfileComp",userData:"userData",appData:"appData",notification:"notification",dashboard:"dashboard",clientData:"clientData",smallcaseSDKToken:"smallcaseSDKToken",createMintbox:"createMintbox",watchlist:"watchlist",allMintboxes:"allMintboxes",allEtfs:"allEtfs",allMutualFunds:"allMutualFunds",portfolio:"portfolio",portfolioPerformance:"portfolioPerformance",assetAllocation:"assetAllocation",portfolioXirr:"portfolioXirr",transactions:"transactions",sip:"sip",recentlyViewed:"recentlyViewed",riskProfile:"riskProfile",createGoal:"createGoal",dismissNotes:"dismissNotes",dematBalance:"dematBalance"},l={model:u,get:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(a){var n,r,t=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>1&&void 0!==t[1]&&t[1],a=u[a]?u[a]:a,null!==(r=localStorage.getItem(a))){e.next=5;break}return e.abrupt("return",null);case 5:return n&&(r=s(r)),e.prev=6,e.abrupt("return",JSON.parse(r));case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[6,10]])})));return function(a){return e.apply(this,arguments)}}(),set:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(a,n){var r,t,s=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]&&s[2],a=u[a]?u[a]:a,r&&(n=i(n)),e.next=5,localStorage.setItem(a,n);case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}(),remove:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(a){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),clear:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var a,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("lastEmail"),n=localStorage.getItem("lastMobile"),e.next=4,localStorage.clear();case 4:sessionStorage.clear(),localStorage.setItem("lastEmail",a),localStorage.setItem("lastMobile",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},c=l},2102:function(e,a,n){n(2791);var o=n(8820),r=n(9126),t=n(3853),i=n(8617),s=n(7811),u=n(184);a.Z=function(e){var a=e.header,n=e.navigation,l=e.screenType,c=e.backAction,y=void 0===c?function(){n.goBack()}:c,m=e.right,d=e.rightAction,h=void 0===d?function(){}:d,p=e.isWatchlisted,g=void 0!==p&&p,f=e.onWatchlistIconClick,k=void 0===f?function(){}:f,v=e.onShareIconClick,I=void 0===v?function(){}:v,S=e.onHeaderClick,w=void 0===S?function(){}:S;return(0,u.jsxs)("div",{className:"mainHeader sticky-top",children:["Home"!==l&&(0,u.jsx)("div",{style:{marginRight:"4%",minWidth:"8%"},children:(0,u.jsx)(t.Ao2,{color:s.Z.getPropertyValue("--secondaryGreen"),size:24,onClick:function(){return y()}})}),(0,u.jsx)("div",{style:{flex:1},children:(0,u.jsx)("span",{className:"screenTitle",onClick:function(){return w()},children:a})}),(0,u.jsx)("div",{style:{display:"flex"},children:function(){switch(m){case"bookmark-share":return(0,u.jsxs)("span",{children:[g?(0,u.jsx)(r.vw0,{className:"secondaryGreen",size:24,onClick:k}):(0,u.jsx)(r.flH,{className:"secondaryGreen",size:24,onClick:k}),(0,u.jsx)(i.qyl,{className:"secondaryGreen",size:24,style:{marginLeft:"20px"},onClick:I})]});case"tip":return(0,u.jsxs)("span",{className:"header3dark secondaryGreen",onClick:function(){return h()},children:["Tip ",(0,u.jsx)(o.cuw,{size:10})]});default:return m?(0,u.jsx)("span",{className:"greenChipHeader",onClick:function(){h()},children:m}):(0,u.jsx)(u.Fragment,{})}}()})]})}},7748:function(e,a,n){n.r(a);var o=n(6561),r=n(8848),t=n(2791),i=n(2102),s=n(7811),u=n(184);a.default=function(e){t.useEffect((function(){r.Z.remove(r.Z.model.createGoal)}),[]);var a=[{id:1,type:"retirement",header:"Retire early",icon:o.r2+"retire_goal.svg",investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"1,00,000",chips:[{key:0,name:"\u20b9 0"},{key:1e5,name:"\u20b9 1,00,000"},{key:2e5,name:"\u20b9 2,00,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Happy retirement"}},{id:5,type:"house",header:"Buy a house",icon:o.r2+"home_goal.svg",goalDueScreen:{question:"After how many years will you buy the house?",placeholder:"3 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"What is the present cost of the house?",placeholder:"50,00,000",chips:[{key:1e7,name:"\u20b9 1,00,00,000"},{key:75e5,name:"\u20b9 75,00,000"},{key:125e5,name:"\u20b9 1,25,00,000"}],tip:["If you are planning to save and invest only for the downpayment of the house, please enter only the downpayment cost.","Banks typically demand a downpayment of at least 20% of the house value. It is recommended to pay a higher downpayment if you can since that reduces the total interest paid on the loan."]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"5,00,000",chips:[{key:0,name:"\u20b9 0"},{key:2e5,name:"\u20b9 2,00,000"},{key:1e6,name:"\u20b9 10,00,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"My first house"},planDetails:{presentCost:"Present cost of house",goalDue:"House to be purchased in",inflation:"Real estate inflation"}},{id:3,type:"education",header:"Child education",icon:o.r2+"education_goal.svg",goalDueScreen:{question:"After how many years does your child\u2019s college start?",placeholder:"2 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"Present cost of planned college course",placeholder:"5,00,000",chips:[{key:2e5,name:"\u20b9 2,00,000"},{key:1e6,name:"\u20b9 10,00,000"},{key:2e6,name:"\u20b9 20,00,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"1,00,000",chips:[{key:0,name:"\u20b9 0"},{key:2e5,name:"\u20b9 2,00,000"},{key:5e5,name:"\u20b9 5,00,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Ajay\u2019s engineering fund"},planDetails:{presentCost:"Present cost of college course",goalDue:"College starts in",inflation:"Education inflation"}},{id:4,type:"marriage",header:"Child marriage",icon:o.r2+"marriage_goal.svg",goalDueScreen:{question:"After how many years will your child marry?",placeholder:"3 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"Present cost of planned marriage",placeholder:"5,00,000",chips:[{key:2e5,name:"\u20b9 2,00,000"},{key:1e6,name:"\u20b9 10,00,000"},{key:2e6,name:"\u20b9 20,00,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"1,00,000",chips:[{key:0,name:"\u20b9 0"},{key:2e5,name:"\u20b9 2,00,000"},{key:5e5,name:"\u20b9 5,00,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Ajay\u2019s marriage fund"},planDetails:{presentCost:"Present cost of marriage",goalDue:"Marriage starts in",inflation:"Inflation"}},{id:6,type:"car",header:"Buy a car",icon:o.r2+"buyCar_goal.svg",goalDueScreen:{question:"After how many years will you purchase the car?",placeholder:"2 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"What is your present cost of the car?",placeholder:"10,00,000",chips:[{key:8e5,name:"\u20b9 8,00,000"},{key:12e5,name:"\u20b9 12,00,000"},{key:15e5,name:"\u20b9 15,00,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"1,00,000",chips:[{key:0,name:"\u20b9 0"},{key:2e4,name:"\u20b9 20,000"},{key:25e3,name:"\u20b9 25,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Honda City"},planDetails:{presentCost:"Present cost of car",goalDue:"Years untill car purchase",inflation:"Inflation"}},{id:2,type:"bike",header:"Buy a bike",icon:o.r2+"buyBike_goal.svg",goalDueScreen:{question:"After how many years will you purchase the bike?",placeholder:"2 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"What is your present cost of the bike?",placeholder:"70,000",chips:[{key:5e4,name:"\u20b9 50,000"},{key:1e5,name:"\u20b9 1,00,000"},{key:15e4,name:"\u20b9 1,50,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"10,000",chips:[{key:0,name:"\u20b9 0"},{key:2e4,name:"\u20b9 20,000"},{key:25e3,name:"\u20b9 25,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Royal Enfield 350"},planDetails:{presentCost:"Present cost of bike",goalDue:"Years untill bike purchase",inflation:"Inflation"}},{id:7,type:"vacation",header:"Go on a vacation",icon:o.r2+"vacation_goal.svg",goalDueScreen:{question:"After how many years are you going on vacation?",placeholder:"2 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"What is your present cost of the planned vacation?",placeholder:"5,00,000",chips:[{key:5e4,name:"\u20b9 50,000"},{key:1e5,name:"\u20b9 1,00,000"},{key:15e4,name:"\u20b9 1,50,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"10,000",chips:[{key:0,name:"\u20b9 0"},{key:2e4,name:"\u20b9 20,000"},{key:25e3,name:"\u20b9 25,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalNameScreen:{question:"Name your goal",placeholder:"Ajay\u2019s engineering fund"},planDetails:{presentCost:"Present cost of vacation",goalDue:"Years untill vacation",inflation:"Inflation"}},{id:8,type:"custom",header:"Custom goal",icon:o.r2+"custom_goal.svg",goalDueScreen:{question:"After how many years is your goal due?",placeholder:"2 years",chips:[{key:5,name:"5 years"},{key:7,name:"7 years"},{key:10,name:"10 years"}]},presentCostScreen:{question:"What is your present cost to fulfil the goal?",placeholder:"5,00,000",chips:[{key:5e4,name:"\u20b9 50,000"},{key:1e5,name:"\u20b9 1,00,000"},{key:15e4,name:"\u20b9 1,50,000"}]},investTodayScreen:{question:"How much can you invest for this goal today?",placeholder:"10,000",chips:[{key:0,name:"\u20b9 0"},{key:2e4,name:"\u20b9 20,000"},{key:25e3,name:"\u20b9 25,000"}]},monthlyIncreaseScreen:{question:"By how much can you increase your monthly investment every year?",placeholder:"10%",chips:[{key:0,name:"0%"},{key:5,name:"5%"},{key:15,name:"15%"}],tip:["It is recommended that you increase your monthly investment every year as your income increases","For example - If you are investing Rs. 10,000 in 2022 and your income increases by 20% in 2023, you should invest 20% more (Rs. 12,000) in 2023","This will help you reach your goal faster!"]},goalRelationScreen:{question:"What is the inflation rate associated with your goal?",placeholder:"6%",chips:[{key:4,name:"4%"},{key:8,name:"8%"},{key:10,name:"10%"}],tip:[{key:"General inflation (groceries etc):",value:"6%"},{key:"Vehicle inflation (bikes/cars):",value:"6%"},{key:"Real estate inflation:",value:"8%"},{key:"Education inflation (India):",value:"10%"}]},goalNameScreen:{question:"Name your goal",placeholder:"My goal"},planDetails:{presentCost:"Present cost of goal",goalDue:"Years untill goal",inflation:"Inflation"}}];return(0,u.jsxs)("div",{className:"mainContainer",children:[(0,u.jsx)(i.Z,{header:"Plan a financial goal",navigation:e.history}),(0,u.jsx)("div",{className:"dataContainer",style:{marginTop:"2%"},children:(0,u.jsx)("div",{style:{display:"flex",gap:"8%",flexWrap:"wrap",justifyContent:"space-around"},children:a.map((function(a){return n=a,(0,u.jsxs)("div",{style:{width:"144px",height:"128px",backgroundColor:s.Z.getPropertyValue("--lightest"),marginTop:"8%",border:"1px solid "+s.Z.getPropertyValue("--light"),borderRadius:"8px",padding:"4%",textAlign:"center"},onClick:function(){return e.history.push({pathname:"retirement"===n.type?"/Goals/present-age":"/Goals/goal-due",state:n})},children:[(0,u.jsx)("img",{src:n.icon,alt:"",height:"64px",width:"64px"}),(0,u.jsx)("div",{className:"header2dark",style:{marginTop:"12px"},children:n.header})]});var n}))})})]})}}}]);
//# sourceMappingURL=7748.5a8ba04c.chunk.js.map