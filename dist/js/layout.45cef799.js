(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout"],{"000f":function(e,t,n){
/*!
* screenfull
* v4.2.0 - 2019-04-01
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},n=e.exports,r="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=n.length,a={};r<i;r++)if(e=n[r],e&&e[1]in t){for(r=0;r<e.length;r++)a[n[0][r]]=e[r];return a}return!1}(),a={change:i.fullscreenchange,error:i.fullscreenerror},s={request:function(e){return new Promise(function(n){var a=i.requestFullscreen,s=function(){this.off("change",s),n()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[a]():e[a](r?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",s)}.bind(this))},exit:function(){return new Promise(function(e){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);t[i.exitFullscreen](),this.on("change",n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=a[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=a[e];r&&t.removeEventListener(r,n,!1)},raw:i};i?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?(e.exports=s,e.exports.default=s):window.screenfull=s):n?e.exports=!1:window.screenfull=!1})()},"0119":function(e,t,n){"use strict";var r=n("cb43"),i=n.n(r);i.a},"094b":function(e,t,n){e.exports={menuBg:"#001529",menuText:"#bfcbd9"}},"1ee0":function(e,t,n){"use strict";var r=n("cd3e"),i=n.n(r);i.a},"402b":function(e,t,n){},5250:function(e,t,n){"use strict";var r=n("b8f1"),i=n.n(r);i.a},"580e":function(e,t,n){},"5e57":function(e,t,n){"use strict";var r=n("cbfc"),i=n.n(r);i.a},"615b":function(e,t,n){},"66cb":function(e,t,n){"use strict";var r=n("70b2"),i=n.n(r);i.a},"70b2":function(e,t,n){},b8f1:function(e,t,n){},be96:function(e,t,n){"use strict";var r=n("c025"),i=n.n(r);i.a},bf63:function(e,t,n){"use strict";var r=n("615b"),i=n.n(r);i.a},c025:function(e,t,n){},c1d3:function(e,t,n){"use strict";var r=n("580e"),i=n.n(r);i.a},cb43:function(e,t,n){},cbfc:function(e,t,n){},cd3e:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d092:function(e,t,n){"use strict";var r=n("402b"),i=n.n(r);i.a},d4df:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return r.exec(e).slice(1)};function a(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(a(t.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),i="/"===s(e,-1);return e=n(a(e.split("/"),function(e){return!!e}),!r).join("/"),e||r||(e="."),e&&i&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(a(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),a=r(n.split("/")),s=Math.min(i.length,a.length),o=s,l=0;l<s;l++)if(i[l]!==a[l]){o=l;break}var c=[];for(l=o;l<i.length;l++)c.push("..");return c=c.concat(a.slice(o)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4c39"))},eaf6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isCollapse?"app-wrapper collapse":"app-wrapper"},[n("aside",{staticClass:"sidebar-container"},[n("logo"),n("side-menu")],1),n("div",{staticClass:"main-container"},[n("header",[n("layout-header")],1),n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("div",{staticClass:"app-main"},[n("div",{staticClass:"app-container"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1),n("footer",[n("layout-footer")],1)])])],1)])},i=[],a=n("e20c"),s=n("591a"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-wrapper"},[r("router-link",{staticClass:"logo-link",attrs:{to:{path:"/dashboard"}}},[r("img",{attrs:{src:n("cf05"),alt:"logo"}}),r("h1",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}]},[e._v("Vue Admin")])])],1)},l=[],c={name:"",data:function(){return{}},computed:Object(a["a"])({},Object(s["d"])("app",{isCollapse:function(e){return e.sidebar.isCollapse}})),methods:{login:function(){this.$router.push({path:"/dashboard"})}},mounted:function(){}},u=c,f=(n("5e57"),n("17cc")),d=Object(f["a"])(u,o,l,!1,null,"3255af64",null),m=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{router:"",collapse:e.isCollapse,"default-active":e.$route.path,"background-color":e.colorVariables.menuBg,"text-color":e.colorVariables.menuText,"unique-opened":"","collapse-transition":!1}},e._l(this.menuList,function(e){return n("sidebar-item",{key:e.path,attrs:{item:e,"base-path":e.path}})}),1)],1)],1)},b=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren?n("el-submenu",{attrs:{index:e.resolvePath(e.item.path)}},[e.item.meta?n("template",{slot:"title"},[n("i",{class:"fa fa-"+(e.item.meta&&e.item.meta.icon)}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.meta.title))])]):e._e(),e._l(e.item.children,function(t){return n("sidebar-item",{key:t.path,attrs:{item:t,"base-path":e.resolvePath(t.path)}})})],2):[e.onlyOneChild.meta?n("el-menu-item",{attrs:{to:e.resolvePath(e.onlyOneChild.path),index:e.resolvePath(e.onlyOneChild.path)}},[n("i",{class:"fa fa-"+(e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon)}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.onlyOneChild.meta.title))])]):e._e()]],2)},g=[],v=n("d4df"),w=n.n(v),C={name:"SidebarItem",props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},data:function(){return{onlyOneChild:null}},methods:{hasOneShowingChild:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=t.filter(function(t){return!t.hidden&&(e.onlyOneChild=t,!0)});return 1===r.length||0===r.length&&(this.onlyOneChild=Object(a["a"])({},n,{path:"",noShowingChildren:!0}),!0)},resolvePath:function(e){return w.a.resolve(this.basePath,e)}}},_=C,E=(n("0119"),Object(f["a"])(_,p,g,!1,null,"5b7dda96",null)),O=E.exports,y=n("094b"),S=n.n(y),j={name:"Menu",components:{SidebarItem:O},data:function(){return{colorVariables:S.a}},computed:Object(a["a"])({},Object(s["d"])({isCollapse:function(e){return e.app.sidebar.isCollapse},menuList:function(e){return e.permission.routes.filter(function(e){return!e.hidden})}})),mounted:function(){},methods:{}},x=j,F=(n("c1d3"),Object(f["a"])(x,h,b,!1,null,"00eaa2ce",null)),k=F.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-wrapper clearfix"},[n("sidebar-trigger",{staticClass:"fl"}),n("breadcrumb",{staticClass:"fl"}),n("el-dropdown",{staticClass:"user fr"},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:"avatar"}}),n("span",{staticClass:"name"},[e._v(e._s(e.greeting)+"，"+e._s(e.name))]),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("个人中心")]),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handleLogout(t)}}},[e._v("退出")])],1)],1),n("div",{staticClass:"right-menu fr"},[n("el-badge",{staticClass:"right-menu-item",attrs:{value:12}},[n("i",{staticClass:"fa fa-bell-o"})]),n("screenfull",{staticClass:"right-menu-item"})],1)],1)},$=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-trigger-wrapper"},[e.isCollapse?n("i",{staticClass:"fa fa-indent",on:{click:e.TOGGLE_SIDEBAR}}):n("i",{staticClass:"fa fa-outdent",on:{click:e.TOGGLE_SIDEBAR}})])},B=[],D={data:function(){return{}},computed:Object(a["a"])({},Object(s["d"])({isCollapse:function(e){return e.app.sidebar.isCollapse}})),mounted:function(){},methods:Object(a["a"])({},Object(s["c"])("app",["TOGGLE_SIDEBAR"]))},P=D,R=(n("be96"),Object(f["a"])(P,A,B,!1,null,"fdacc48e",null)),z=R.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"breadcrumb-wrapper"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.breadcrumb,function(t,r){return n("el-breadcrumb-item",{key:t.path},[0===r?n("router-link",{attrs:{to:t.redirect||t.path}},[e._v(e._s(t.meta.title))]):n("span",[e._v(e._s(t.meta.title))])],1)}),1)],1)],1)},T=[],q=(n("7364"),{name:"",data:function(){return{breadcrumb:null}},mounted:function(){this.generateBreadcrumb()},methods:{generateBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.meta&&e.meta.title}),t=e[0];this.isDashboard(t)||(e=[{path:"/dashboard",meta:{title:"首页"}}].concat(e)),this.breadcrumb=e.filter(function(e){return e.meta&&e.meta.title})},isDashboard:function(e){var t=e&&e.name;return!!t&&t.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase()}},watch:{$route:function(){this.generateBreadcrumb()}}}),M=q,G=(n("d092"),Object(f["a"])(M,I,T,!1,null,"157c304d",null)),V=G.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tooltip",{attrs:{content:e.isFullscreen?"向下还原":"最大化"}},[n("i",{staticClass:"screenfull-icon fa",class:e.isFullscreen?"fa-compress":"fa-arrows-alt",on:{click:e.toggleScreen}})])],1)},H=[],J=n("000f"),K=n.n(J),U={name:"Screenfull",data:function(){return{isFullscreen:!1}},mounted:function(){this.init()},beforeDestroy:function(){this.destroy()},methods:{toggleScreen:function(){if(!K.a.enabled)return this.$message({message:"浏览器异常",type:"warning"}),!1;K.a.toggle()},change:function(){this.isFullscreen=K.a.isFullscreen},init:function(){K.a.enabled&&K.a.on("change",this.change)},destroy:function(){K.a.enabled&&K.a.off("change",this.change)}}},W=U,Y=(n("bf63"),Object(f["a"])(W,N,H,!1,null,"48ac9888",null)),Q=Y.exports,X=n("4260"),Z={name:"",components:{SidebarTrigger:z,Breadcrumb:V,Screenfull:Q},data:function(){return{greeting:Object(X["b"])()}},mounted:function(){},methods:Object(a["a"])({},Object(s["b"])("user",["logout"]),{handleLogout:function(){this.logout(),this.$router.push({path:"/login"})}}),computed:Object(a["a"])({},Object(s["d"])("user",["name","avatar"]))},ee=Z,te=(n("1ee0"),Object(f["a"])(ee,L,$,!1,null,"702742c2",null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-wrapper"},[e._v("\n  版权声明\n")])},ie=[],ae={name:"",data:function(){return{}},methods:{},mounted:function(){}},se=ae,oe=(n("66cb"),Object(f["a"])(se,re,ie,!1,null,"5eeeb3f6",null)),le=oe.exports,ce=n("4360"),ue=document,fe=ue.body,de=1200,me={beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var e=this.$_isMobile();e?ce["a"].commit("app/CLOSE_SIDEBAR"):ce["a"].commit("app/OPEN_SIDEBAR")},methods:{$_isMobile:function(){var e=fe.getBoundingClientRect();return e.width-1<de},$_resizeHandler:function(){if(!document.hidden){var e=this.$_isMobile();ce["a"].commit("app/TOGGLE_DEVICE",e?"mobile":"desktop"),e?ce["a"].commit("app/CLOSE_SIDEBAR"):ce["a"].commit("app/OPEN_SIDEBAR")}}}},he={name:"",components:{Logo:m,SideMenu:k,LayoutHeader:ne,LayoutFooter:le},data:function(){return{}},mixins:[me],methods:{},mounted:function(){},computed:Object(a["a"])({},Object(s["d"])("app",{isCollapse:function(e){return e.sidebar.isCollapse}}))},be=he,pe=(n("5250"),Object(f["a"])(be,r,i,!1,null,"e24b45d6",null));t["default"]=pe.exports}}]);