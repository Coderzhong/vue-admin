(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["map"],{"0166":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"map-wrapper"},[i("div",{staticClass:"description"},[i("h4",[t._v("当前实时坐标：("+t._s(t.x)+", "+t._s(t.y)+")")])]),i("div",{staticClass:"map",attrs:{id:"map"}})])},a=[],o=(i("0857"),i("7bc1"),{data:function(){return{bm:null,x:120.137741,y:30.171594,point:null,convertor:null,intervalTimer:null}},mounted:function(){var t=this;this.initMap(),this.intervalTimer=setInterval(function(){var n=t.x.toString().split(".")[0],i=t.y.toString().split(".")[0],e=parseInt(t.x.toString().split(".")[1]),a=parseInt(t.y.toString().split(".")[1]);e+=200,a+=100,t.x="".concat(n,".").concat(e),t.y="".concat(i,".").concat(a),t.changePoint()},1e3)},destroyed:function(){clearInterval(this.intervalTimer)},methods:{initMap:function(){this.bm=new window.BMap.Map("map"),this.point=new window.BMap.Point(this.x,this.y),this.bm.enableScrollWheelZoom(!0),this.convertor=new window.BMap.Convertor,this.convertor.translate([this.point],1,5,this.translateCallback)},translateCallback:function(t){if(0===t.status){var n=new window.BMap.Label("Foo",{offset:new window.BMap.Size(20,-10)});n.setStyle({border:"0 none",borderRadius:"14px",padding:"2px 6px",fontSize:"14px",fontWeight:"bold",color:"red"});var i=new window.BMap.Marker(t.points[0]);i.setLabel(n),this.bm.addOverlay(i),this.bm.centerAndZoom(t.points[0],15)}},changePoint:function(){this.point=new window.BMap.Point(this.x,this.y);var t=this.point;this.bm.clearOverlays(),this.convertor.translate([t],1,5,this.translateCallback)}}}),r=o,s=(i("6bac"),i("17cc")),l=Object(s["a"])(r,e,a,!1,null,"41d3f664",null);n["default"]=l.exports},"20f3":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"map-wrapper"},[i("div",{staticClass:"description"},[i("h4",[t._v("点击Marker可查看详情")])]),i("div",{staticClass:"map",attrs:{id:"map"}})])}],o={data:function(){return{bm:null,gpsCoord:[[107.989805,41.657951,"001"],[121.677394,31.096637,"002"],[119.248951,33.595197,"003"],[112.257978,30.811225,"004"],[113.325021,33.994575,"005"],[119.616897,29.949854,"006"],[116.562945,39.725628,"007"],[106.297254,30.556804,"008"]]}},mounted:function(){this.initMap()},methods:{initMap:function(){var t=this;this.bm=new window.BMap.Map("map"),this.bm.enableScrollWheelZoom(!0);var n=new window.BMap.Point(116.404,39.915);this.bm.centerAndZoom(n,5);for(var i=function(n){var i=new window.BMap.Point(t.gpsCoord[n][0],t.gpsCoord[n][1]),e=t.gpsCoord[n][2],a=new window.BMap.Label("".concat(e),{offset:new window.BMap.Size(20,-10)});a.setStyle({border:"0 none",borderRadius:"14px",padding:"2px 6px",fontSize:"14px",fontWeight:"bold",color:"red"});var o=new window.BMap.Convertor;o.translate([i],1,5,function(n){if(0===n.status){var i=new window.BMap.Marker(n.points[0]);i.setLabel(a),t.bm.addOverlay(i),i.addEventListener("click",function(n){t.showInfo(e,n)})}})},e=0;e<this.gpsCoord.length;e++)i(e)},showInfo:function(t,n){var i={width:250,height:10,title:"我是".concat(t)},e=new window.BMap.InfoWindow("坐标：(".concat(n.point.lng,", ").concat(n.point.lat,")"),i);this.bm.openInfoWindow(e,n.point)}}},r=o,s=(i("30cf"),i("17cc")),l=Object(s["a"])(r,e,a,!1,null,"520ab088",null);n["default"]=l.exports},"30cf":function(t,n,i){"use strict";var e=i("5e459"),a=i.n(e);a.a},"5e459":function(t,n,i){},"6bac":function(t,n,i){"use strict";var e=i("7dbb"),a=i.n(e);a.a},"7bc1":function(t,n,i){"use strict";var e=i("22e9"),a=i("a013"),o=i("0d5f"),r=i("b0f4"),s=i("b146"),l=i("35dd"),c=i("1f98"),d=i("b6f1"),p=Math.min,u=[].push,h="split",f="length",w="lastIndex",v=4294967295,b=!d(function(){RegExp(v,"y")});i("629c")("split",2,function(t,n,i,d){var m;return m="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[f]||2!="ab"[h](/(?:ab)*/)[f]||4!="."[h](/(.?)(.?)/)[f]||"."[h](/()()/)[f]>1||""[h](/.?/)[f]?function(t,n){var a=String(this);if(void 0===t&&0===n)return[];if(!e(t))return i.call(a,t,n);var o,r,s,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=void 0===n?v:n>>>0,b=new RegExp(t.source,d+"g");while(o=c.call(b,a)){if(r=b[w],r>p&&(l.push(a.slice(p,o.index)),o[f]>1&&o.index<a[f]&&u.apply(l,o.slice(1)),s=o[0][f],p=r,l[f]>=h))break;b[w]===o.index&&b[w]++}return p===a[f]?!s&&b.test("")||l.push(""):l.push(a.slice(p)),l[f]>h?l.slice(0,h):l}:"0"[h](void 0,0)[f]?function(t,n){return void 0===t&&0===n?[]:i.call(this,t,n)}:i,[function(i,e){var a=t(this),o=void 0==i?void 0:i[n];return void 0!==o?o.call(i,a,e):m.call(String(a),i,e)},function(t,n){var e=d(m,t,this,n,m!==i);if(e.done)return e.value;var c=a(t),u=String(this),h=o(c,RegExp),f=c.unicode,w=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),g=new h(b?c:"^(?:"+c.source+")",w),x=void 0===n?v:n>>>0;if(0===x)return[];if(0===u.length)return null===l(g,u)?[u]:[];var M=0,y=0,C=[];while(y<u.length){g.lastIndex=b?y:0;var B,S=l(g,b?u:u.slice(y));if(null===S||(B=p(s(g.lastIndex+(b?0:y)),u.length))===M)y=r(u,y,f);else{if(C.push(u.slice(M,y)),C.length===x)return C;for(var k=1;k<=S.length-1;k++)if(C.push(S[k]),C.length===x)return C;y=M=B}}return C.push(u.slice(M)),C}]})},"7dbb":function(t,n,i){}}]);