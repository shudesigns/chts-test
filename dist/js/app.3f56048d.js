(function(t){function e(e){for(var n,l,o=e[0],r=e[1],c=e[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/chts-test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1358:function(t,e,a){},"55c1":function(t,e,a){"use strict";a("876b")},"563c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],l={name:"App",data:function(){return{menu:[{text:"Index",url:"/"},{text:"Test One",url:"/employees"}]}}},o=l,r=(a("cf1c"),a("2877")),c=Object(r["a"])(o,s,i,!1,null,null,null),d=c.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"home"}},[a("v-app-bar",{staticClass:"px-5",attrs:{height:"50px",fixed:"",dark:"",flat:""}},[a("a",{staticClass:"d-inline-flex align-center",attrs:{href:"https://github.com/shudesigns/chts-test",target:"_blank"}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-github")]),t._v(" View on Github")],1)]),a("v-main",[a("div",{staticClass:"main-container container d-flex flex-column justify-center align-center"},[a("h1",{staticClass:"main-title"},[t._v("CHTS 前端工程師 實作考題")]),a("h2",{staticClass:"sub-title"},[t._v("BY 蔡書薇")]),a("div",{staticClass:"main-links mt-5"},[a("ul",{staticClass:"list-unstyled row justify-center"},[a("li",{staticClass:"col-auto"},[a("v-btn",{attrs:{to:"/employees",depressed:""}},[t._v("試題一")])],1),a("li",{staticClass:"col-auto"},[a("v-btn",{attrs:{to:"/rwd",depressed:""}},[t._v("試題二")])],1),a("li",{staticClass:"col-auto"},[a("v-btn",{attrs:{to:"/map",depressed:""}},[t._v("試題三")])],1)])])])])],1)},p=[],f={name:"Home"},v=f,h=(a("7d4c"),a("6544")),g=a.n(h),b=a("7496"),x=a("40dc"),C=a("8336"),_=a("132d"),y=a("f6c4"),w=Object(r["a"])(v,m,p,!1,null,null,null),I=w.exports;g()(w,{VApp:b["a"],VAppBar:x["a"],VBtn:C["a"],VIcon:_["a"],VMain:y["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"employees"}},[a("v-main",[a("div",{staticClass:"main-container container"},[a("div",{staticClass:"topbar"},[a("div",{staticClass:"topbar-inner row"},[a("div",{staticClass:"col-auto topbar-title"},[a("h1",{staticClass:"topbar-title-txt"},[t._v("員工通訊錄")])]),a("div",{staticClass:"col-auto topbar-tools"},[a("ul",{staticClass:"list-unstyled row"},[a("li",{staticClass:"col col-3"},[a("v-btn",{staticClass:"topbar-add",attrs:{rounded:"",depressed:"",color:t.accentColor,dark:""},on:{click:function(e){t.dialogEdit=!0}}},[t._v("新增")])],1),a("li",{staticClass:"col col-9"},[a("v-text-field",{staticClass:"topbar-search",attrs:{"append-icon":"mdi-magnify",label:"搜尋...",filled:"",dense:"",rounded:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])])])]),null!=t.items?a("v-data-table",{attrs:{headers:t.headers,page:t.page,"hide-default-footer":"",items:t.items,"items-per-page":20,search:t.search,"no-data-text":"無資料","no-results-text":"沒有相符的資料","sort-by":"id","mobile-breakpoint":"600"},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.email",fn:function(e){var n=e.item;return[a("a",{attrs:{href:"mailto:"+n.email,target:"_blank"}},[t._v(t._s(n.email))])]}},{key:"item.tel",fn:function(e){var n=e.item;return[a("a",{attrs:{href:"tel:"+n.tel,target:"_blank"}},[t._v(t._s(n.tel))])]}},{key:"item.edit",fn:function(e){var n=e.item;return[a("v-btn",{staticClass:"v-btn__modify",attrs:{icon:""},on:{click:function(e){return t.editItem("edit",n)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{staticClass:"v-btn__delete",attrs:{icon:""},on:{click:function(e){return t.editItem("delete",n)}}},[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,1915539991)}):t._e(),a("v-pagination",{staticClass:"pagination",attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]),a("v-form",{ref:"editForm",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[a("v-card",{staticClass:"py-5"},[a("v-card-title",{staticClass:"pt-2"},[t._v(t._s(t.dialogTitle))]),a("v-card-text",{staticClass:"py-2"},[a("v-row",{staticClass:"my-n1"},[a("v-col",{staticClass:"py-1",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"部門",type:"text",name:"department",rules:[t.rules.department],counter:10,required:""},model:{value:t.editedItem.department,callback:function(e){t.$set(t.editedItem,"department",e)},expression:"editedItem.department"}})],1),a("v-col",{staticClass:"py-1",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"員工編號",type:"text",name:"id",rules:[t.rules.id.range,t.rules.id.duplicate],required:""},model:{value:t.editedItem.id,callback:function(e){t.$set(t.editedItem,"id",e)},expression:"editedItem.id"}})],1),a("v-col",{staticClass:"py-1",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"姓名",type:"text",name:"name",rules:[t.rules.name],counter:50,required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-col",{staticClass:"py-1",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"電話",type:"tel",name:"tel",rules:[t.rules.tel],required:""},model:{value:t.editedItem.tel,callback:function(e){t.$set(t.editedItem,"tel",e)},expression:"editedItem.tel"}})],1),a("v-col",{staticClass:"py-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"E-MAIL",type:"email",name:"email",rules:[t.rules.email],required:""},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1)],1)],1),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{rounded:"",depressed:"",color:t.accentColor,dark:t.valid,disabled:!t.valid},on:{click:t.confirmSave}},[t._v("確定")]),a("v-btn",{attrs:{rounded:"",depressed:""},on:{click:function(e){return t.closeDialog("edit")}}},[t._v("取消")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",{staticClass:"py-5"},[a("v-card-title",{staticClass:"justify-center text-center pt-2"},[t._v("是否刪除此項目？")]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{rounded:"",depressed:"",color:t.accentColor,dark:""},on:{click:t.confirmDelete}},[t._v("確定")]),a("v-btn",{attrs:{rounded:"",depressed:""},on:{click:function(e){return t.closeDialog("delete")}}},[t._v("取消")])],1)],1)],1)],1)},V=[],j=(a("c975"),a("a434"),a("bc3a")),E=a.n(j),O={name:"Employees",data:function(){var t=this;return{accentColor:"#5d83ff",headers:[{text:"部門",sortable:!1,value:"department"},{text:"員工編號",sortable:!1,value:"id"},{text:"姓名",sortable:!1,value:"name"},{text:"E-MAIL",sortable:!1,value:"email"},{text:"電話",sortable:!1,value:"tel"},{text:"編輯",sortable:!1,value:"edit",align:"center"}],items:null,page:1,pageCount:0,search:"",dialogEdit:!1,dialogDelete:!1,editedIndex:-1,editedItem:{department:"",id:"",name:"",email:"",tel:""},defaultItem:{department:"",id:"",name:"",email:"",tel:""},valid:!0,rules:{department:function(t){return t.length>=2&&t.length<=10||"字元數限於2至10之間"},id:{range:function(t){var e=/^B000[0-9]{2}$/;return e.test(t)||"員工編號格式錯誤"},duplicate:function(e){return!(-1===t.editedIndex||t.editedIndex>-1&&e!=t.items[t.editedIndex].id)||(t.items.every((function(t){return t.id!=e}))||"此員工編號已存在")}},name:function(t){return t.length>=2&&t.length<=50||"字元數限於2至50之間"},tel:function(t){var e=/^[0-9]{10}$/;return e.test(t)||"電話格式錯誤"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"E-MAIL格式錯誤"}}}},computed:{dialogTitle:function(){return-1===this.editedIndex?"新增資訊":"編輯資訊"}},watch:{dialogEdit:function(t){t||this.closeDialog("edit")},dialogDelete:function(t){t||this.closeDialog("delete")}},methods:{closeDialog:function(t){var e=this;"edit"===t&&(this.dialogEdit=!1),"delete"===t&&(this.dialogDelete=!1),this.$nextTick((function(){e.editedIndex=-1,e.editedItem=Object.assign({},e.defaultItem),e.$refs.editForm.resetValidation()}))},confirmSave:function(){this.editedIndex>-1?Object.assign(this.items[this.editedIndex],this.editedItem):this.items.push(this.editedItem),this.closeDialog("edit")},editItem:function(t,e){"edit"===t&&(this.dialogEdit=!0),"delete"===t&&(this.dialogDelete=!0),this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e)},confirmDelete:function(){this.items.splice(this.editedIndex,1),this.closeDialog("delete")}},mounted:function(){var t=this;E.a.get("/data/employees.json").then((function(e){t.items=e.data}))}},$=O,D=(a("c8a2"),a("b0af")),z=a("99d9"),A=a("62ad"),T=a("8fea"),M=a("169a"),S=a("4bd4"),B=a("891e"),P=a("0fd9"),W=a("8654"),F=Object(r["a"])($,k,V,!1,null,null,null),R=F.exports;g()(F,{VApp:b["a"],VBtn:C["a"],VCard:D["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VCol:A["a"],VDataTable:T["a"],VDialog:M["a"],VForm:S["a"],VIcon:_["a"],VMain:y["a"],VPagination:B["a"],VRow:P["a"],VTextField:W["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"rwd"}},[a("v-app-bar",{attrs:{height:"80",color:"#000000",dark:"",flat:""}},[a("div",{staticClass:"main-container container"},[a("h1",{staticClass:"v-app-bar-title"},[t._v("Logo")])])]),a("v-main",[a("div",{staticClass:"main-container container"},[a("custom-row",[a("custom-col",{attrs:{size:t.panel1.size,cols:t.panel1.cols}},[a("custom-panel",{scopedSlots:t._u([{key:"head",fn:function(){return[a("v-btn",{attrs:{width:"72",height:"28",color:"#ffffff",depressed:""},on:{click:t.toggle}},[t._v(t._s(t.toggleText))])]},proxy:!0},{key:"inner",fn:function(){return[a("v-row",{ref:"flags"},t._l(t.visibleFlags,(function(t){return a("v-col",{key:t,staticClass:"col"},[a("div",{staticClass:"flag"})])})),1)]},proxy:!0}])})],1),a("custom-col",{attrs:{size:t.panel2.size,cols:t.panel2.cols}},[a("custom-panel")],1),a("custom-col",{attrs:{size:"md"}},[a("custom-row",[a("custom-col",{attrs:{cols:"12"}},[a("custom-panel")],1),a("custom-col",{attrs:{cols:"12"}},[a("custom-panel")],1)],1)],1),a("custom-col",{attrs:{size:"lg"}},[a("custom-row",[a("custom-col",[a("custom-panel")],1),a("custom-col",[a("custom-panel")],1)],1)],1)],1)],1)])],1)},L=[],H=(a("5377"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"custom-row"},[t._t("default")],2)}),J=[],U={name:"CustomRow"},Z=U,G=Object(r["a"])(Z,H,J,!1,null,null,null),N=G.exports;g()(G,{VRow:P["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"custom-col",class:t.size,attrs:{cols:""!=t.size?"auto":t.cols}},[t._t("default")],2)},K=[],Q=(a("a9e3"),{name:"CustomCol",props:{cols:{type:[String,Boolean,Number],default:!1},size:{type:String,default:""}}}),X=Q,tt=Object(r["a"])(X,Y,K,!1,null,null,null),et=tt.exports;g()(tt,{VCol:A["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-panel"},[a("div",{staticClass:"custom-panel-head"},[t._t("head")],2),t.$slots.inner?a("div",{staticClass:"custom-panel-inner"},[t._t("inner")],2):t._e()])},nt=[],st={},it=Object(r["a"])(st,at,nt,!1,null,null,null),lt=it.exports,ot={name:"Rwd",data:function(){return{panel1:{size:"md",cols:!1},panel2:{size:"lg",cols:!1},isExpand:!1,flagsWidth:null}},components:{"custom-row":N,"custom-col":et,"custom-panel":lt},computed:{toggleText:function(){return this.isExpand?"較少":"更多"},visibleFlags:function(){return null!=this.flagsWidth&&this.flagsWidth/346>=2?Math.floor(this.flagsWidth/300):2}},methods:{toggle:function(){var t=this;this.isExpand?(this.panel1={size:"md",cols:!1},this.panel2={size:"lg",cols:!1}):(this.panel1={size:"",cols:12},this.panel2={size:"",cols:12}),this.$nextTick((function(){t.flagsWidth=t.$refs.flags.clientWidth,t.isExpand=!t.isExpand}))},resize:function(){this.flagsWidth=this.$refs.flags.clientWidth}},mounted:function(){window.onresize=this.resize}},rt=ot,ct=(a("55c1"),Object(r["a"])(rt,q,L,!1,null,null,null)),dt=ct.exports;g()(ct,{VApp:b["a"],VAppBar:x["a"],VBtn:C["a"],VCol:A["a"],VMain:y["a"],VRow:P["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"map"}},[a("v-main",[a("div",{staticClass:"main-container container"},[a("div",{staticClass:"map-scale d-flex flex-column align-center text-center"},[a("span",{staticClass:"map-scale-txt"},[t._v("Anti-trans bills by state")]),a("ul",{staticClass:"map-scale-values list-unstyled"},t._l(8,(function(t){return a("li",{key:t})})),0)]),null!=t.mapData?a("svg-map",{attrs:{map:t.USA,"location-class":t.locationClass}}):t._e()],1)])],1)},mt=[],pt=(a("159b"),a("b0c0"),a("75de")),ft=a("3ab1"),vt={name:"Map",data:function(){return{USA:ft["a"],mapData:null}},components:{"svg-map":pt["a"]},methods:{locationClass:function(t){var e="";return this.mapData.forEach((function(a){a.state===t.name&&(e="value-"+a.bills)})),e}},mounted:function(){var t=this;E.a.get("/data/map.json").then((function(e){t.mapData=e.data}))}},ht=vt,gt=(a("8c3b"),Object(r["a"])(ht,ut,mt,!1,null,null,null)),bt=gt.exports;g()(gt,{VApp:b["a"],VMain:y["a"]}),n["a"].use(u["a"]);var xt=[{path:"/",name:"Home",component:I},{path:"/employees",name:"Employees",component:R},{path:"/rwd",name:"Rwd",component:dt},{path:"/map",name:"Map",component:bt}],Ct=new u["a"]({mode:"history",base:"/chts-test/",routes:xt}),_t=Ct,yt=a("f309");n["a"].use(yt["a"]);var wt=new yt["a"]({theme:{disable:!0}});a("ba8c");n["a"].config.productionTip=!1,new n["a"]({router:_t,vuetify:wt,render:function(t){return t(d)}}).$mount("#app")},"67c5":function(t,e,a){},"7d4c":function(t,e,a){"use strict";a("67c5")},"876b":function(t,e,a){},"8c3b":function(t,e,a){"use strict";a("563c")},a134:function(t,e,a){},ba8c:function(t,e,a){},c8a2:function(t,e,a){"use strict";a("a134")},cf1c:function(t,e,a){"use strict";a("1358")}});
//# sourceMappingURL=app.3f56048d.js.map