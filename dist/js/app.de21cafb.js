(function(e){function t(t){for(var o,r,u=t[0],s=t[1],c=t[2],d=0,l=[];d<u.length;d++)r=u[d],a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({404:"404",dashboard:"dashboard",document:"document",form:"form",layout:"layout",list:"list",login:"login",muitiMenu:"muitiMenu"}[e]||e)+"."+{404:"56068517",dashboard:"02b9641a",document:"9821fdbf",form:"21901089",layout:"90952891",list:"323a08bd",login:"cef91cbd",muitiMenu:"232c2262"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={dashboard:1,document:1,layout:1,list:1,login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({404:"404",dashboard:"dashboard",document:"document",form:"form",layout:"layout",list:"list",login:"login",muitiMenu:"muitiMenu"}[e]||e)+"."+{404:"31d6cfe0",dashboard:"8803a337",document:"187091c5",form:"31d6cfe0",layout:"39369a87",list:"bebb0820",login:"334f0d90",muitiMenu:"31d6cfe0"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===o||d===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e),c=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var o=n("6e6d"),r=n("591a"),a={sidebar:{isCollapse:!1},device:"desktop"},i={TOGGLE_SIDEBAR:function(e){e.sidebar.isCollapse=!e.sidebar.isCollapse},TOGGLE_DEVICE:function(e,t){e.device=t},CLOSE_SIDEBAR:function(e){e.sidebar.isCollapse=!0},OPEN_SIDEBAR:function(e){e.sidebar.isCollapse=!1}},u={},s={namespaced:!0,state:a,mutations:i,actions:u},c=(n("3a23"),n("48fb"),n("7f43")),d=n.n(c),l=n("dbe4"),m=n("bea0"),f=d.a.create({timeout:5e3});f.interceptors.request.use(function(e){var t=Object(l["a"])();return t&&(e.headers["Authorization"]=t),e},function(e){return console.log(e),Promise.reject(e)}),f.interceptors.response.use(function(e){var t=e.data,n=t.code,o=t.message,r=t.data;return n&&0!==n&&m["MessageBox"].alert(o,{type:"warning"}),{code:n,message:o,data:r}},function(e){return m["MessageBox"].alert(e.toString(),{type:"warning"}),Promise.reject(e)});var p=f,h=function(e){return p.post("api/login",e)},b=function(e){return p.get("api/getUserInfo",{params:e})},g=n("a18c"),v={token:Object(l["a"])(),name:"",avatar:"",role:{},info:{}},E={SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLE:function(e,t){e.role=t},SET_INFO:function(e,t){e.info=t}},y={login:function(e,t){var n=e.commit;return new Promise(function(e,o){h(t).then(function(t){var o=t.code,r=t.data.token;0===o&&(n("SET_TOKEN",r),Object(l["c"])(r),e())}).catch(function(e){o(e)})})},getUserInfo:function(e){var t=e.commit,n=e.state;return new Promise(function(e,o){b({id:n.token}).then(function(n){var r=n.code,a=n.message,i=n.data;0!==r&&o(new Error(a));var u=i.token,s=i.userInfo,c=s.name,d=s.avatar,m=s.role;(!m||m.permissions.length<=0)&&o(new Error("role的permissions字段必须是个非空的数组")),m.permissionList=m.permissions.map(function(e){return e.permissionId}),Object(l["c"])(u),t("SET_NAME",c),t("SET_AVATAR",d),t("SET_ROLE",m),t("SET_INFO",s),e(i)}).catch(function(e){o(e)})})},logout:function(e){var t=e.commit;e.state;t("SET_TOKEN",""),t("SET_NAME",""),t("SET_ROLE",{}),t("SET_INFO",{}),Object(l["b"])(),Object(g["d"])()},resetToken:function(e){var t=e.commit;return new Promise(function(e){t("SET_TOKEN",""),t("SET_ROLE",{}),Object(l["b"])(),e()})}},T={namespaced:!0,state:v,mutations:E,actions:y},S=(n("e0c1"),n("93fe"),n("5a1b")),O=n.n(S);function x(e,t){if(t.meta&&t.meta.permission){for(var n=!1,o=0,r=e.length;o<r;o++)if(n=t.meta.permission.includes(e[o]),n)return!0;return!1}return!0}function _(e,t){var n=e.filter(function(e){return!!x(t.permissionList,e)&&(e.children&&e.children.length&&(e.children=_(e.children,t)),!0)});return n}var k={routes:[],addRoutes:[]},w={SET_ROUTES:function(e,t){e.addRoutes=t,e.routes=g["b"].concat(t)}},I={generateRoutes:function(e,t){var n=e.commit;return new Promise(function(e){var o=_(O()(g["a"]),t);n("SET_ROUTES",o),e(o)})}},M={namespaced:!0,state:k,mutations:w,actions:I};o["default"].use(r["a"]);t["a"]=new r["a"].Store({modules:{app:s,user:T,permission:M}})},"56d7":function(e,t,n){"use strict";n.r(t);n("5c07"),n("53da"),n("2556"),n("d0f8");var o=n("6e6d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("17cc"),u={},s=Object(i["a"])(u,r,a,!1,null,null,null),c=s.exports,d=(n("5b17"),n("20e9"),n("d093"),n("bea0"));o["default"].use(d["Pagination"]),o["default"].use(d["Scrollbar"]),o["default"].use(d["Dialog"]),o["default"].use(d["Dropdown"]),o["default"].use(d["DropdownMenu"]),o["default"].use(d["DropdownItem"]),o["default"].use(d["Menu"]),o["default"].use(d["Submenu"]),o["default"].use(d["MenuItem"]),o["default"].use(d["MenuItemGroup"]),o["default"].use(d["Input"]),o["default"].use(d["InputNumber"]),o["default"].use(d["Radio"]),o["default"].use(d["Checkbox"]),o["default"].use(d["CheckboxButton"]),o["default"].use(d["Select"]),o["default"].use(d["Option"]),o["default"].use(d["Button"]),o["default"].use(d["Table"]),o["default"].use(d["TableColumn"]),o["default"].use(d["DatePicker"]),o["default"].use(d["Tooltip"]),o["default"].use(d["Breadcrumb"]),o["default"].use(d["BreadcrumbItem"]),o["default"].use(d["Form"]),o["default"].use(d["FormItem"]),o["default"].use(d["Tag"]),o["default"].use(d["Icon"]),o["default"].use(d["Row"]),o["default"].use(d["Col"]),o["default"].use(d["Progress"]),o["default"].use(d["Badge"]),o["default"].use(d["Card"]),o["default"].use(d["Loading"].directive),o["default"].prototype.$loading=d["Loading"].service,o["default"].prototype.$msgbox=d["MessageBox"],o["default"].prototype.$alert=d["MessageBox"].alert,o["default"].prototype.$confirm=d["MessageBox"].confirm,o["default"].prototype.$prompt=d["MessageBox"].prompt,o["default"].prototype.$notify=d["Notification"],o["default"].prototype.$message=d["Message"];n("c018"),n("f842"),n("508f");var l=n("a18c"),m=n("4360"),f=(n("3a23"),n("e0c1"),n("3556")),p=(n("4453"),n("a7ca")),h=n("dbe4"),b=n("38bc"),g=n.n(b);n("70e7");g.a.configure({showSpinner:!1});var v=["login"];l["c"].beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t,n,o){var r,a,i,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(g.a.start(),r=Object(h["a"])(),!r){e.next=34;break}if("/login"!==t.path){e.next=8;break}o({path:"/"}),g.a.done(),e.next=32;break;case 8:if(a=m["a"].state.user.role&&m["a"].state.user.role.permissions,!a){e.next=13;break}o(),e.next=32;break;case 13:return e.prev=13,e.next=16,m["a"].dispatch("user/getUserInfo");case 16:return i=e.sent,u=i.userInfo.role,e.next=20,m["a"].dispatch("permission/generateRoutes",u);case 20:s=e.sent,l["c"].addRoutes(s),o(Object(f["a"])({},t,{replace:!0})),e.next=32;break;case 25:return e.prev=25,e.t0=e["catch"](13),e.next=29,m["a"].dispatch("user/resetToken");case 29:d["Message"].error(e.t0||"Has Error"),o({path:"/login"}),g.a.done();case 32:e.next=35;break;case 34:v.includes(t.name)?o():(o({path:"/login"}),g.a.done());case 35:case"end":return e.stop()}},e,null,[[13,25]])}));return function(t,n,o){return e.apply(this,arguments)}}()),l["c"].afterEach(function(){g.a.done()});n("93fe"),n("612f"),o["default"].directive("action",{inserted:function(e,t,n){var o=t.arg,r=m["a"].state.user.role,a=n.context.$route.meta.permission,i=a instanceof String&&[a]||a;r.permissions.forEach(function(t){i.includes(t.permissionId)&&t.actionList&&!t.actionList.includes(o)&&(e.parentNode&&e.parentNode.removeChild(e)||(e.style.display="none"))})}}),n("f10e");var E=n("fddc"),y=n.n(E),T={admin:"admin-token",visitor:"visitor-token"},S={"admin-token":{name:"至尊宝",avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557495976853&di=3d57f91b4e885cfae438d067b07e6ff9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F18%2F20170118234946_UmwMS.thumb.224_0.jpeg",username:"admin",roleId:"admin",role:{permissions:[{permissionId:"dashboard",permissionName:"首页",actionList:["profit"]},{permissionId:"list",permissionName:"列表",actionList:[]},{permissionId:"multiMenu",permissionName:"多级菜单",actionList:[]},{permissionId:"form",permissionName:"表单",actionList:[]},{permissionId:"permissionForm",permissionName:"权限表单",actionList:["add","delete"]}]}},"visitor-token":{name:"唐僧",avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557496245032&di=70e18d8e14e9f26abc85284421d89771&imgtype=0&src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F134115095_640_640.jpg",username:"visitor",roleId:"visitor",role:{permissions:[{permissionId:"dashboard",permissionName:"首页",actionList:[]}]}}};y.a.mock(/api\/login/,"post",function(e){var t=JSON.parse(e.body),n=t.username,o=T[n];return o?{code:0,message:"OK",data:{token:o}}:{code:110,message:"用户名不正确",data:{}}}),y.a.mock(/api\/getUserInfo/,"get",function(e){var t=e.url.match(/id=(\S*)/)[1],n=S[t];return n?{code:0,message:"OK",data:{token:t,userInfo:n}}:{code:110,message:"登录失败，无法获取用户信息",data:{}}});o["default"].config.productionTip=!1,new o["default"]({router:l["c"],store:m["a"],render:function(e){return e(c)}}).$mount("#app")},a18c:function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return E}),n.d(t,"d",function(){return S});var o=n("6e6d"),r=n("1e6f"),a=function(){return n.e("login").then(n.bind(null,"a55b"))},i=function(){return n.e("layout").then(n.bind(null,"eaf6"))},u=function(){return n.e("dashboard").then(n.bind(null,"cd59"))},s=function(){return n.e("document").then(n.bind(null,"080f"))},c=function(){return n.e("document").then(n.bind(null,"ba4e"))},d=function(){return n.e("muitiMenu").then(n.bind(null,"bd13"))},l=function(){return n.e("muitiMenu").then(n.bind(null,"fda3"))},m=function(){return n.e("muitiMenu").then(n.bind(null,"0e3f"))},f=function(){return n.e("muitiMenu").then(n.bind(null,"fffc"))},p=function(){return n.e("form").then(n.bind(null,"23bd"))},h=function(){return n.e("form").then(n.bind(null,"85b5"))},b=function(){return n.e("list").then(n.bind(null,"26d4"))},g=function(){return n.e("404").then(n.bind(null,"2754"))};o["default"].use(r["a"]);var v=[{path:"/login",name:"login",component:a,hidden:!0},{path:"/404",name:"err404",component:g,hidden:!0}],E=[{path:"/",name:"layout",component:i,redirect:"/dashboard",children:[{path:"/dashboard",name:"dashboard",component:u,meta:{title:"首页",icon:"home",permission:["dashboard"]}}]},{path:"/document",name:"document",component:i,meta:{title:"文档",icon:"file-text"},children:[{path:"index",name:"documentIndex",component:s,meta:{title:"索引"}},{path:"conventions",name:"donventions",component:c,meta:{title:"规范"}}]},{path:"/list",name:"list",component:i,children:[{path:"index",name:"listIndex",component:b,meta:{title:"列表",icon:"list",permission:["list"]}}]},{path:"/form",name:"form",component:i,meta:{title:"表单",icon:"file",permission:["form"]},children:[{path:"form1",name:"form1",component:p,meta:{title:"表单"}},{path:"form2",name:"form2",component:h,meta:{title:"分步表单"}}]},{path:"/menu",name:"menu",component:i,meta:{title:"多级菜单",icon:"th",permission:["multiMenu"]},children:[{path:"menu1",name:"menu1",component:d,meta:{title:"菜单1"},children:[{path:"menu1-1",name:"menu1-1",component:l,meta:{title:"菜单1-1"}},{path:"menu1-2",name:"menu1-2",component:m,meta:{title:"菜单1-2"}}]},{path:"menu2",name:"menu2",component:f,meta:{title:"菜单2"}}]},{path:"*",name:"all",component:g,hidden:!0}],y=function(){return new r["a"]({scrollBehavior:function(){return{y:0}},routes:v})},T=y();function S(){var e=y();T.matcher=e.matcher}t["c"]=T},c018:function(e,t,n){},d093:function(e,t,n){e.exports={menuBg:"#001529",menuText:"#bfcbd9"}},dbe4:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return s});var o=n("8c92"),r=n.n(o),a="Token";function i(){return r.a.get(a)}function u(e){return r.a.set(a,e,{expires:1})}function s(){return r.a.remove(a)}},f842:function(e,t,n){e.exports={menuBg:"#001529",menuText:"#bfcbd9"}}});