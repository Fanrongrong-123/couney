import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex) // 将store绑到Vue.prototype上

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: { // 相当于methods
    fetchRecords (state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    createRecord (state, record) {
      const record2: RecordItem = clone(record) // 深拷贝做一个record的副本，避免传值互相影响
      record2.createAt = new Date()
      state.recordList.push(record2) // this.recordList?.push(record2)
      store.commit('saveRecords')
    },
    saveRecords (state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    }
  }
})

export default store
