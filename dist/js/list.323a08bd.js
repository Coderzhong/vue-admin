(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"26d4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"query-box"},[n("el-form",{attrs:{inline:""}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"产品编号"},model:{value:e.query.number,callback:function(t){e.$set(e.query,"number",t)},expression:"query.number"}})],1),n("el-form-item",[n("el-select",{attrs:{placeholder:"产地"},model:{value:e.query.origin,callback:function(t){e.$set(e.query,"origin",t)},expression:"query.origin"}},e._l(e.origin,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),n("el-form-item",[n("el-date-picker",{attrs:{type:"date",placeholder:"出厂日期"},model:{value:e.query.date,callback:function(t){e.$set(e.query,"date",t)},expression:"query.date"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleQuery}},[e._v("查询")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleAdd}},[e._v("新增")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("导出")])],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.list}},[n("el-table-column",{attrs:{prop:"date",label:"日期",sortable:""}}),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),n("el-table-column",{attrs:{prop:"address",label:"地址",formatter:e.formatter}}),n("el-table-column",{attrs:{prop:"tag",label:"标签",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:"家"===t.row.tag?"primary":"success","close-transition":""}},[e._v(e._s(t.row.tag))])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;return[n("el-button",{attrs:{type:"text"}},[e._v("编辑")]),n("el-button",{attrs:{type:"text"}},[e._v("删除")]),n("el-button",{attrs:{type:"text"}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link action-more"},[e._v("\n              更多"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("禁用")]),n("el-dropdown-item",[e._v("详情")])],1)],1)],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.query.currentPage,limit:e.query.pageSize},on:{"update:page":function(t){return e.$set(e.query,"currentPage",t)},"update:limit":function(t){return e.$set(e.query,"pageSize",t)},pagination:e.getList}})],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container"},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[],l=(n("b06f"),{name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),u=l,c=(n("f3bf"),n("17cc")),s=Object(c["a"])(u,o,i,!1,null,"409b948d",null),p=s.exports,d={components:{Pagination:p},data:function(){return{loading:!0,total:0,query:{number:"",date:null,origin:"",currentPage:1,pageSize:10},origin:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"}],list:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"}]}},mounted:function(){this.getList()},methods:{getList:function(){this.loading=!1},handleQuery:function(){this.query.currentPage=1,this.getList()},handleAdd:function(){},handleDownload:function(){},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e}}},f=d,g=Object(c["a"])(f,a,r,!1,null,"4e49642c",null);t["default"]=g.exports},"2ce6":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3b80":function(e,t,n){var a=n("2d2c"),r=n("2b11"),o=n("201d"),i=n("2ce6"),l="["+i+"]",u="​",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),p=function(e,t,n){var r={},l=o(function(){return!!i[e]()||u[e]()!=u}),c=r[e]=l?t(d):i[e];n&&(r[n]=c),a(a.P+a.F*l,"String",r)},d=p.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=p},"62af":function(e,t,n){var a=n("7cbd"),r=n("2ba0").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},"78de":function(e,t,n){var a=n("48ed"),r=n("b915"),o=n("54a3"),i=n("1f51"),l=n("3301"),u=n("8003"),c=Object.getOwnPropertyDescriptor;t.f=n("3a0f")?c:function(e,t){if(e=o(e),t=i(t,!0),u)try{return c(e,t)}catch(n){}if(l(e,t))return r(!a.f.call(e,t),e[t])}},b06f:function(e,t,n){"use strict";var a=n("4839"),r=n("3301"),o=n("9b6d"),i=n("d62f"),l=n("1f51"),u=n("201d"),c=n("62af").f,s=n("78de").f,p=n("694f").f,d=n("3b80").trim,f="Number",g=a[f],m=g,b=g.prototype,y=o(n("04ac")(b))==f,h="trim"in String.prototype,v=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=h?t.trim():d(t,3);var n,a,r,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,u=t.slice(2),c=0,s=u.length;c<s;c++)if(i=u.charCodeAt(c),i<48||i>r)return NaN;return parseInt(u,a)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(y?u(function(){b.valueOf.call(n)}):o(n)!=f)?i(new m(v(t)),n,g):v(t)};for(var _,w=n("3a0f")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)r(m,_=w[N])&&!r(g,_)&&p(g,_,s(m,_));g.prototype=b,b.constructor=g,n("7f00")(a,f,g)}},d62f:function(e,t,n){var a=n("b429"),r=n("d772").set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},d772:function(e,t,n){var a=n("b429"),r=n("4d65"),o=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("0709")(Function.call,n("78de").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:o}},f060:function(e,t,n){},f3bf:function(e,t,n){"use strict";var a=n("f060"),r=n.n(a);r.a}}]);