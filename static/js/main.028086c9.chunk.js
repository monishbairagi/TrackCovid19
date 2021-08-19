(this["webpackJsonplive-covid-tracker"]=this["webpackJsonplive-covid-tracker"]||[]).push([[0],{25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),i=a.n(s),r=(a(25),a(9),a(8)),l=a(0),o=function(e){return Object(l.jsx)("footer",{className:"bg-dark text-light footer",children:Object(l.jsxs)("p",{className:"text-center",style:{padding:"5px"},children:["Copyright \xa9 ",e.crname," |",Object(l.jsx)(r.b,{to:"/about",style:{textDecoration:"none"},children:" About"})]})})},d=a(16),j=a.n(d),h=a(20),b=a(11),u=function(e){var t={backgroundColor:e.color};return Object(l.jsxs)("div",{className:"card_box",style:t,children:[Object(l.jsx)("h3",{id:"time_span",className:"fontSmall",children:e.title}),Object(l.jsx)("h1",{className:"fontHead",children:e.count})]})},x=function(){var e=new Date((new Date).toLocaleDateString()).toString().substr(4,11),t=(new Date).toLocaleTimeString(),a=Object(c.useState)(t),n=Object(b.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)(e),o=Object(b.a)(r,2),d=o[0],x=o[1];function m(e){return(new Intl.NumberFormat).format(e)}setInterval((function(){e=new Date((new Date).toLocaleDateString()).toString().substr(4,11),t=(new Date).toLocaleTimeString(),x(e),i(t)}),1e3);var O,v,p=Object(c.useState)([]),g=Object(b.a)(p,2),f=g[0],N=g[1],y=0;return Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==y){e.next=9;break}return e.next=4,fetch("https://data.covid19india.org/data.json");case 4:return O=e.sent,e.next=7,O.json();case 7:O=e.sent,y=1;case 9:v=O.statewise,t=document.getElementById("state"),N(v[t.value]),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=document.getElementById("state");t&&t.addEventListener("change",e,!1),e()}),[]),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("div",{className:"card-group",style:{color:"white"},children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:d,count:s,color:"purple"})})}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"STATE OF INDIA",count:f.state,color:"pink"})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"ACTIVE",count:m(f.active),color:"yellow"})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"CONFIRMED",count:m(f.confirmed),color:"orange"})})]}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"RECOVERED",count:m(f.recovered),color:"green"})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"DEATHS",count:m(f.deaths),color:"red"})})]}),Object(l.jsx)("div",{className:"card-group",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"\u03b4-CONFIRMED",count:m(f.deltaconfirmed),color:"orange"})})}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"\u03b4-RECOVERED",count:m(f.deltarecovered),color:"green"})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{title:"\u03b4-DEATHS",count:m(f.deltadeaths),color:"red"})})]})]})},m=function(){return Object(l.jsxs)("nav",{className:"header",children:[Object(l.jsx)("h1",{style:{color:"white",fontSize:"25px",textAlign:"center"},children:"Covid-19 India Update"}),Object(l.jsx)("h2",{className:"blink",style:{color:"red",textAlign:"center",fontWeight:"900"},children:"\ud83d\udd34 LIVE"}),Object(l.jsxs)("select",{id:"state",className:"form-select form-select-lg mb-2","aria-label":".form-select-lg example",defaultValue:"0",children:[Object(l.jsx)("option",{value:"0",children:"Total"}),Object(l.jsx)("option",{value:"1",children:"Andaman and Nicobar"}),Object(l.jsx)("option",{value:"2",children:"Andhra Pradesh"}),Object(l.jsx)("option",{value:"3",children:"Arunachal Pradesh"}),Object(l.jsx)("option",{value:"4",children:"Assam"}),Object(l.jsx)("option",{value:"5",children:"Bihar"}),Object(l.jsx)("option",{value:"6",children:"Chandigarh"}),Object(l.jsx)("option",{value:"7",children:"Chhattisgarh"}),Object(l.jsx)("option",{value:"8",children:"Daman and Diu"}),Object(l.jsx)("option",{value:"9",children:"Delhi"}),Object(l.jsx)("option",{value:"10",children:"Goa"}),Object(l.jsx)("option",{value:"11",children:"Gujarat"}),Object(l.jsx)("option",{value:"12",children:"Haryana"}),Object(l.jsx)("option",{value:"13",children:"Himachal Pradesh"}),Object(l.jsx)("option",{value:"14",children:"Jammu and Kashmir"}),Object(l.jsx)("option",{value:"15",children:"Jharkhand"}),Object(l.jsx)("option",{value:"16",children:"Karnataka"}),Object(l.jsx)("option",{value:"17",children:"Kerala"}),Object(l.jsx)("option",{value:"18",children:"Ladakh"}),Object(l.jsx)("option",{value:"19",children:"Lakshadweep"}),Object(l.jsx)("option",{value:"20",children:"Madhya Pradesh"}),Object(l.jsx)("option",{value:"21",children:"Maharashtra"}),Object(l.jsx)("option",{value:"22",children:"Manipur"}),Object(l.jsx)("option",{value:"23",children:"Meghalaya"}),Object(l.jsx)("option",{value:"24",children:"Mizoram"}),Object(l.jsx)("option",{value:"25",children:"Nagaland"}),Object(l.jsx)("option",{value:"26",children:"Odisha"}),Object(l.jsx)("option",{value:"27",children:"Puducherry"}),Object(l.jsx)("option",{value:"28",children:"Punjab"}),Object(l.jsx)("option",{value:"29",children:"Rajasthan"}),Object(l.jsx)("option",{value:"30",children:"Sikkim"}),Object(l.jsx)("option",{value:"32",children:"Tamil Nadu"}),Object(l.jsx)("option",{value:"33",children:"Telangana"}),Object(l.jsx)("option",{value:"34",children:"Tripura"}),Object(l.jsx)("option",{value:"35",children:"Uttar Pradesh"}),Object(l.jsx)("option",{value:"36",children:"Uttarakhand"}),Object(l.jsx)("option",{value:"37",children:"West Bengal"})]})]})},O=a(2),v=a.p+"static/media/dp.3107db87.jpg",p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"navbar navbar-dark bg-dark header",children:Object(l.jsxs)("form",{className:"container-fluid justify-content-start",children:[Object(l.jsx)(r.b,{to:"/",className:"btn btn-success",type:"button",children:"Back"}),Object(l.jsx)("h1",{style:{color:"white",marginTop:"10px",marginLeft:"20px"},children:" ____ About ___________ "})]})}),Object(l.jsxs)("div",{className:"card main",children:[Object(l.jsx)("img",{src:v,className:"card-img-top image"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h1",{className:"text-center card-title",children:"Monish Kr. Bairagi"}),Object(l.jsxs)("p",{className:"card-text",children:["Hello,",Object(l.jsx)("br",{}),"I am pursuing B.Tech in Computer Science Engineering from Hooghly Engineering and Technology College. I am seeking for a Software Developer position as an Intern. I am a quick learner and love challenges. I am looking for a chance to showcase my skills. ",Object(l.jsx)("br",{}),"This is an API based ReactJS website. I have used the API of",Object(l.jsx)("a",{href:"https://data.covid19india.org/",style:{textDecoration:"none"},children:" https://data.covid19india.org/"})," website to fetch recent possible data of Covid-19 India."]}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card my-1",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/monish-kumar-bairagi-023b8518b/",className:"btn btn-primary btn-sm mx-2",children:"LinkedIn"})}),Object(l.jsx)("div",{className:"card my-1",children:Object(l.jsx)("a",{href:"https://github.com/monishbairagi/",className:"btn btn-primary btn-sm mx-2",children:"GitHub"})}),Object(l.jsx)("div",{className:"card my-1",children:Object(l.jsx)("a",{href:"mailto:monishbairagi@gmail.com",className:"btn btn-primary btn-sm mx-2",children:"Gmail"})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("a",{href:"https://www.instagram.com/monish.bairagi/",className:"btn btn-primary btn-sm mx-2",children:"Instagram"})})]})]})]})]})},g=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"background",children:[Object(l.jsxs)(O.c,{children:[Object(l.jsxs)(O.a,{exact:!0,path:"/",children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)(x,{})})})]}),Object(l.jsx)(O.a,{exact:!0,path:"/about",children:Object(l.jsx)(p,{})})]}),Object(l.jsx)(o,{crname:"Monish Bairagi"})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()},9:function(e,t,a){}},[[33,1,2]]]);
//# sourceMappingURL=main.028086c9.chunk.js.map