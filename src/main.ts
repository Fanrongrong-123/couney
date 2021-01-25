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

// 问题：全局变量太多，容易冲突；严重依赖window(node.js没有window)

// 解决

// record story

new Vue({
  router, // 自动引用index.ts的router
  store,
  render: h => h(App)
}).$mount('#app')
