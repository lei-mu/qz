(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-745c8e02"],{"1a82":function(t,a,e){t.exports=e.p+"static/img/wechatSmall.bb20aed4.png"},5086:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"aq-header"},[s("div",{staticClass:"co-main am-flex-rc-between aq-header__main"},[s("div",[s("a",{staticClass:"aq-header__font--lights am-flex-rc-center am-inline-block",attrs:{href:t.HOME_URL}},[s("img",{staticClass:"aq-header__home-icon",attrs:{src:e("618e"),alt:"首页"}}),t._v("首页")])]),s("div",{staticClass:"am-flex-row-center aq-header__btn-wrap"},[t.userIsLogin?[s("div",{staticClass:"aq-header__btn-list"},[s("a",{staticClass:"aq-header__font--lights",attrs:{href:t.MEMBERSHIP_CENTER}},[t._v(t._s(t.userInfo.accountName))]),s("span",{staticClass:"aq-header__vertical-line"},[t._v("|")]),s("span",{staticClass:"aq-header__login-out-btn aq-header--pointer",on:{click:t.logOut}},[t._v("退出")])]),s("div",{staticClass:"aq-header__btn-list"},[s("a",{attrs:{href:t.MEMBERSHIP_CENTER,target:"_blank"}},[t._v("会员中心")])])]:[s("div",{staticClass:"aq-header__btn-list"},[t._v("请"),s("span",{staticClass:"aq-header__font--lights aq-header--pointer",on:{click:t.userLogin}},[t._v("登录")])]),s("div",{staticClass:"aq-header__btn-list"},[s("a",{staticClass:"aq-header__font--lights",attrs:{href:t.registerPage}},[t._v("注册")]),s("span",{staticClass:"aq-header__vertical-line"},[t._v("|")]),s("span",{on:{click:t.userLogin}},[t._v("会员中心")])])],t._m(0),s("div",{staticClass:"aq-header__btn-list"},[s("a",{attrs:{href:t.CLIENT_DOWNLOAD_URL,download:"",target:"_blank"}},[t._v("下载到桌面")])]),s("div",{staticClass:"aq-header__btn-list"},[s("a",{attrs:{href:t.HELP_CENTER,target:"_blank"}},[t._v("帮助中心")])]),s("div",{staticClass:"aq-header__btn-list"},[t._v("客服："),t._m(1)])],2)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"aq-header__btn-list aq-header__mobile aq-header--pointer"},[t._v("手机经营帮 "),s("div",{staticClass:"aq-header__mobile-modal"},[s("div",{staticClass:"aq-header__mobile-list am-flex-col-center"},[s("img",{staticClass:"aq-header__mobile-img",attrs:{src:e("a651"),alt:"安卓App"}}),s("div",{staticClass:"aq-header__mobile-name"},[t._v("安卓App")])]),s("div",{staticClass:"aq-header__mobile-list am-flex-col-center"},[s("img",{staticClass:"aq-header__mobile-img",attrs:{src:e("5e27"),alt:"苹果App"}}),s("div",{staticClass:"aq-header__mobile-name"},[t._v("苹果App")])]),s("div",{staticClass:"aq-header__mobile-list am-flex-col-center"},[s("img",{staticClass:"aq-header__mobile-img",attrs:{src:e("5938"),alt:"公众号"}}),s("div",{staticClass:"aq-header__mobile-name"},[t._v("公众号")])]),s("div",{staticClass:"aq-header__mobile-list am-flex-col-center"},[s("img",{staticClass:"aq-header__mobile-img",attrs:{src:e("1a82"),alt:"微信小程序"}}),s("div",{staticClass:"aq-header__mobile-name"},[t._v("微信小程序")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"aq-header__font--lights"},[t._v(t._s(t.customerTelephone))])}],n=e("d2da"),r=e("83d6"),c={name:"HeaderBar",data:function(){return{HOME_URL:n["e"],customerTelephone:r["customerTelephone"],registerPage:n["i"],HELP_CENTER:n["d"],CLIENT_DOWNLOAD_URL:n["a"],MEMBERSHIP_CENTER:n["f"]}},computed:{userIsLogin:function(){return this.$store.getters.isLogin},userInfo:function(){return console.log(this.$store.state),this.$store.state.userInfo}},methods:{userLogin:function(){this.$AqLogin.show()},logOut:function(){var t=this;this.$confirm("确认退出？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$store.dispatch("logOut").then((function(a){a.result&&t.$message.success("退出登录！")}))}))}}},l=c,o=(e("8a5f"),e("2877")),_=Object(o["a"])(l,s,i,!1,null,"283ab464",null);a["default"]=_.exports},5938:function(t,a,e){t.exports=e.p+"static/img/wechatWeb.a0d1ea0f.png"},"5e27":function(t,a,e){t.exports=e.p+"static/img/ios.49c44dc0.png"},"618e":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAACCUlEQVQ4T+2UT2tTQRTFz5lXWwWhUvEb6EJRwWWii4hacFG1m6KJAUGKgZK8iKKCXVQUsQslr0XQEhdq8qrZWFJwURftJnkfQPBLCKULF0XNHHkviVRs/tS1sxnmzp3f3Hvn3CH6GMHbfMIaWyQoWk7G0oW18Fi97FYAnIsQwvv4VS/TxrEXNyjlMiLnAOxq+f6ARTae9l7WfXcVQqJlX4qnvPGe4NWZxMDQoeMFgFNNZ640Z41GK3LeSicInOobXC/eHMGeRgXgmRbUk1RuAVOA3G0y7R5x8CZ/WI6qAA4C+E5qygrfKLyK4iWuG2KvxOcABrdc0BkclPLnRbsIcBjEVzYaE6IZBXEvTL5VCkF4QtkVOU4FwoFmJqjGkt7Fv2pcK7m3SMwCcAB8blibdozzENDY9g+sZUNOW6EE4JighqG5E0sWnkUXfZzLDg3vNy8IXItSFap07AwsSwCPdFWN9EU0KUgPSFxovq1eb6zrBgPfXZAwGSlRmgXtGuD4AEZ6SbG1vy7ZKwRPg7wbBiuoyNq73FFj8Qkyty3tIMEFCAN9QttuPy2QccBNQU/l6OwfDRKU3UUBl3cIbbt3UUUHsIQNY7AZEqzFbhL7dqTjjhGT4/FkYSmE1f38JUgf/oP/rRQ1P3cfFtPt5v3dntRELDm/HK4DPzsmMfyHtwxKwOOTKe9R2/gLvJH9SNOVbJcAAAAASUVORK5CYII="},"8a5f":function(t,a,e){"use strict";e("8e14")},"8e14":function(t,a,e){},a651:function(t,a,e){t.exports=e.p+"static/img/android.36c3b60a.png"}}]);