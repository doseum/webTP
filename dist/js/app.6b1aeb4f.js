(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,u=[];d<o.length;d++)s=o[d],r[s]&&u.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-105b75a2":"708d06bf","chunk-61b81ef3":"bbc86b18","chunk-efc81fda":"ea7d043a"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-61b81ef3":1,"chunk-efc81fda":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-105b75a2":"31d6cfe0","chunk-61b81ef3":"11161fcb","chunk-efc81fda":"11161fcb"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===r))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===a||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],p.parentNode.removeChild(p),n(i)},p.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(p)}).then(function(){s[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e),l=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}r[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c88":function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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"},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("a026"),s=n("8c4f"),r=n("8aa5"),i=n.n(r);a["default"].use(s["a"]);var o=new s["a"]({scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})},mode:"history",routes:[{path:"/Dashboards",name:"analytics",component:function(){return n.e("chunk-105b75a2").then(n.bind(null,"9fbd"))}},{path:"/",name:"login",meta:{layout:"userpages"},component:function(){return n.e("chunk-efc81fda").then(n.bind(null,"9c4a"))}},{path:"/Register",name:"register-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-61b81ef3").then(n.bind(null,"bd66"))}}]}),c=n("9f7b"),l=n.n(c),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},u=[],p="default",b={computed:{layout:function(){return(this.$route.meta.layout||p)+"-layout"}}},h=b,f=(n("5c0b"),n("2877")),m=Object(f["a"])(h,d,u,!1,null,null,null),v=m.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Header")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Sidebar")],1),n("div",{staticClass:"app-main__outer"},[n("div",{staticClass:"app-main__inner"},[e._t("default")],2),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Footer")],1)],1),n("b-modal",{attrs:{id:"modal1",title:"Bootstrap-Vue"}},[n("p",{staticClass:"my-4"},[e._v("Hello from modal!")])]),n("b-modal",{attrs:{id:"modallg",size:"lg",title:"Large Modal"}},[e._v("\n        Hello Modal!\n    ")]),n("b-modal",{attrs:{id:"modalsm",size:"sm",title:"Small Modal"}},[e._v("\n        Hello Modal!\n    ")])],1)},g=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header header-shadow"},[n("div",{staticClass:"logo-src"}),n("div",{staticClass:"app-header__content"},[n("div",{staticClass:"app-header-left"},[n("SearchBox")],1),n("div",{staticClass:"app-header-right"},[n("UserArea")],1)]),n("div",{staticClass:"app-header__mobile-menu"},[n("div",[n("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),n("div",{staticClass:"app-header__menu"},[n("span",[n("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[n("div",{staticClass:"btn-icon-wrapper"},[n("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])}],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-wrapper",class:{active:e.searchOpen}},[n("div",{staticClass:"input-holder"},[n("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"}}),n("button",{staticClass:"search-icon",on:{click:function(t){e.searchOpen=!e.searchOpen}}},[n("span")])]),n("button",{staticClass:"close",on:{click:function(t){e.searchOpen=!e.searchOpen}}})])])},y=[],x={data:function(){return{searchOpen:!1}}},k=x,E=Object(f["a"])(k,M,y,!1,null,null,null),O=E.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("div",{staticClass:"header-btn-lg pr-0"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("b-dropdown",{attrs:{"toggle-class":"p-0 mr-2","menu-class":"dropdown-menu-lg",variant:"link",right:""}},[a("span",{attrs:{slot:"button-content"},slot:"button-content"},[a("div",{staticClass:"icon-wrapper icon-wrapper-alt rounded-circle"},[a("img",{staticClass:"rounded-circle",attrs:{width:"42",src:n("3c88"),alt:""}})])]),a("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"}},[e._v("Menus")]),a("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"}},[e._v("Settings")]),a("h6",{staticClass:"dropdown-header",attrs:{tabindex:"-1"}},[e._v("Header")]),a("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"}},[e._v("Actions")]),a("div",{staticClass:"dropdown-divider",attrs:{tabindex:"-1"}}),a("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"}},[e._v("Dividers")])])],1),e._m(0),a("div",{staticClass:"widget-content-right header-user-info ml-3"},[a("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-shadow p-1",attrs:{title:"Tooltip Example",size:"sm",variant:"info"}},[a("font-awesome-icon",{staticClass:"mr-1 ml-1",attrs:{icon:"calendar-alt"}})],1)],1)])])])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widget-content-left  ml-3 header-user-info"},[n("div",{staticClass:"widget-heading"},[e._v("Alina Mclourd")]),n("div",{staticClass:"widget-subheading"},[e._v("VP People Manager")])])}],B=n("9d63"),Q=n.n(B),j=n("ecee"),W=n("c074"),I=n("ad3d");j["c"].add(W["a"],W["c"],W["n"],W["d"],W["i"],W["e"],W["k"],W["l"],W["j"],W["g"]);var D={components:{VuePerfectScrollbar:Q.a,"font-awesome-icon":I["a"]},data:function(){return{}},methods:{}},R=D,N=Object(f["a"])(R,H,S,!1,null,null,null),L=N.exports;j["c"].add(W["h"]);var P={name:"Header",components:{SearchBox:O,UserArea:L,"font-awesome-icon":I["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},props:{},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},G=P,Y=Object(f["a"])(G,w,C,!1,null,null,null),T=Y.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-sidebar sidebar-shadow",on:{mouseover:function(t){return e.toggleSidebarHover("add","closed-sidebar-open")},mouseleave:function(t){return e.toggleSidebarHover("remove","closed-sidebar-open")}}},[n("div",{staticClass:"app-header__logo"},[n("div",{staticClass:"logo-src"}),n("div",{staticClass:"header__pane ml-auto"},[n("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleBodyClass("closed-sidebar")}}},[e._m(0)])])]),n("div",{staticClass:"app-sidebar-content"},[e._m(1)],1)])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VuePerfectScrollbar",{staticClass:"app-sidebar-scroll"},[n("sidebar-menu",{attrs:{showOneChild:"",menu:e.menu}})],1)}],U=n("4776"),F={components:{SidebarMenu:U["SidebarMenu"],VuePerfectScrollbar:Q.a},data:function(){return{isOpen:!1,sidebarActive:!1,menu:[{header:!0,title:"Main Navigation"},{title:"Dashboards",icon:"pe-7s-rocket",child:[{href:"/Dashboards",title:"Analytics"}]},{title:"Pages",icon:"pe-7s-browser",child:[{href:"/pages/login-boxed",title:"Login Boxed"},{href:"/pages/register-boxed",title:"Register Boxed"}]}],collapsed:!0,windowWidth:0}},props:{sidebarbg:String},methods:{toggleBodyClass:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleSidebarHover:function(e,t){var n=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===e?n.classList.add(t):n.classList.remove(t))},getWindowWidth:function(){var e=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth<"1350"?e.classList.add("closed-sidebar","closed-sidebar-md"):e.classList.remove("closed-sidebar","closed-sidebar-md")}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()})},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},J=F,X=Object(f["a"])(J,z,_,!1,null,null,null),Z=X.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[n("div",{staticClass:"app-footer__inner text-center"},[e._v("\n        Copyright 2019 DashboardPack.com\n    ")])])}];j["c"].add(W["h"]);var q={name:"Footer",components:{}},$=q,ee=Object(f["a"])($,V,K,!1,null,null,null),te=ee.exports;j["c"].add(W["f"]);var ne={name:"app",components:{Header:T,Sidebar:Z,Footer:te,VuePerfectScrollbar:Q.a,"font-awesome-icon":I["a"]},methods:{}},ae=ne,se=Object(f["a"])(ae,A,g,!1,null,null,null),re=se.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[e._t("default")],2)},oe=[],ce={name:"app",components:{},methods:{}},le=ce,de=Object(f["a"])(le,ie,oe,!1,null,null,null),ue=de.exports,pe=n("bc3a"),be=n.n(pe),he=be.a.create({baseURL:"https://us-central1-webproject-6135b.cloudfunctions.net/",timeout:5e3,headers:{"X-Custom-Header":"foobar"}});a["default"].prototype.$axios=he,a["default"].config.productionTip=!1;var fe={apiKey:"AIzaSyDXnx-Lqn8YH8UoiPv6Awetywx2wK6HGdw",authDomain:"webproject-6135b.firebaseapp.com",databaseURL:"https://webproject-6135b.firebaseio.com",projectId:"webproject-6135b",storageBucket:"webproject-6135b.appspot.com",messagingSenderId:"722237715982",appId:"1:722237715982:web:94a855e17dcd65f9306e5f",measurementId:"G-XHZEQ7ZCV3"};i.a.initializeApp(fe),a["default"].use(l.a),a["default"].component("default-layout",re),a["default"].component("userpages-layout",ue),new a["default"]({el:"#app",router:o,template:"<App/>",components:{App:v}})},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){}});