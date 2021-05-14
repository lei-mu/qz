import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/element-ui'
import '@/utils/commonContext'
Vue.config.productionTip = false
if (store.getters.isLogin) {
  store.dispatch('getUserInfo')
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
