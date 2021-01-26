import createId from '@/lib/createId'

const localStorageKeyName = 'tagList'

const tagStore = {
  tagList: [] as Tag[],

  fetchTags () {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.tagList
  },

  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0]
  },

  createTag (name: string) {
    const names = this.tagList.map(item => item.name)
    if (names.indexOf(name) >= 0) {
      alert('标签名重复')
      return 'duplicate'
    }
    const id = createId().toString()
    this.tagList.push({
      id,
      name: name
    }) // id:id可缩写为id
    this.saveTags()
    alert('标签名创建成功')
    return 'success'
  },

  removeTag (id: string) {
    let index = 1
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i
        break
      }
    }
    this.tagList.splice(index, 1)
    this.saveTags()
    return true // 简化了成功和失败的代码，具体看removeTag定义的类型
  },

  updateTag (id: string, name: string) {
    const idList = this.tagList.map(item => item.id)
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0]
        tag.name = name
        this.saveTags()
        return 'success'
      }
    } else {
      return 'not found'
    }
  },
  saveTags () {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList))
  }
}

tagStore.fetchTags() // 初始化data（从数据库拿值）

export default tagStore
