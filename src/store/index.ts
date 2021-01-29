import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 将store绑到Vue.prototype上

export default new Vuex.Store({
  state: {}, // 相当于data
  mutations: {} // 相当于methods
})
