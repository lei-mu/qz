(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ebdb884"],{"0650":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aq-footer"},[i("div",{staticClass:"co-main aq-footer__content"},[i("div",{staticClass:"aq-footer__up"},[i("div",{staticClass:"aq-footer__quick-link"},[i("dl",{staticClass:"aq-footer__link-dl"},[i("dt",[t._v("关于经营帮")]),t._l(t.aboutLink,(function(e,a){return i("dd",{key:a},[i("a",{attrs:{href:e.linkPath,target:"_blank",title:e.name}},[t._v("> "+t._s(e.name))])])}))],2),i("dl",{staticClass:"aq-footer__link-dl"},[i("dt",[t._v("新手指南")]),t._l(t.guideLink,(function(e,a){return i("dd",{key:a},[i("a",{attrs:{href:e.linkPath,target:"_blank",title:e.name}},[t._v("> "+t._s(e.name))])])}))],2),i("dl",{staticClass:"aq-footer__link-dl"},[i("dt",[t._v("采购服务")]),t._l(t.purchaseLink,(function(e,a){return i("dd",{key:a},[i("a",{attrs:{href:e.linkPath,target:"_blank",title:e.name}},[t._v("> "+t._s(e.name))])])}))],2)]),t._m(0),i("div",{staticClass:"aq-footer__tel"},[i("div",{staticClass:"aq-footer__tel-label"},[t._v("客服电话（工作时间：10:00-19:00）")]),i("div",{staticClass:"aq-footer__tel-num"},[t._v(t._s(t.customerTelephone))])])]),i("div",{staticClass:"aq-footer__down"},[i("div",{staticClass:"aq-footer__other-link"},[i("a",{staticClass:"aq-footer__other-link-list",attrs:{href:t.COMPANY_PROFILE,target:"_blank"}},[t._v("企业简介")]),i("a",{staticClass:"aq-footer__other-link-list",attrs:{href:t.SERVICE_AGREEMENT,target:"_blank"}},[t._v("服务协议")]),i("a",{staticClass:"aq-footer__other-link-list",attrs:{href:t.CONTACT_US,target:"_blank"}},[t._v("联系我们")])]),i("div",{staticClass:"aq-footer__copyright"},[t._v(t._s(t.copyrightNotice)+" 备案号："),i("a",{attrs:{href:"https://beian.miit.gov.cn/",rel:"nofollow noopener noreferrer",target:"_blank"}},[t._v(t._s(t.websiteRecordNumber))])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aq-footer__qr-code"},[a("div",{staticClass:"aq-footer__qr-list am-flex-col-center"},[a("img",{staticClass:"aq-footer__qr-img",attrs:{src:i("d620"),alt:"手机版下载"}}),a("div",{staticClass:"aq-footer__qr-name"},[t._v("手机版下载")])]),a("div",{staticClass:"aq-footer__qr-list am-flex-col-center"},[a("img",{staticClass:"aq-footer__qr-img",attrs:{src:i("65f2"),alt:"微信公众号"}}),a("div",{staticClass:"aq-footer__qr-name"},[t._v("微信公众号")])])])}],o=(i("fb6a"),i("dca8"),i("cebe")),s=i.n(o),n=s.a.create();n.defaults.timeout=5e4,n.defaults.baseURL="https://api.sgbwl.com/sgb-cailiao";var c=n,g=function(){return c.get("/quickLink/list")},A=i("83d6"),l=i("d2da"),f={name:"FooterSection",data:function(){return{aboutLink:[],guideLink:[],purchaseLink:[],copyrightNotice:A["copyrightNotice"],websiteRecordNumber:A["websiteRecordNumber"],customerTelephone:A["customerTelephone"],COMPANY_PROFILE:l["b"],SERVICE_AGREEMENT:l["g"],CONTACT_US:l["c"]}},created:function(){this.getQuickLink()},methods:{getQuickLink:function(){var t=this;g().then((function(e){var i=e.data,a=i.code,r=i.data;200===a&&(t.aboutLink=Object.freeze(r.slice(0,2)),t.guideLink=Object.freeze(r.slice(2,5)),t.purchaseLink=Object.freeze(r.slice(5,8)))}))}}},d=f,I=(i("f8dc"),i("2877")),u=Object(I["a"])(d,a,r,!1,null,"689e28e0",null);e["default"]=u.exports},"1dcc":function(t,e,i){},"65f2":function(t,e,i){t.exports=i.p+"img/gzh.1748cf82.jpg"},d620:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAIAAABBat1dAAAE+klEQVR4nO3dwW7jNhRA0bjo//9yurmY1UiAVOZRds7ZFmNJji8IiCX5+v7+/gK+vv7ZfQPwFGKAiAEiBogYIGKAiAHy79F/eL1ek/fx/+2dMFn4dV19kJNLH33Ujbtd+FF7nXy9RgaIGCBigIgBIgaIGCBigBzOMxz5mNf5N65y8uwLv5arV1/7F1n4aW/3UzEyQMQAEQNEDBAxQMQAEQNEDJDLk24nNi5wObHwrvY+4I2pwGd65u/ky8gAf4gBIgaIGCBigIgBIgbIynmG93Lyinrgjf7Cnb8W7gj2yxkZIGKAiAEiBogYIGKAiAHy+fMMN96pP3P3q4VLIExN/JWRASIGiBggYoCIASIGiBggYoCsnHR7r3mZt5t4mjlPaOBspMf+TowMEDFAxAARA0QMEDFAxAC5PM8w8B56rRuv528848IVOVc3ETux93yTt/upGBkgYoCIASIGiBggYoCIASIGyOuxKy1+2topoYFDfRZOxt3wG34nRgaIGCBigIgBIgaIGCBigEzMMyzcrmtm56+P30jr5AEfe2N/tfZujQwQMUDEABEDRAwQMUDEADncRGzvWR4DO389dj3DVY89dWXhN3xj3unGMxoZIGKAiAEiBogYIGKAiAEiBsjlk3v2mjm9ZuafXLXwEjPLrQam9izugR8hBogYIGKAiAEiBogYIDvnGWbe9N+w8J36wF3NGJhIWevGDRsZIGKAiAEiBogYIGKAiAEiBsjKSbeFe9oNLCUZOJ7nxMzs4cB6oLX7+V29YTvqwY8QA0QMEDFAxAARA0QMkM9f3LP3lJqFi35mTugZeNO/8J+s/T0YGSBigIgBIgaIGCBigIgBcjjPMLAr1g2PPazkqr2zHyf27oa2d7LIyAARA0QMEDFAxAARA0QMEDFADifd9s7XzJx6v9Fj7/bqjb3d7OEJIwNEDBAxQMQAEQNEDBAxQC4v7jkxsJHWiY+f5Zh5wIHzTW6Y+QkZGSBigIgBIgaIGCBigIgB8lp4PMRC7/W2e62NUxYnfsNfxMgAEQNEDBAxQMQAEQNEDBAxQA4X9xyZWSszcPW3O4LoxoPsXfB0w8BP5eQSRgaIGCBigIgBIgaIGCBigFyeZ1joxgvyGQOv55+5T9naq+99doeVwH1igIgBIgaIGCBigIgBIgbI5R31Tgxszrd3cc8zZ8rWTlDundo7MrMFoJEBIgaIGCBigIgBIgaIGCCH8wwf42OmJj5mEzEn98DTiQEiBogYIGKAiAEiBsjhJmLP/P/aT1x95bz2FfXVT3vsu/ar1u4Et/dkGSMDRAwQMUDEABEDRAwQMUDEALl8cs9jp3iOzOw/tXCjtKuXODHwx5rZwmzmV2dkgIgBIgaIGCBigIgBIgbI5XmGE89csDJzVMrCG37mtm4zy2v2PruRASIGiBggYoCIASIGiBggYoCsnHT7eDPrhK5+1Imjq9xYpXT1EicftfDqJ258w0YGiBggYoCIASIGiBggYoB8/jzDjcNgBs6PmVkntPfqC7/5IycfdWOWw8gAEQNEDBAxQMQAEQNEDJCV8wzP3P3qyMzdzqxbuGrvaoqFV1m7NMLIABEDRAwQMUDEABEDRAwQMUAuT7rNnOAy4MYSk2fOKs7sybX36je+eZuIwX1igIgBIgaIGCBigIgB8nrmu3OYZ2SAiAEiBogYIGKAiAEiBogYIP8BvachHeCV5G4AAAAASUVORK5CYII="},dca8:function(t,e,i){var a=i("23e7"),r=i("bb2f"),o=i("d039"),s=i("861d"),n=i("f183").onFreeze,c=Object.freeze,g=o((function(){c(1)}));a({target:"Object",stat:!0,forced:g,sham:!r},{freeze:function(t){return c&&s(t)?c(n(t)):t}})},f8dc:function(t,e,i){"use strict";i("1dcc")},fb6a:function(t,e,i){"use strict";var a=i("23e7"),r=i("861d"),o=i("e8b5"),s=i("23cb"),n=i("50c4"),c=i("fc6a"),g=i("8418"),A=i("b622"),l=i("1dde"),f=i("ae40"),d=l("slice"),I=f("slice",{ACCESSORS:!0,0:0,1:2}),u=A("species"),_=[].slice,B=Math.max;a({target:"Array",proto:!0,forced:!d||!I},{slice:function(t,e){var i,a,A,l=c(this),f=n(l.length),d=s(t,f),I=s(void 0===e?f:e,f);if(o(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?r(i)&&(i=i[u],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return _.call(l,d,I);for(a=new(void 0===i?Array:i)(B(I-d,0)),A=0;d<I;d++,A++)d in l&&g(a,A,l[d]);return a.length=A,a}})}}]);