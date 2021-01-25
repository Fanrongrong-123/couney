import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import icon from '@/components/icon.vue'
import tagListModel from '@/models/tagListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('icon', icon)

window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  const message = tagListModel.create(name)
  if (name) {
    if (message === 'duplicate') {
      alert('标签名重复')
    } else if (message === 'success') {
      alert('标签名创建成功')
    }
  }
}

new Vue({
  router, // 自动引用index.ts的router
  store,
  render: h => h(App)
}).$mount('#app')
