(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{430:function(t,e,n){"use strict";var r={name:"PageHeader",props:{title:{type:String,required:!0}}},c=n(24),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"page-header",attrs:{"z-index":100,"sticky-top":100}},[e("div",{staticClass:"page-header-content"},[t._m(0),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),e("h1",{staticClass:"page-title"},[t._v("\n      "+t._s(t.title)+"\n    ")])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"logo",attrs:{href:"/"}},[t("img",{attrs:{src:"logo.png",alt:"Vigotech Alliance"}})])}],!1,null,null,null);e.a=component.exports},434:function(t,e,n){var map={"./legal.md":[437,7],"./test.md":[438,8]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=434,t.exports=r},441:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(38),{components:{PageHeader:n(430).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,n(434)("./".concat(r.slug,".md"));case 3:return c=e.sent,e.abrupt("return",{content:c.default});case 5:case"end":return e.stop()}}),e)})))()}}),o=n(24),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{key:t.$route.params.slug},[e("PageHeader",{attrs:{title:t.$route.params.slug}}),t._v(" "),e("section",{attrs:{id:"post"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("div",{staticClass:"post-content"},[e("div",{domProps:{innerHTML:t._s(t.content)}})])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);