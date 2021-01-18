import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Money' // 定义默认页面
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/Labels',
    component: Labels
  },
  {
    path: '/Statistics',
    component: Statistics

  },
  {
    path: '*', // 除以上页面的所有页面、用来提示路径错误
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
