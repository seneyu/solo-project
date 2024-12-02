(()=>{var e={};e.id=332,e.ids=[220,332,636],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},3557:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>g,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>p,getStaticProps:()=>h,reportWebVitals:()=>m,routeModule:()=>S,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>j});var a=s(3865),n=s(9455),i=s(671),o=s(5583),l=s(6868),c=s(879),d=e([c]);c=(d.then?(await d)():d)[0];let u=(0,i.M)(c,"default"),h=(0,i.M)(c,"getStaticProps"),p=(0,i.M)(c,"getStaticPaths"),x=(0,i.M)(c,"getServerSideProps"),g=(0,i.M)(c,"config"),m=(0,i.M)(c,"reportWebVitals"),j=(0,i.M)(c,"unstable_getStaticProps"),f=(0,i.M)(c,"unstable_getStaticPaths"),b=(0,i.M)(c,"unstable_getStaticParams"),P=(0,i.M)(c,"unstable_getServerProps"),v=(0,i.M)(c,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});r()}catch(e){r(e)}})},3781:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var r=s(8732),a=s(2015);let n=({restaurant:e})=>{let[t,s]=(0,a.useState)(!1),[n,i]=(0,a.useState)(0),o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{o.current&&i(t?o.current.scrollHeight:0)},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>{s(!t)},className:"other-buttons rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button",children:t?"Hide Details":"Show Details"})," ",(0,r.jsx)("div",{className:"mt-2 overflow-hidden transition-all duration-300 ease-in-out",style:{height:`${n}px`,opacity:t?1:0},children:(0,r.jsxs)("div",{ref:o,className:"p-2",children:[(0,r.jsx)("b",{children:"MICHELIN Guide’s Point Of View: "}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"text-slate-600 font-light",children:e.description})]})})]})},i=({restaurant:e,onRestaurantClick:t})=>{let s=[];for(let t=0;t<e.distinction;t++)s.push((0,r.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/019_-_Star-128.png",alt:"star-icon",className:"icon-star"},t));return(0,r.jsxs)("div",{className:"restaurant-card",children:[(0,r.jsx)("h4",{onClick:()=>t(e.latitude,e.longitude),children:(0,r.jsxs)("b",{children:[(0,r.jsx)("span",{children:s}),(0,r.jsx)("br",{}),e.name]})}),(0,r.jsx)("p",{children:e.address}),(0,r.jsx)("p",{children:e.cuisine}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{onClick:()=>window.open(e.website),children:"Visit Official Website"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n,{restaurant:e})]})},o=({restaurants:e,fetchError:t,onRestaurantClick:s})=>(0,r.jsxs)("div",{children:[t&&(0,r.jsx)("p",{children:t}),e&&(0,r.jsx)("div",{className:"restaurants",children:(0,r.jsx)("div",{className:"restaurant-grid",children:e.map(e=>(0,r.jsx)(i,{restaurant:e,onRestaurantClick:s},e._id))})})]})},6868:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(8732),a=s(2015),n=s(1106),i=s.n(n);let o=({isAuthenticated:e,onLogout:t})=>(0,r.jsxs)("div",{className:"nav-bar",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(i(),{href:"/",style:{textDecoration:"none"},children:[(0,r.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/landmark-79/64/mont_saint_michel-island-landmark-france-town-normandy-travel-128.png",id:"logo"})," ",(0,r.jsx)("span",{id:"logo-title",children:"Michelin Compass"})]})}),(0,r.jsx)("div",{className:"auth",children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"/entries",children:(0,r.jsx)("button",{className:"other-buttons",children:"Reviews"})}),(0,r.jsx)("button",{id:"logout-button",onClick:t,children:"Logout"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"/entries",children:(0,r.jsx)("button",{className:"other-buttons",children:"Reviews"})}),(0,r.jsx)(i(),{href:"/login",children:(0,r.jsx)("button",{className:"other-buttons",children:"Login"})}),(0,r.jsx)(i(),{href:"/signup",children:(0,r.jsx)("button",{id:"signup-button",children:"Signup"})})]})})]});s(3651);let l=({Component:e,pageProps:t})=>{let[s,n]=(0,a.useState)(!1),i=async()=>{try{(await fetch("/api/logout",{method:"POST",credentials:"include"})).ok&&n(!1)}catch(e){console.error("An error occurred when logging out user: ",e)}};return(0,r.jsxs)("div",{className:"main",children:[(0,r.jsx)(o,{isAuthenticated:s,onLogout:i}),(0,r.jsx)(e,{...t,onLogin:()=>{n(!0)}})]})}},5583:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(8732),a=s(883);let n=()=>(0,r.jsxs)(a.Html,{children:[(0,r.jsxs)(a.Head,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playwrite+SK:wght@100..400&display=swap"})]}),(0,r.jsxs)("body",{children:[(0,r.jsx)(a.Main,{}),(0,r.jsx)(a.NextScript,{})]})]})},879:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c});var a=s(8732),n=s(2015),i=s(3781),o=s(2261),l=e([o]);o=(l.then?(await l)():l)[0];let c=()=>{let[e,t]=(0,n.useState)(""),[s,r]=(0,n.useState)([]),[l,c]=(0,n.useState)([]),[d,u]=(0,n.useState)({lat:38.5789380221926,lng:-121.50225113309448}),h=process.env.GOOGLE_MAPS_API_KEY;return(0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/restaurants");if(!e.ok)throw Error("Network response was not ok.");let t=await e.json();console.log("data: ",t),r(t)}catch(e){t("Could not fetch the restaurants"),r([]),console.error("Fetch error: ",e)}})()},[]),(0,n.useEffect)(()=>{if(s.length>0){let e=s.map(e=>({position:{lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)},key:e.name}));c(e)}},[s]),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)(i.A,{restaurants:s,fetchError:e,onRestaurantClick:(e,t)=>{u({lat:parseFloat(e),lng:parseFloat(t)})}}),h&&(0,a.jsx)(o.APIProvider,{apiKey:h,children:(0,a.jsx)(o.Map,{className:"map-container",defaultZoom:13,center:d,children:l.map((e,t)=>(0,a.jsx)(o.Marker,{position:e.position,title:e.key},t))})})]})};r()}catch(e){r(e)}})},3651:()=>{},9455:(e,t)=>{"use strict";var s;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(s||(s={}))},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},2261:e=>{"use strict";e.exports=import("@vis.gl/react-google-maps")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[916,883,106],()=>s(3557));module.exports=r})();