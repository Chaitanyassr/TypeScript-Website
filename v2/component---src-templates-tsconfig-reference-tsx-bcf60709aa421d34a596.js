(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0Sy+":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));n("XDJg");var a=n("ERkP"),r=n.n(a),o=n("9Dj+");n("2oau"),n("i0GD");t.default=function(e){var t=e.data.markdownRemark;if(!t)return console.log("Could not render:",JSON.stringify(e)),r.a.createElement("div",null);var n=e.data.sitePage.fields.categories;return Object(a.useEffect)((function(){var e=document.querySelectorAll(".tsconfig nav li a");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({behavior:"smooth",block:"start"})}))}));var t=function(){var t,n=window.scrollY;e.forEach((function(e){var a=document.querySelector(e.hash);a&&(a.offsetTop<=n&&(t=e))})),e.forEach((function(e){e===t?e.classList.add("current"):e.classList.remove("current")}))};return window.addEventListener("scroll",t,{passive:!0,capture:!0}),t(),function(){window.removeEventListener("scroll",t)}})),r.a.createElement(o.a,null,r.a.createElement("div",{className:"tsconfig ms-depth-4",style:{backgroundColor:"white",maxWidth:960,margin:"1rem auto",paddingTop:"0.5rem"}},r.a.createElement("div",{id:"full-option-list",className:"indent"},n.categories.map((function(e){return e?r.a.createElement("div",{className:"tsconfig-nav-top"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"+e.anchor},e.display)),r.a.createElement("ul",{key:e.anchor},e.options.map((function(e){return r.a.createElement("li",{key:e.anchor},r.a.createElement("a",{href:"#"+e.anchor},e.anchor))})))):null}))),r.a.createElement("nav",{id:"sticky"},n.categories.map((function(e){return r.a.createElement("li",{key:e.anchor},r.a.createElement("a",{href:"#"+e.anchor},e.display))}))),r.a.createElement("div",{className:"indent"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))};var c="4165246755"},XDJg:function(e,t,n){"use strict";n("kDPR")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},kDPR:function(e,t,n){var a=n("7zcn"),r=n("oSRv"),o=n("yK4D"),c=/"/g,i=function(e,t,n,a){var r=String(o(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-tsconfig-reference-tsx-bcf60709aa421d34a596.js.map