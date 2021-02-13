import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import icon from '@/components/icon.vue'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('icon', icon)

new Vue({
  router, // 自动引用index.ts的router
  store,
  render: h => h(App)
}).$mount('#app')

// 将页面下移遮住流浪器导航栏
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 10000)
  }, 0)
}
