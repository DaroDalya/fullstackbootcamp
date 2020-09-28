(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},4581:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("tasklistComponent")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Latest Task")]),n("div",{staticClass:"create-tasklist"},[n("label",{attrs:{for:"create-task"}},[t._v("Enter your task's name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text",id:"create-task",placeholder:"Create a task"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),n("button",{on:{click:t.createTask}},[t._v("Insert new task")])]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"tasklist-container"},t._l(t.tasklist,(function(e,r){return n("div",{key:e._id,staticClass:"tasklist",attrs:{item:e,index:r},on:{dblclick:function(n){return t.deleteTask(e._id)}}},[t._v(" "+t._s(e.dateCreated.getDate()+"/"+e.dateCreated.getMonth()+"/"+e.dateCreated.getFullYear())+" "),n("p",{staticClass:"task"},[t._v(t._s(e.task))])])})),0)])},o=[],c=(n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),l=n("d4ec"),f=n("bee2"),p=n("bc3a"),d=n.n(p),k="api/tasklist/",v=function(){function t(){Object(l["a"])(this,t)}return Object(f["a"])(t,null,[{key:"getTasklist",value:function(){return new Promise((function(t,e){d.a.get(k).then((function(e){var n=e.data;t(n.map((function(t){return Object(u["a"])(Object(u["a"])({},t),{},{dateCreated:new Date(t.dateCreated)})})))})).catch((function(t){e(t)}))}))}},{key:"insertTasklist",value:function(t){return d.a.post(k,{task:t})}},{key:"deleteTasklist",value:function(t){return d.a.delete("".concat(k).concat(t))}}]),t}(),b=v,m={name:"tasklistComponent",data:function(){return{tasklist:[],error:"",task:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getTasklist();case 3:t.tasklist=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createTask:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.insertTasklist(t.task);case 2:return e.next=4,b.getTasklist();case 4:t.tasklist=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deleteTask:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.deleteTasklist(t);case 2:return n.next=4,b.getTasklist();case 4:e.tasklist=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},g=m,h=(n("d7fb"),n("2877")),w=Object(h["a"])(g,i,o,!1,null,"5746999e",null),y=w.exports,_={name:"App",components:{tasklistComponent:y}},x=_,O=(n("034f"),Object(h["a"])(x,a,s,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d7fb:function(t,e,n){"use strict";var r=n("4581"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1641baff.js.map