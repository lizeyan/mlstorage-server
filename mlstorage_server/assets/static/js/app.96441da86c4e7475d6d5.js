webpackJsonp([1],{"0fhZ":function(t,e){},"1/oy":function(t,e){},"1daq":function(t,e){},"2+Bm":function(t,e,s){"use strict";var a=s("FLAC"),n={},i={name:"octicon",props:{name:{type:String,validator:function(t){return t?t in n:null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(Object(a.a)('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{octicon:!0,"octicon-spin":this.spin,"octicon-flip-horizontal":"horizontal"===this.flip,"octicon-flip-vertical":"vertical"===this.flip,"octicon-inverse":this.inverse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?this.icon.viewBox?this.icon.viewBox:"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},width:function(){return this.childrenWidth||this.icon&&this.icon.width*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,s=0;this.$children.forEach(function(t){e=Math.max(e,t.width),s=Math.max(s,t.height)}),this.childrenWidth=e,this.childrenHeight=s,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(s-t.height)/2})}},register:function(t){for(var e in t)n[e]=t[e]},icons:n},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon?s("path",{attrs:{d:t.icon.d}}):t._e()])],2)},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("csa/")},null,null);e.a=o.exports},"9M+g":function(t,e){},FK0C:function(t,e){},GHwr:function(t,e){},GfHa:function(t,e){},IHbo:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("e6fC"),i=s("2+Bm"),r=(s("Jmt5"),s("9M+g"),s("hRG5"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-wrapper",attrs:{id:"app"}},[e("router-view",{staticClass:"app-content"})],1)},staticRenderFns:[]});var o=s("VU/8")(null,r,!1,function(t){s("1daq")},null,null).exports,l=s("/ocq"),c=s("Zrlr"),d=s.n(c),u=s("wxAW"),h=s.n(u),f=new(function(){function t(){d()(this,t),this._bus=new a.a}return h()(t,[{key:"addReloader",value:function(t){this._bus.$on("reload",t)}},{key:"removeReloader",value:function(t){this._bus.$off("reload",t)}},{key:"callReloader",value:function(){this._bus.$emit("reload")}},{key:"watchLoadingFlag",value:function(t){this._bus.$on("loadingFlag",t)}},{key:"unwatchLoadingFlag",value:function(t){this._bus.$off("loadingFlag",t)}},{key:"setLoadingFlag",value:function(t){this._bus.$emit("loadingFlag",t)}},{key:"addErrorHandler",value:function(t){this._bus.$on("error",t)}},{key:"removeErrorHandler",value:function(t){this._bus.$off("error",t)}},{key:"setError",value:function(t){var e=t.message,s=t.title;this._bus.$emit("error",{hasError:!!e,message:e,title:s})}},{key:"unsetError",value:function(){this._bus.$emit("error",{hasError:!1})}}]),t}()),v={props:["loading"],data:function(){return{isLoading:!1}},created:function(){this.showInterval=null,f.watchLoadingFlag(this.watchLoadingFlag)},destroyed:function(){f.unwatchLoadingFlag(this.watchLoadingFlag),this.showInterval&&(clearInterval(this.showInterval),this.showInterval=null)},methods:{watchLoadingFlag:function(t){var e=this;t?this.showInterval||(this.showInterval=setInterval(function(){clearInterval(e.showInterval),e.isLoading=!0,e.showInterval=null},500)):(this.showInterval&&(clearInterval(this.showInterval),this.showInterval=null),this.isLoading=!1)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isLoading?e("b-progress",{staticStyle:{width:"100%",height:"5px"},attrs:{value:100,variant:"dark",animated:!0,striped:!0}}):this._e()},staticRenderFns:[]},g=s("VU/8")(v,m,!1,null,null,null).exports,_={data:function(){return{hasError:!1,errorTitle:null,errorMessage:null}},mounted:function(){f.addErrorHandler(this.setError)},destroyed:function(){f.removeErrorHandler(this.setError)},methods:{setError:function(t){var e=t.hasError,s=t.title,a=t.message;this.hasError=e,this.errorTitle=s,this.errorMessage=a}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.hasError?s("b-container",{staticStyle:{"padding-top":"15px"},attrs:{fluid:""}},[s("b-row",[s("b-col",[s("b-alert",{attrs:{variant:"danger",show:""}},[t.errorTitle?s("h4",{staticClass:"alert-heading"},[t._v(t._s(t.errorTitle))]):t._e(),t._v(" "),s("div",[t._v(t._s(t.errorMessage))])])],1)],1)],1):t._e()],1)},staticRenderFns:[]},b=s("VU/8")(_,p,!1,null,null,null).exports,x=s("mtWM"),y=s.n(x),j=s("fZjL"),w=s.n(j),C={props:{status:{type:String,default:"succeeded"}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",["running"===this.status?e("mu-icon",{attrs:{value:"update",color:"green500"}}):"failed"===this.status?e("mu-icon",{attrs:{value:"error_outline",color:"red500"}}):"lost"===this.status?e("mu-icon",{attrs:{value:"help_outline",color:"orange500"}}):e("mu-icon",{attrs:{value:"done"}})],1)},staticRenderFns:[]},R=s("VU/8")(C,k,!1,null,null,null).exports,E=s("PJh5"),T=s.n(E),D=function(){function t(){d()(this,t),this._tm=null,this._dateText="",this._dateDiff=0,this._interval=null,this._refreshRate=null,this._hasDestroyed=!1,this._watchers=[]}return h()(t,[{key:"addWatcher",value:function(t){this._watchers.push(t)}},{key:"setTimestamp",value:function(t){this._tm=T.a.utc(1e3*t).local(),this.updateText()}},{key:"updateText",value:function(){var t=this,e=T()(),s=Math.floor(Math.abs(this._tm.diff(e))/1e3);this._dateDiff=s;var a=0;if(a=s<=61?1:s<=3660?60:s<=9e4?3600:null,this._dateText=s<60?s>=2?s+" seconds ago":s>=1?"1 second ago":"just now":s<3600?s>=120?Math.floor(s/60)+" minutes ago":"1 minute ago":s<86400?s>=7200?Math.floor(s/3600)+" hours ago":"1 hour ago":this._tm.format("LLL"),!this._hasDestroyed){a&&a===this._refreshRate||this._interval&&(clearInterval(this._interval),this._interval=null),a&&a!==this._refreshRate&&(this._interval=setInterval(function(){return t.updateText()},1e3*a),this._refreshRate=a);for(var n=0;n<this._watchers.length;++n)this._watchers[n](this._dateText,this._dateDiff)}}},{key:"destroy",value:function(){this._hasDestroyed=!0,this._interval&&(clearInterval(this._interval),this._interval=null)}}]),t}();function I(t,e){var s=t.status,a=t.exit_code;if("RUNNING"===s){if(e>3600)return"LOST";if(e>300)return"Maybe LOST"}return"COMPLETED"===s&&0!==a?"FAILED":s}function z(t,e,s){var a=t.status;return"RUNNING"===(a=I({status:a,exit_code:t.exit_code},e))?"primary":"Maybe LOST"===a?"warning":"FAILED"===a||"LOST"===a?"danger":s}var F={components:{ExperimentStatusIcon:R},props:{doc:{type:Object}},data:function(){return{expanded:!1,dateText:null,dateDiff:0,statusClass:null}},mounted:function(){var t=this;this.timeDiff=new D,this.timeDiff.addWatcher(function(e,s){return t.timeDiffWatcher(e,s)}),this.timeDiff.setTimestamp(this.doc.heartbeat)},destroyed:function(){this.timeDiff&&this.timeDiff.destroy()},methods:{timeDiffWatcher:function(t,e){this.dateText=t,this.dateDiff=e,this.statusClass=z(this.doc,this.dateDiff)}},computed:{sortedResultKeys:function(){if(this.doc.result){var t=w()(this.doc.result);return t.sort(),t}return null}},watch:{doc:function(t){this.timeDiff.setTimestamp(t.heartbeat)}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{variant:t.statusClass,to:"/"+t.doc.id+"/"}},[s("div",{staticClass:"d-flex w-100 justify-content-between flex-md-row flex-column"},[s("h5",{staticClass:"mb-1"},[t._v(t._s(t.doc.name))]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v(t._s(t.dateText))])]),t._v(" "),t.doc.description?s("div",[t._v("\n    "+t._s(t.doc.description)+"\n  ")]):t._e(),t._v(" "),t.doc.result?s("div",{staticClass:"results d-flex justify-content-start flex-wrap"},t._l(t.sortedResultKeys,function(e){return s("div",{key:e,staticClass:"resultItem d-flex justify-content-start"},[s("div",{staticClass:"resultKey"},[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"resultValue"},[t._v(t._s(t.doc.result[e]))])])}),0):t._e(),t._v(" "),t.doc.tags?s("div",{staticClass:"tags"},t._l(t.doc.tags,function(e){return s("b-badge",{key:e,attrs:{variant:t.statusClass||"secondary"}},[t._v(t._s(e))])}),1):t._e()])},staticRenderFns:[]};var L={components:{ExperimentListEntry:s("VU/8")(F,S,!1,function(t){s("luMz")},"data-v-8987d16c",null).exports},props:{query:{type:Object,default:function(){}},pageSize:{type:Number,default:10},pageId:{type:Number,default:1}},data:function(){return{docs:null,thePageId:this.pageId,hasNextPage:!0}},mounted:function(){var t=this;this.load(),f.addReloader(this.load),this.autoReloader=setInterval(function(){return t.load()},12e4)},destroyed:function(){f.removeReloader(this.load),this._autoReloader&&(clearInterval(this._autoReloader),this.autoReloader=null)},watch:{query:function(){this.load()},pageSize:function(){this.load()},pageId:function(t){this.thePageId=t,this.load()}},methods:{load:function(){var t=this,e=this.thePageId;f.setLoadingFlag(!0),y.a.post("/v1/_query?timestamp=1&strict=1&skip="+(e-1)*this.pageSize+"&limit="+(this.pageSize+1),{body:this.query}).then(function(s){e===t.thePageId&&(s.data.length>t.pageSize?(t.hasNextPage=!0,t.docs=s.data.slice(0,s.data.length-1)):(t.hasNextPage=!1,t.docs=s.data),f.setLoadingFlag(!1),f.unsetError())}).catch(function(e){t.docs=null,f.setLoadingFlag(!1),f.setError({message:e.response?e.response.statusText:e,title:"Failed to load experiments"})})},prevPage:function(){this.hasPrevPage&&(this.thePageId-=1,this.$emit("pageIdChanged",this.thePageId),this.load())},nextPage:function(){this.hasNextPage&&(this.thePageId+=1,this.$emit("pageIdChanged",this.thePageId),this.load())},hasNavigation:function(){return this.docs&&(this.hasPrevPage||this.hasNextPage)}},computed:{hasPrevPage:function(){return this.thePageId>1}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticStyle:{"padding-top":"15px"},attrs:{fluid:""}},[s("b-row",[s("b-col",[t.docs?s("div",{class:t.hasNavigation?["has-navigation"]:[]},[s("b-list-group",{staticClass:"experiment-list"},t._l(t.docs,function(t){return s("experiment-list-entry",{key:t.id,attrs:{doc:t}})}),1),t._v(" "),t.hasNavigation?s("b-button-toolbar",{staticClass:"d-flex w-100 justify-content-center fixed-bottom navigation-bar",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[s("b-button-group",{staticClass:"mx-1"},[s("b-btn",{attrs:{disabled:!t.hasPrevPage},on:{click:t.prevPage}},[t._v("‹")])],1),t._v(" "),s("b-button-group",{staticClass:"mx-1"},[s("b-btn",[t._v(t._s(this.thePageId))])],1),t._v(" "),s("b-button-group",{staticClass:"mx-1"},[s("b-btn",{attrs:{disabled:!t.hasNextPage},on:{click:t.nextPage}},[t._v("›")])],1)],1):t._e()],1):t._e()])],1)],1)},staticRenderFns:[]};var P=s("VU/8")(L,N,!1,function(t){s("0fhZ")},"data-v-123ed7d1",null).exports,M=s("BO1k"),V=s.n(M),$=s("C4MV"),U=s.n($),H=s("Y4FN"),O=s.n(H);var W=new(function(){function t(){d()(this,t),this._dashboard=function(t){var e={},s=function(s){var a=t[s];U()(e,s,{get:function(){var t=O.a.get(s);return void 0===t?a:t},set:function(t){O.a.set(s,t)}})},a=!0,n=!1,i=void 0;try{for(var r,o=V()(w()(t));!(a=(r=o.next()).done);a=!0)s(r.value)}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return e}({pageId:1,pageSize:10,queryString:""})}return h()(t,[{key:"dashboard",get:function(){return this._dashboard}}]),t}()),q={components:{DelayedProgressBar:g,ErrorBox:b,ExperimentList:P},data:function(){return{pageSize:W.dashboard.pageSize,pageId:W.dashboard.pageId}},mounted:function(){document.title="Dashboard - MLStorage"},methods:{refresh:function(){f.callReloader()},pageIdChanged:function(t){W.dashboard.pageId=t}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",fixed:"top"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-navbar-brand",{attrs:{href:"#"}},[t._v("MLStorage")]),t._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/",exact:""}},[t._v("Dashboard")])],1),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{on:{click:t.refresh}},[t._v("Reload")])],1)],1)],1),t._v(" "),s("delayed-progress-bar",{staticClass:"fixed-top",attrs:{"z-index":"9999"}}),t._v(" "),s("div",{staticClass:"main-wrapper"},[s("error-box"),t._v(" "),s("experiment-list",{attrs:{pageSize:t.pageSize,pageId:t.pageId},on:{pageIdChanged:t.pageIdChanged}})],1)],1)},staticRenderFns:[]};var K=s("VU/8")(q,B,!1,function(t){s("IHbo")},null,null).exports,G={components:{DelayedProgressBar:g,ErrorBox:b},data:function(){return{doc:null}},computed:{id:function(){return this.$route.params.id},name:function(){return this.doc&&this.doc.name}},mounted:function(){var t=this;this.load(),f.addReloader(this.load),this.autoReloader=setInterval(function(){return t.load()},12e4)},destroyed:function(){this._autoReloader&&(clearInterval(this._autoReloader),this.autoReloader=null),f.removeReloader(this.load)},methods:{refresh:function(){f.callReloader()},setDoc:function(t){this.doc=t,document.title=t?(this.doc.name||this.doc.id)+" - MLStorage":"Experiment - MLStorage"},load:function(){var t=this;f.setLoadingFlag(!0),y.a.get("/v1/_get/"+this.id+"?timestamp=1&strict=1").then(function(e){f.setLoadingFlag(!1),f.unsetError(),t.setDoc(e.data)}).catch(function(e){f.setLoadingFlag(!1),f.setError({title:"Failed to load the experiment",message:e.response?e.response.statusText:e}),t.setDoc(null)})},updateDoc:function(t){var e=this;t&&(f.setLoadingFlag(!0),y.a.post("/v1/_update/"+this.id+"?timestamp=1&strict=1",t).then(function(t){f.setLoadingFlag(!1),f.unsetError(),e.setDoc(t.data)}).catch(function(t){f.setLoadingFlag(!1),f.setError({title:"Failed to load the experiment",message:t.response?t.response.statusText:t}),e.setDoc(null)}))},deleteDoc:function(){var t=this;f.setLoadingFlag(!0),y.a.post("/v1/_delete/"+this.id).then(function(e){f.setLoadingFlag(!1),f.unsetError(),t.$router.push("/")}).catch(function(e){f.setLoadingFlag(!1),f.setError({title:"Failed to delete the experiment",message:e.response?e.response.statusText:e}),t.setDoc(null)})}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",fixed:"top"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-navbar-brand",{attrs:{href:"#"}},[t._v("MLStorage")]),t._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/",exact:""}},[t._v("Dashboard")])],1),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/"+t.id+"/",exact:""}},[t._v("Experiment")]),t._v(" "),s("b-nav-item",{attrs:{to:"/"+t.id+"/console",exact:""}},[t._v("Console")]),t._v(" "),s("b-nav-item",{attrs:{to:"/"+t.id+"/browse/"}},[t._v("Browse")])],1),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{on:{click:t.refresh}},[t._v("Reload")])],1)],1)],1),t._v(" "),s("delayed-progress-bar",{staticClass:"fixed-top",attrs:{"z-index":"9999"}}),t._v(" "),s("div",{staticClass:"main-wrapper"},[s("error-box"),t._v(" "),t.doc?s("router-view",{attrs:{doc:t.doc},on:{update:t.updateDoc,delete:t.deleteDoc}}):t._e()],1)],1)},staticRenderFns:[]};var A=s("VU/8")(G,X,!1,function(t){s("s367")},null,null).exports,Y=s("woOf"),Z=s.n(Y),J=s("H52G"),Q=s.n(J),tt=s("Kgw3"),et=s.n(tt),st=s("G9WA"),at=s.n(st),nt=s("yM/8"),it=s.n(nt),rt=s("DtRx"),ot=s.n(rt),lt={props:{value:{default:null},valueToText:{default:function(){return function(t){return t}}},textToValue:{default:function(){return function(t){return t}}}},data:function(){return{editing:!1,errorMessage:null,valueText:this.valueToText(this.value),inputId:ot()()}},watch:{value:function(t){this.valueText=this.valueToText(t)}},computed:{hasError:function(){return!this.errorMessage&&null}},methods:{onClick:function(){var t=this;this.editing=!0,this.errorMessage=null,a.a.nextTick(function(){t.$el.getElementsByTagName("input")[0].focus()})},onValueChange:function(){try{this.$emit("change",this.textToValue(this.valueText)),this.errorMessage=null,this.editing=!1}catch(t){this.errorMessage=t.toString()}}}},ct={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editable-text",on:{click:t.onClick}},[t.editing?s("div",[s("b-form-input",{attrs:{type:"text",id:t.inputId,state:t.hasError},on:{change:t.onValueChange},nativeOn:{blur:function(e){return t.onValueChange(e)}},model:{value:t.valueText,callback:function(e){t.valueText=e},expression:"valueText"}}),t._v(" "),s("b-form-invalid-feedback",{attrs:{id:t.inputId}},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")])],1):s("span",[t.valueText?t._t("default"):t._e(),t._v(" "),t.valueText?t._e():s("span",{staticClass:"placeholder"},[t._v("(click here to edit)")])],2)])},staticRenderFns:[]};var dt={props:{items:{default:null},boldKeys:{default:null}},computed:{sortedItems:function(){var t=this.items||{},e=this.boldKeys||[],s=w()(t);return s.sort(et()({insensitive:!0})),s.map(function(s){return{key:s,value:t[s],bold:e.includes(s)}})}}},ut={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.sortedItems?s("table",{staticClass:"table table-sm dict-table"},[s("tbody",t._l(t.sortedItems,function(e){return s("tr",{key:e.key,class:e.bold?["table-primary","boldItem"]:[]},[s("th",{staticClass:"fieldName"},[t._v(t._s(e.key))]),t._v(" "),s("td",{staticClass:"fieldValue"},[t._v(t._s(e.value))])])}),0)]):t._e()},staticRenderFns:[]};var ht={components:{EditableText:s("VU/8")(lt,ct,!1,function(t){s("XWej")},"data-v-bd512aac",null).exports,DictTable:s("VU/8")(dt,ut,!1,function(t){s("YeV3")},"data-v-4c02b502",null).exports},props:["doc"],data:function(){return{dateText:null,dateDiff:0,statusClass:null,statusText:null,showTraceback:!1,showDefaultConfig:!1,showEnviron:!1}},mounted:function(){var t=this;f.unsetError(),this.timeDiff=new D,this.timeDiff.addWatcher(function(e,s){return t.timeDiffWatcher(e,s)}),this.timeDiff.setTimestamp(this.doc.heartbeat)},destroyed:function(){this.timeDiff&&(this.timeDiff.destroy(),this.timeDiff=null)},computed:{id:function(){return this.$route.params.id},sortedWebUIKeys:function(){if(this.doc.webui){var t=w()(this.doc.webui);return t.sort(et()({insensitive:!0})),t}},startTime:function(){return T.a.utc(1e3*this.doc.start_time).local().format("LLL")},mergedConfig:function(){var t=Z()({},this.doc.default_config||{});return t=Z()(t,this.doc.config||{})},configKeys:function(){return w()(this.doc.config||{})},storageSize:function(){if(this.doc.storage_size)return Q()(this.doc.storage_size)}},methods:{timeDiffWatcher:function(t,e){this.dateText=t,this.dateDiff=e,this.statusClass=z(this.doc,this.dateDiff,"success"),this.statusText=I(this.doc,this.dateDiff)},updateDoc:function(t){t&&this.$emit("update",t)},deleteDoc:function(){this.$emit("delete")},onNameChanged:function(t){t!==this.doc.name&&this.updateDoc({name:t})},onDescriptionChanged:function(t){t!==this.doc.description&&this.updateDoc({description:t})},tagsToText:function(t){return(t||[]).map(function(t){return t.trim()}).filter(function(t){return!!t}).join(", ")},textToTags:function(t){return it()(t.split(",").map(function(t){return t.trim()}).filter(function(t){return!!t}))},onTagsChanged:function(t){t=t||[];var e=this.doc.tags||[];at()(t,e)||this.updateDoc({tags:t})}},watch:{doc:function(t){this.timeDiff.setTimestamp(t.heartbeat)}}},ft={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-modal",{attrs:{id:"deleteConfirm",title:"Confirm to Delete","ok-variant":"danger","ok-title":"Delete It"},on:{ok:t.deleteDoc}},[t._v("\n    Really want to delete the experiment\n      "),t.doc.name?s("span",[t._v('"'+t._s(t.doc.name)+'" ('+t._s(t.doc.id)+")")]):s("span",[t._v('"'+t._s(t.doc.id)+'"')]),t._v("\n    ?\n  ")]),t._v(" "),s("b-container",{staticStyle:{"padding-top":"15px"},attrs:{fluid:""}},[s("b-row",[s("b-col",[s("b-button-toolbar",{staticClass:"toolbar justify-content-end",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[t.doc&&t.sortedWebUIKeys?s("b-button-group",{staticClass:"mx-1"},t._l(t.sortedWebUIKeys,function(e){return s("b-button",{key:"webui:"+e,attrs:{href:t.doc.webui[e]}},[t._v("\n              "+t._s(e)+"\n            ")])}),1):t._e(),t._v(" "),s("b-button-group",{staticClass:"mx-1"},[s("b-button",{attrs:{variant:"secondary",href:"/v1/_tarball/"+t.id}},[t._v("Download")]),t._v(" "),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.deleteConfirm",modifiers:{deleteConfirm:!0}}],attrs:{variant:"danger"}},[t._v("Delete")])],1),t._v(" "),s("div",{staticStyle:{clear:"both"}})],1),t._v(" "),s("table",{staticClass:"table table-hover info-table"},[s("tbody",[s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("ID")]),t._v(" "),s("td",{staticClass:"id"},[s("span",[t._v(t._s(t.doc.id))])])]),t._v(" "),s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Name")]),t._v(" "),s("td",[s("editable-text",{attrs:{value:t.doc.name},on:{change:t.onNameChanged}},[t._v("\n                "+t._s(t.doc.name)+"\n              ")])],1)]),t._v(" "),s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Description")]),t._v(" "),s("td",[s("editable-text",{attrs:{value:t.doc.description},on:{change:t.onDescriptionChanged}},[t._v("\n                "+t._s(t.doc.description)+"\n              ")])],1)]),t._v(" "),s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Tags")]),t._v(" "),s("td",{staticClass:"tags"},[s("editable-text",{attrs:{value:t.doc.tags,valueToText:t.tagsToText,textToValue:t.textToTags},on:{change:t.onTagsChanged}},t._l(t.doc.tags,function(e){return s("span",{key:e},[t._v(t._s(e))])}),0)],1)]),t._v(" "),s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Status")]),t._v(" "),s("td",[s("div",{class:"text-"+t.statusClass},[t._v(t._s(t.statusText))])])]),t._v(" "),t.doc.error&&t.doc.error.message?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Error")]),t._v(" "),s("td",[s("div",[t._v("\n                "+t._s(t.doc.error.message)+"\n                "),t.doc.error.traceback?s("b-button",{staticClass:"show-traceback-btn",attrs:{pressed:t.showTraceback,variant:"secondary",size:"sm"},on:{"update:pressed":function(e){t.showTraceback=e}}},[t._v("\n                  Show Traceback\n                ")]):t._e(),t._v(" "),t.doc.error.traceback&&t.showTraceback?s("pre",{staticClass:"traceback"},[t._v(t._s(t.doc.error.traceback))]):t._e()],1)])]):t._e(),t._v(" "),t.doc.result?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Result")]),t._v(" "),s("td",[s("dict-table",{attrs:{items:t.doc.result}})],1)]):t._e(),t._v(" "),t.doc.config||t.doc.default_config?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Config")]),t._v(" "),t.doc.default_config?s("td",[s("b-button",{attrs:{pressed:t.showDefaultConfig,variant:"secondary",size:"sm"},on:{"update:pressed":function(e){t.showDefaultConfig=e}}},[t._v("\n                Show Default Config\n              ")]),t._v(" "),t.showDefaultConfig&&t.mergedConfig?s("dict-table",{staticStyle:{"margin-top":"5px"},attrs:{items:t.mergedConfig,boldKeys:t.configKeys}}):t.doc.config?s("dict-table",{staticStyle:{"margin-top":"5px"},attrs:{items:t.doc.config}}):t._e()],1):s("td",[s("dict-table",{attrs:{items:t.mergedConfig}})],1)]):t._e(),t._v(" "),t.doc.args?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Args")]),t._v(" "),s("td",[t._v(t._s(t.doc.args))])]):t._e(),t._v(" "),void 0!==t.doc.exit_code&&null!==t.doc.exit_code?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Exit Code")]),t._v(" "),s("td",[t._v(t._s(t.doc.exit_code))])]):t._e(),t._v(" "),t.doc.exc_info&&t.doc.exc_info.work_dir?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Work Dir")]),t._v(" "),s("td",[t._v(t._s(t.doc.exc_info.work_dir))])]):t._e(),t._v(" "),t.storageSize?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("File Size")]),t._v(" "),s("td",[t._v(t._s(t.storageSize))])]):t._e(),t._v(" "),t.doc.start_time?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Start Time")]),t._v(" "),s("td",[t._v(t._s(t.startTime))])]):t._e(),t._v(" "),s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Last Update")]),t._v(" "),s("td",[t._v(t._s(t.dateText))])]),t._v(" "),t.doc.exc_info&&t.doc.exc_info.hostname?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Hostname")]),t._v(" "),s("td",[t._v(t._s(t.doc.exc_info.hostname))])]):t._e(),t._v(" "),t.doc.exc_info&&t.doc.exc_info.pid?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("PID")]),t._v(" "),s("td",[t._v(t._s(t.doc.exc_info.pid))])]):t._e(),t._v(" "),t.doc.exc_info&&t.doc.exc_info.env?s("tr",[s("th",{staticClass:"fieldName",attrs:{scope:"row"}},[t._v("Environ")]),t._v(" "),s("td",[s("b-button",{attrs:{pressed:t.showEnviron,variant:"secondary",size:"sm"},on:{"update:pressed":function(e){t.showEnviron=e}}},[t._v("\n                Show Environmental Variables\n              ")]),t._v(" "),t.showEnviron?s("dict-table",{attrs:{items:t.doc.exc_info.env}}):t._e()],1)]):t._e()])])],1)],1)],1)],1)},staticRenderFns:[]};var vt=s("VU/8")(ht,ft,!1,function(t){s("FK0C")},"data-v-2388b8d1",null).exports,mt=s("gBtx"),gt=s.n(mt),_t=function(){function t(e){d()(this,t),this.loaderFunc=e,this.contentRangeSupported=!0,this.rangeStart=0,this._autoReloader=null,this._hasUnset=!1}return h()(t,[{key:"setReloader",value:function(t){this._hasUnset||(this.contentRangeSupported===t&&this._autoReloader||(this._autoReloader&&(clearInterval(this._autoReloader),this._autoReloader=null),this._autoReloader=setInterval(this.loaderFunc,this.contentRangeSupported?1e4:12e4)),this.contentRangeSupported=t)}},{key:"unsetReloader",value:function(){this._hasUnset||(this._autoReloader&&(clearInterval(this._autoReloader),this._autoReloader=null),this._hasUnset=!0)}}]),t}(),pt={props:["doc"],data:function(){return{loading:!1,finished:!1,logs:null,rangeStart:0}},mounted:function(){var t=this;this.finished="FAILED"===this.doc.status||"COMPLETED"===this.doc.status,this.autoReloader=new _t(function(){return t.load()}),this.finished?this.autoReloader.unsetReloader():this.autoReloader.setReloader(!0),this.load(),f.addReloader(this.load)},destroyed:function(){f.removeReloader(this.load),this.autoReloader.unsetReloader()},computed:{id:function(){return this.$route.params.id}},methods:{load:function(){var t=this;this.loading||(this.loading=!0,f.setLoadingFlag(!0),y.a.get("/v1/_getfile/"+this.id+"/console.log",{headers:this.autoReloader.contentRangeSupported?{Range:"bytes="+this.rangeStart+"-"}:{Range:"bytes=0-"}}).then(function(e){var s=e.headers["content-range"];if(s){t.logs=(t.logs||"")+e.data;try{t.rangeStart=gt()(s.split("-")[1].split("/")[0])+1,t.autoReloader.setReloader(!0)}catch(e){console.log("Could not parse Content-Range."),t.autoReloader.setReloader(!1)}}else t.logs=e.data;f.setLoadingFlag(!1),f.unsetError(),t.loading=!1}).catch(function(e){f.setLoadingFlag(!1),e.response&&404===e.response.status?(t.autoReloader.setReloader(!1),f.unsetError(),t.logs=""):e.response&&416===e.response.status?f.unsetError():(t.autoReloader.setReloader(!1),t.logs="",f.setError({title:"Failed to load console.log",message:e.response?e.response.statusText:e})),t.loading=!1}))}},updated:function(){var t=this.$el.getElementsByClassName("log-content");t&&t[0]&&(this.$el.scrollTop=t[0].scrollHeight)},watch:{doc:function(t){this.finished="FAILED"===t.status||"COMPLETED"===t.status,this.finished&&this.autoReloader.unsetReloader()}}},bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"log-wrapper bg-dark"},[this.logs?e("div",{staticClass:"log-content"},[e("pre",{staticClass:"text-light"},[this._v(this._s(this.logs))])]):this._e()])},staticRenderFns:[]};var xt=s("VU/8")(pt,bt,!1,function(t){s("xI3h")},"data-v-0a25d6c5",null).exports,yt={data:function(){return{items:null}},mounted:function(){this.load(),f.addReloader(this.load)},destroyed:function(){f.removeReloader(this.load)},computed:{id:function(){return this.$route.params.id},path:function(){return this.normalizePath(this.$route.params.path||"")},hasParentPath:function(){return"/"!==this.path},sortedDirs:function(){return this.filterItems(function(t){return t.isdir})},sortedFiles:function(){return this.filterItems(function(t){return!t.isdir})}},watch:{path:function(){this.load()}},methods:{load:function(){var t=this;f.setLoadingFlag(!0),y.a.get("/v1/_listdir/"+this.id+this.path).then(function(e){t.items=e.data,f.setLoadingFlag(!1),f.unsetError()}).catch(function(e){t.items=null,f.setLoadingFlag(!1),f.setError({title:"Failed to list directory",message:e.response?e.response.statusText:e})})},filterItems:function(t){var e=this;if(this.items){var s=this.items.map(function(t,e){return[t.name,e]}).filter(function(s,a){return t(e.items[a])});return s.sort(et()({insensitive:!0})),s.map(function(t){return e.items[t[1]]})}},formatDateTime:function(t){return function(t,e){return T.a.utc(1e3*t).local().format(e||"LLL")}(t,"YYYY-MM-DD H:mm:ss")},fileSize:function(t){return Q()(t)},normalizePath:function(t){for(var e=t.split("/"),s=[],a=0;a<e.length;++a)".."===e[a]?e.length>0&&s.pop():"."!==e[a]&&""!==e[a]&&s.push(e[a]);return"/"+s.join("/")},resolvePath:function(t,e){var s=this.normalizePath(this.path+"/"+t);return e&&!s.endsWith("/")&&(s+="/"),s}}},jt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticStyle:{"padding-top":"15px"},attrs:{fluid:""}},[s("b-row",[s("b-col",[t.items||t.hasParentPath?s("table",{staticClass:"table table-hover table-sm"},[s("tr",[s("th",{staticClass:"shrink",attrs:{scope:"col"}}),t._v(" "),s("th",{staticClass:"expand",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{staticClass:"shrink",attrs:{scope:"col"}},[t._v("Size")]),t._v(" "),s("th",{staticClass:"shrink",attrs:{scope:"col"}},[t._v("Modify Time")])]),t._v(" "),t.hasParentPath?s("tr",[s("td",{staticClass:"shrink"},[s("octicon",{attrs:{name:"file-directory"}})],1),t._v(" "),s("td",{staticClass:"expand"},[s("b-link",{attrs:{to:"/"+t.id+"/browse"+t.resolvePath("..",!0)}},[t._v("..")])],1),t._v(" "),s("td",{staticClass:"shrink"}),t._v(" "),s("td",{staticClass:"shrink"})]):s("tr",[s("td",{staticClass:"shrink"},[s("octicon",{attrs:{name:"file-directory"}})],1),t._v(" "),s("td",{staticClass:"expand"},[s("b-link",{attrs:{to:"/"+t.id+"/browse/"}},[t._v(".")])],1),t._v(" "),s("td",{staticClass:"shrink"}),t._v(" "),s("td",{staticClass:"shrink"})]),t._v(" "),t._l(t.sortedDirs,function(e){return s("tr",{key:e.name},[s("td",{staticClass:"shrink"},[s("octicon",{attrs:{name:"file-directory"}})],1),t._v(" "),s("td",{staticClass:"expand"},[s("b-link",{attrs:{to:"/"+t.id+"/browse"+t.resolvePath(e.name,!0)}},[t._v(t._s(e.name))])],1),t._v(" "),s("td",{staticClass:"shrink"}),t._v(" "),s("td",{staticClass:"shrink"},[t._v(t._s(t.formatDateTime(e.mtime)))])])}),t._v(" "),t._l(t.sortedFiles,function(e){return s("tr",{key:e.name},[s("td",{staticClass:"shrink"},[s("octicon",{attrs:{name:"file"}})],1),t._v(" "),s("td",{staticClass:"expand"},[s("a",{attrs:{href:"/v1/_getfile/"+t.id+t.resolvePath(e.name)}},[t._v(t._s(e.name))])]),t._v(" "),s("td",{staticClass:"shrink"},[t._v(t._s(t.fileSize(e.size)))]),t._v(" "),s("td",{staticClass:"shrink"},[t._v(t._s(t.formatDateTime(e.mtime)))])])})],2):t._e()])],1)],1)},staticRenderFns:[]};var wt=s("VU/8")(yt,jt,!1,function(t){s("GHwr")},"data-v-19de94c6",null).exports;a.a.use(l.a);var Ct=new l.a({mode:"history",routes:[{path:"/",component:K},{path:"/:id([A-Za-z0-9]{24})",component:A,children:[{path:"",component:vt},{path:"console",component:xt},{path:"browse:path(/.*)?",component:wt}]}]});a.a.use(n.a),a.a.component("octicon",i.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:Ct,components:{App:o},template:"<App/>"})},XWej:function(t,e){},YeV3:function(t,e){},"csa/":function(t,e){},luMz:function(t,e){},s367:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},xI3h:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96441da86c4e7475d6d5.js.map