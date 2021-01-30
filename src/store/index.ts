import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId'

Vue.use(Vuex) // 将store绑到Vue.prototype上

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
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
    },
    fetchTags (state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      return state.tagList
    },
    createTag (state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        alert('标签名重复')
        return 'duplicate'
      }
      const id = createId().toString()
      state.tagList.push({
        id,
        name: name
      }) // id:id可缩写为id
      store.commit('saveTags')
      alert('标签名创建成功')
      return 'success'
    },
    saveTags (state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    }
  }
})

export default store
