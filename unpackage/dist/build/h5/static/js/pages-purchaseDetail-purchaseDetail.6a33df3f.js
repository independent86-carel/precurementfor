(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-purchaseDetail-purchaseDetail"],{"1cf2":function(t,i,e){"use strict";e.r(i);var n=e("9d2a"),a=e("eb06");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("9ff8");var r,l=e("f0c5"),o=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"d5618c1c",null,!1,n["a"],r);i["default"]=o.exports},3753:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrapper[data-v-d5618c1c]{background-color:#e0e0e0;height:calc(100vh - 44px)}.wrapper .lists .list-table[data-v-d5618c1c]{width:100vw;background-color:#fff;margin-top:%?30?%;margin-bottom:%?30?%}.list-table .addborder[data-v-d5618c1c]{overflow:hidden;font-size:%?24?%;padding-top:%?22?%;-webkit-box-sizing:border-box;box-sizing:border-box;height:%?88?%;vertical-align:middle;border-bottom:%?2?% solid #e0e0e0;color:#999}.list-table .header[data-v-d5618c1c]{padding-top:%?14?%;height:%?88?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;line-height:auto;font-weight:700;font-size:%?24?%}.list-table td[data-v-d5618c1c]{width:%?200?%;text-align:center}.list-table td[data-v-d5618c1c]{width:auto}.viewFile .viewFile-column[data-v-d5618c1c]{font-size:14px;color:#3b4144;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 16px}.viewFile .viewFile-column uni-view[data-v-d5618c1c]{line-height:%?48?%}.viewFile .viewFile-column .viewFile-column-left uni-image[data-v-d5618c1c]{vertical-align:text-top;margin-right:%?17?%;width:%?32?%;height:%?32?%}.viewFile .viewFile-column .viewFile-column-right[data-v-d5618c1c]{color:#5592f7}',""]),t.exports=i},"4fe3":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAABAElEQVRYR+2XMY7CMBBFfyYdBVuCRE2oOcciSq6QSJFSpN+OA9CNfA2W02y5UEBBQZEgF9GgILYIQkF2jJbCrv3/fD/LY03AzCMi+gHQg9naFUUR5Xl+NpM1dwfMPCOibxsTEVkmSfJlo/3TBEqpTwAbGxMR0VVVjdM03droa02nALeia631IssybRPCRQCIyBHAr2GAEsDKSQDDwo3tPoAn4Am8PYH6kzrVHbPDWxcAfQCTRx5tBA5xHA87FG5IlVJ7AIN7v2dX4IrAB4DIlICrw7f6PCPw8hA+gCfgCXgC/0+gy2Tkok3Wo5ntbOiifnn955l5SkRzF44mHmEYri/jm4EmOL11tgAAAABJRU5ErkJggg=="},"597b":function(t,i,e){var n=e("3753");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7bb35286",n,!0,{sourceMap:!1,shadowMode:!1})},"897f":function(t,i,e){"use strict";(function(t){e("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{id:null,listData:null,info:{},testText:"niua",batchList:null}},onLoad:function(i){t("log",i,"option"," at pages/purchaseDetail/purchaseDetail.vue:203"),this.id=i.id,t("log",this.id,"id"," at pages/purchaseDetail/purchaseDetail.vue:205"),this.getData(this.id)},computed:{useDirection:function(){return 1==this.info.useDirection?"科研急需":2==this.info.useDirection?"教学急需":"其他(批量集采的采购周期为6~12个月)"},totalMoney:function(){if(this.batchList){for(var t=0,i=0;i<this.batchList.length;i++)"number"!=typeof this.batchList[0].money?t+=parseFloat(this.batchList[i].money):t+=this.batchList[i].money;return t}return""}},methods:{viewReport:function(i){t("log",i,1," at pages/purchaseDetail/purchaseDetail.vue:241");var e="http://192.168.0.155:8081/purchase/base/file/download?name=".concat(i);t("log",e," at pages/purchaseDetail/purchaseDetail.vue:243"),uni.downloadFile({url:e,success:function(i){var e=i.tempFilePath;uni.openDocument({filePath:e,success:function(i){t("log","打开文档成功"," at pages/purchaseDetail/purchaseDetail.vue:253")}})}})},viewFile:function(i){t("log",i,2," at pages/purchaseDetail/purchaseDetail.vue:263");var e="http://192.168.0.155:8081/purchase/base/file/download?name=".concat(i);t("log",e," at pages/purchaseDetail/purchaseDetail.vue:265"),uni.downloadFile({url:e,success:function(i){var e=i.tempFilePath;uni.openDocument({filePath:e,success:function(i){t("log","打开文档成功"," at pages/purchaseDetail/purchaseDetail.vue:275")}})}})},getData:function(t){var i=this;this.$http("GET","/web/api/purchaseInfo/get/".concat(t,"?null")).then((function(t){200!=t.code?(uni.showToast({title:t.msg,duration:2e3,icon:"loading"}),setTimeout((function(){uni.hideToast()}),1e3)):(uni.showToast({title:"更新页面成功",duration:2e3}),setTimeout((function(){uni.hideToast()}),1e3),i.listData=t.data,i.info=t.data.info,i.batchList=t.data.inventory)}))},onPullDownRefresh:function(){this.getData(this.id),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)}}};i.default=n}).call(this,e("0de9")["log"])},"9d2a":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uniList:e("ca11").default,uniListItem:e("6930").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"lists"},[n("uni-list",{staticClass:"column1"},[n("uni-list-item",{attrs:{title:"申请单位",note:"",rightText:t.info.orgName}}),n("uni-list-item",{attrs:{title:"项目负责人",note:"",rightText:t.info.username}}),n("uni-list-item",{attrs:{title:"联系电话",note:"",rightText:t.info.phone}}),n("uni-list-item",{attrs:{title:"申请日期",note:"",rightText:t.info.date}}),n("uni-list-item",{attrs:{title:"经费账号",note:"",rightText:t.info.account}}),n("uni-list-item",{attrs:{title:"项目名称",note:"",rightText:t.info.name}}),n("uni-list-item",{attrs:{title:"计划单号",note:"",rightText:t.info.number}}),n("uni-list-item",{attrs:{title:"采购是否含有批量集采目录中的货物",note:"",rightText:"否"}})],1),n("v-uni-view",{staticClass:"list-table"},[n("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-left":"0","scroll-y":"true"}},[n("tbody",[n("v-uni-view",{staticClass:"addborder header"},[n("tr",{staticStyle:{width:"100%"}},[n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("序号")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("货物服务名称")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("采购类型")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("是否属于政府集中采购目录")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("参考品牌/规格/型号")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("额定功率(W)")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("单位（台/件/套/次）")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("数量")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("计划单价(元)")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("计划总金额(元)")])],1)])]),t._l(t.batchList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"addborder"},[n("tr",[n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(e+1))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.name))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.type))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.isBatch))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.number))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.power))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.company))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.num))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.unitPrice))])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(i.money))])],1)])])})),n("v-uni-view",{staticClass:"addborder"},[n("tr",[n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v("总计")])],1),n("td",[n("v-uni-view",{staticStyle:{width:"150rpx"}},[t._v(t._s(t.totalMoney))])],1)])])],2)])],1),n("uni-list",{staticClass:"column2"},[n("uni-list-item",{attrs:{title:"使用方向",note:"",rightText:t.useDirection}}),n("uni-list-item",{attrs:{title:"急需说明",note:"",rightText:t.info.needContent}}),n("uni-list-item",{attrs:{title:"论证 报告及其他附件",note:"",rightText:""}}),n("v-uni-view",{staticClass:"viewFile"},[t.info.report?n("v-uni-view",{staticClass:"viewFile-column"},[n("v-uni-view",{staticClass:"viewFile-column-left"},[n("v-uni-image",{attrs:{src:e("4fe3"),mode:""}}),t._v(t._s(t.info.report))],1),n("v-uni-view",{staticClass:"viewFile-column-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.viewReport(t.info.report)}}},[t._v("查看")])],1):t._e(),t.info.file?n("v-uni-view",{staticClass:"viewFile-column"},[n("v-uni-view",{staticClass:"viewFile-column-left"},[n("v-uni-image",{attrs:{src:e("4fe3"),mode:""}}),t._v(t._s(t.info.file))],1),n("v-uni-view",{staticClass:"viewFile-column-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.viewFile(t.info.file)}}},[t._v("查看")])],1):t._e()],1),n("uni-list-item",{attrs:{title:"情况说明",note:"",rightText:t.info.remark}})],1)],1)],1)},s=[]},"9ff8":function(t,i,e){"use strict";var n=e("597b"),a=e.n(n);a.a},eb06:function(t,i,e){"use strict";e.r(i);var n=e("897f"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);