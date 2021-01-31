import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId'
import router from '@/router'

Vue.use(Vuex) // 将store绑到Vue.prototype上

type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,

  mutations: { // 相当于methods
    setCurrentTag (state, id) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
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
    },
    updateTag (state, payload: { id: string; name: string }) {
      const idList = state.tagList.map(item => item.id)
      const {
        id,
        name
      } = payload // es6析构语法，id和name来自于object
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
          alert('标签名重复')
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0]
          tag.name = name
          store.commit('saveTags')
        }
      }
    },
    removeTag (state, id: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1)
        store.commit('saveTags')
        router.back()
      } else {
        alert('删除失败')
      }
    }
  }
})

export default store
